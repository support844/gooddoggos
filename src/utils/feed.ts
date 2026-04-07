import Parser from "rss-parser";

export interface FeedPost {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  imageUrl: string | null;
  guid: string;
}

const FEED_URL = "https://gooddoggos.substack.com/feed";
const FEED_TIMEOUT_MS = 6000;
const MAX_POSTS = 10; // 1 featured + up to 9 in grid

// Pull the first <img src="..."> out of raw HTML (Substack embeds images in content:encoded)
function extractImageFromHtml(html: string | undefined): string | null {
  if (!html) return null;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

// Strip HTML tags and collapse whitespace for a clean text excerpt
function cleanExcerpt(raw: string | undefined, maxLen = 200): string {
  if (!raw) return "";
  const text = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= maxLen) return text;
  // Break at last word boundary before the limit
  return text.slice(0, maxLen).replace(/\s\S*$/, "") + "…";
}

export async function getSubstackPosts(): Promise<FeedPost[]> {
  const parser = new Parser({
    timeout: FEED_TIMEOUT_MS,
    customFields: {
      item: [
        ["media:content", "mediaContent"],
        ["media:thumbnail", "mediaThumbnail"],
        ["enclosure", "enclosure"],
      ],
    },
  });

  let items: any[] = [];

  try {
    const feed = await parser.parseURL(FEED_URL);
    items = (feed.items || []).slice(0, MAX_POSTS);
  } catch (err) {
    console.error("[feed] Failed to fetch Substack RSS:", err);
    return [];
  }

  return items.map((item: any): FeedPost => {
    // Image priority: media:content → media:thumbnail → enclosure → parsed from HTML
    let imageUrl: string | null = null;

    if (item.mediaContent?.$.url) {
      imageUrl = item.mediaContent.$.url;
    } else if (item.mediaThumbnail?.$.url) {
      imageUrl = item.mediaThumbnail.$.url;
    } else if (
      item.enclosure?.url &&
      /\.(jpe?g|png|webp|gif|avif)(\?|$)/i.test(item.enclosure.url)
    ) {
      imageUrl = item.enclosure.url;
    } else {
      // Substack puts a full-res cover image in content:encoded — grab the first one
      imageUrl = extractImageFromHtml(item["content:encoded"] || item.content);
    }

    return {
      title: (item.title || "Untitled").trim(),
      link: item.link || FEED_URL,
      pubDate: item.pubDate || new Date().toISOString(),
      excerpt: cleanExcerpt(item.contentSnippet || item.content),
      imageUrl,
      guid: item.guid || item.link || item.title || "",
    };
  });
}

export function formatDate(dateStr: string, style: "long" | "short" = "long"): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: style === "long" ? "long" : "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

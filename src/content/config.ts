import { defineCollection, z } from 'astro:content';

const programs = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        title: z.string(),
        tagline: z.string(),
        description: z.string(),
        price_range: z.string(),
        duration: z.string(),
        ideal_for: z.array(z.string()),
        outcomes: z.array(z.string()),
        details_url: z.string(),
    }),
});

const testimonials = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        client_name: z.string(),
        dog_name: z.string(),
        dog_breed: z.string().optional(),
        program_id: z.string(),
        quote: z.string(),
        image_path: z.string().optional(),
    })
});

const faqs = defineCollection({
    type: 'data',
    schema: z.object({
        question: z.string(),
        answer: z.string(),
        category: z.string().optional(),
    })
});

export const collections = { programs, testimonials, faqs };

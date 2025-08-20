import { createClient } from 'contentful';
import type { BlogPost, Author, Category, ContentfulResponse } from '@/types/contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'placeholder_space_id',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'placeholder_access_token',
});

export async function getAllPosts(locale: 'ko' | 'en' = 'ko'): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      include: 2,
      order: ['-sys.createdAt'],
    });

    return response.items.map(transformPost);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string, locale: 'ko' | 'en' = 'ko'): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 2,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    return transformPost(response.items[0]);
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getPostsByCategory(categorySlug: string, locale: 'ko' | 'en' = 'ko'): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      include: 2,
      order: ['-sys.createdAt'],
    });

    return response.items.map(transformPost);
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

export async function getPostsByTag(tag: string, locale: 'ko' | 'en' = 'ko'): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      include: 2,
      order: ['-sys.createdAt'],
    });

    return response.items.map(transformPost);
  } catch (error) {
    console.error('Error fetching posts by tag:', error);
    return [];
  }
}

export async function getFeaturedPosts(limit: number = 3, locale: 'ko' | 'en' = 'ko'): Promise<BlogPost[]> {
  try {
    // Since your content model doesn't have a featured field, just return latest posts
    const response = await client.getEntries({
      content_type: 'blogPost',
      include: 2,
      order: ['-sys.createdAt'],
      limit,
    });

    return response.items.map(transformPost);
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

export async function getLatestPosts(limit: number = 5, locale: 'ko' | 'en' = 'ko'): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      include: 2,
      order: ['-sys.createdAt'],
      limit,
    });

    return response.items.map(transformPost);
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return [];
  }
}

export async function getAllCategories(locale: 'ko' | 'en' = 'ko'): Promise<Category[]> {
  try {
    // Your Contentful space doesn't have a category content type, return empty array
    console.log('Categories not available in this Contentful space');
    return [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getAllAuthors(locale: 'ko' | 'en' = 'ko'): Promise<Author[]> {
  try {
    // No separate author content type, return empty array
    return [];
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}

function transformPost(item: any): BlogPost {
  return {
    id: item.sys.id,
    title: item.fields.title || 'Untitled',
    slug: item.fields.slug || item.sys.id,
    excerpt: item.fields.excerpt || 'No description available',
    content: item.fields.content,
    featuredImage: item.fields.featuredImage?.fields?.file?.url ? 
      (item.fields.featuredImage.fields.file.url.startsWith('//') ? 
        `https:${item.fields.featuredImage.fields.file.url}` : 
        item.fields.featuredImage.fields.file.url) : null,
    author: {
      id: 'default-author',
      name: 'Anonymous',
      bio: '',
      avatar: null,
      social: {},
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
    },
    category: null,
    tags: [],
    featured: item.fields.isFeatured || false,
    published: true,
    readingTime: item.fields.readingTime || calculateReadingTime(item.fields.content?.content?.[0]?.content?.[0]?.value || ''),
    publishedAt: item.fields.publishedDate || item.sys.createdAt,
    createdAt: item.sys.createdAt,
    updatedAt: item.sys.updatedAt,
  };
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const textLength = content.split(' ').length;
  return Math.ceil(textLength / wordsPerMinute);
}
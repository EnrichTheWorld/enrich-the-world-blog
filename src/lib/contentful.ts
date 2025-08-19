import { createClient } from 'contentful';
import type { BlogPost, Author, Category, ContentfulResponse } from '@/types/contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'placeholder_space_id',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'placeholder_access_token',
});

export async function getAllPosts(locale: 'ko' | 'en' = 'ko'): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries<ContentfulResponse>({
      content_type: 'blogPost',
      locale,
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
    const response = await client.getEntries<ContentfulResponse>({
      content_type: 'blogPost',
      'fields.slug': slug,
      locale,
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
    const response = await client.getEntries<ContentfulResponse>({
      content_type: 'blogPost',
      'fields.category.sys.contentType.sys.id': 'category',
      'fields.category.fields.slug': categorySlug,
      locale,
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
    const response = await client.getEntries<ContentfulResponse>({
      content_type: 'blogPost',
      'fields.tags[in]': tag,
      locale,
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
    const response = await client.getEntries<ContentfulResponse>({
      content_type: 'blogPost',
      'fields.featured': true,
      locale,
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
    const response = await client.getEntries<ContentfulResponse>({
      content_type: 'blogPost',
      locale,
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
    const response = await client.getEntries({
      content_type: 'category',
      locale,
      order: ['fields.name'],
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      slug: item.fields.slug,
      description: item.fields.description,
      color: item.fields.color,
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getAllAuthors(locale: 'ko' | 'en' = 'ko'): Promise<Author[]> {
  try {
    const response = await client.getEntries({
      content_type: 'author',
      locale,
      order: ['fields.name'],
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      bio: item.fields.bio,
      avatar: item.fields.avatar?.fields?.file?.url || null,
      social: item.fields.social || {},
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
    }));
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}

function transformPost(item: any): BlogPost {
  return {
    id: item.sys.id,
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    featuredImage: item.fields.featuredImage?.fields?.file?.url || null,
    author: item.fields.author ? {
      id: item.fields.author.sys.id,
      name: item.fields.author.fields.name,
      bio: item.fields.author.fields.bio,
      avatar: item.fields.author.fields.avatar?.fields?.file?.url || null,
      social: item.fields.author.fields.social || {},
      createdAt: item.fields.author.sys.createdAt,
      updatedAt: item.fields.author.sys.updatedAt,
    } : null,
    category: item.fields.category ? {
      id: item.fields.category.sys.id,
      name: item.fields.category.fields.name,
      slug: item.fields.category.fields.slug,
      description: item.fields.category.fields.description,
      color: item.fields.category.fields.color,
      createdAt: item.fields.category.sys.createdAt,
      updatedAt: item.fields.category.sys.updatedAt,
    } : null,
    tags: item.fields.tags || [],
    featured: item.fields.featured || false,
    published: item.fields.published || false,
    readingTime: item.fields.readingTime || 0,
    publishedAt: item.fields.publishedAt || item.sys.createdAt,
    createdAt: item.sys.createdAt,
    updatedAt: item.sys.updatedAt,
  };
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const textLength = content.split(' ').length;
  return Math.ceil(textLength / wordsPerMinute);
}
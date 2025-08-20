import { createClient } from 'contentful';
import type { BlogPost, Author, Category, ContentfulResponse } from '@/types/contentful';

function getContentfulClient() {
  return createClient({
    space: (process.env.CONTENTFUL_SPACE_ID || 'placeholder_space_id').replace(/[\r\n\s]+$/g, ''),
    accessToken: (process.env.CONTENTFUL_ACCESS_TOKEN || 'placeholder_access_token').replace(/[\r\n\s]+$/g, ''),
  });
}

export async function getAllPosts(locale: 'ko' | 'en' = 'ko'): Promise<BlogPost[]> {
  try {
    const client = getContentfulClient();
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      include: 2,
      order: ['-sys.createdAt'],
      locale: locale === 'ko' ? 'ko' : 'en-US',
    });

    return response.items.map(transformPost);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string, locale: 'ko' | 'en' = 'ko'): Promise<BlogPost | null> {
  try {
    const client = getContentfulClient();
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      'fields.slug': slug,
      include: 2,
      limit: 1,
      locale: locale === 'ko' ? 'ko' : 'en-US',
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
    const client = getContentfulClient();
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      include: 2,
      order: ['-sys.createdAt'],
      locale: locale === 'ko' ? 'ko' : 'en-US',
    });

    return response.items.map(transformPost);
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

export async function getPostsByTag(tag: string, locale: 'ko' | 'en' = 'ko'): Promise<BlogPost[]> {
  try {
    const client = getContentfulClient();
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      include: 2,
      order: ['-sys.createdAt'],
      locale: locale === 'ko' ? 'ko' : 'en-US',
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
    const client = getContentfulClient();
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      include: 2,
      order: ['-sys.createdAt'],
      limit,
      locale: locale === 'ko' ? 'ko' : 'en-US',
    });

    return response.items.map(transformPost);
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

export async function getLatestPosts(limit: number = 5, locale: 'ko' | 'en' = 'ko'): Promise<BlogPost[]> {
  try {
    const client = getContentfulClient();
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      include: 2,
      order: ['-sys.createdAt'],
      limit,
      locale: locale === 'ko' ? 'ko' : 'en-US',
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
  // Extract author information from the componentAuthor reference
  const authorData = item.fields.author?.fields || {};
  
  // Extract featured image URL
  const featuredImageUrl = item.fields.featuredImage?.fields?.file?.url;
  const processedFeaturedImage = featuredImageUrl ? 
    (featuredImageUrl.startsWith('//') ? 
      `https:${featuredImageUrl}` : 
      featuredImageUrl) : null;

  // Calculate reading time from content
  const contentText = extractTextFromRichText(item.fields.content);
  
  return {
    id: item.sys.id,
    title: item.fields.title || 'Untitled',
    slug: item.fields.slug || item.sys.id,
    excerpt: item.fields.shortDescription || 'No description available',
    content: item.fields.content,
    featuredImage: processedFeaturedImage,
    author: {
      id: item.fields.author?.sys?.id || 'default-author',
      name: authorData.name || 'Anonymous',
      bio: authorData.bio || '',
      avatar: authorData.avatar?.fields?.file?.url ? 
        (authorData.avatar.fields.file.url.startsWith('//') ? 
          `https:${authorData.avatar.fields.file.url}` : 
          authorData.avatar.fields.file.url) : null,
      social: authorData.social || {},
      createdAt: item.fields.author?.sys?.createdAt || item.sys.createdAt,
      updatedAt: item.fields.author?.sys?.updatedAt || item.sys.updatedAt,
    },
    category: null, // No categories in this content model
    tags: [], // No tags in this content model
    featured: false, // No featured field in this content model
    published: true,
    readingTime: calculateReadingTime(contentText),
    publishedAt: item.fields.publishedDate || item.sys.createdAt,
    createdAt: item.sys.createdAt,
    updatedAt: item.sys.updatedAt,
  };
}

// Helper function to extract plain text from Contentful Rich Text
function extractTextFromRichText(content: any): string {
  if (!content || !content.content) return '';
  
  let text = '';
  
  function extractFromNode(node: any): void {
    if (node.nodeType === 'text') {
      text += node.value + ' ';
    } else if (node.content) {
      node.content.forEach(extractFromNode);
    }
  }
  
  content.content.forEach(extractFromNode);
  return text.trim();
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const textLength = content.split(' ').length;
  return Math.ceil(textLength / wordsPerMinute);
}
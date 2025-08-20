import { Document } from '@contentful/rich-text-types';

export interface ContentfulAsset {
  sys: {
    id: string;
    type: string;
  };
  fields: {
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
    title?: string;
    description?: string;
  };
}

export interface ContentfulSys {
  id: string;
  type: string;
  contentType: {
    sys: {
      id: string;
    };
  };
  createdAt: string;
  updatedAt: string;
  revision: number;
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
  avatar?: string | null;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string; // Will use shortDescription from Contentful
  content: Document;
  featuredImage?: string | null;
  author?: Author | null;
  category?: Category | null;
  tags: string[];
  featured: boolean;
  published: boolean;
  readingTime: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContentfulBlogPost {
  sys: ContentfulSys;
  fields: {
    internalName: string;
    title: string;
    slug: string;
    shortDescription?: string; // This is your subtitle field
    content: Document;
    featuredImage: ContentfulAsset;
    author?: {
      sys: { id: string; createdAt: string; updatedAt: string };
      fields: {
        internalName: string;
        name: string;
        avatar?: ContentfulAsset;
      };
    };
    publishedDate: string;
    seoFields?: {
      sys: { id: string };
      fields: {
        internalName: string;
        pageTitle: string;
        pageDescription?: string;
        canonicalUrl?: string;
        nofollow: boolean;
        noindex: boolean;
        shareImages?: ContentfulAsset[];
      };
    };
    relatedBlogPosts?: Array<{
      sys: { id: string };
      fields: any;
    }>;
  };
}

export interface ContentfulAuthor {
  sys: ContentfulSys;
  fields: {
    internalName: string;
    name: string;
    avatar?: ContentfulAsset;
  };
}

export interface ContentfulCategory {
  sys: ContentfulSys;
  fields: {
    name: string;
    slug: string;
    description?: string;
    color?: string;
  };
}

export interface ContentfulResponse {
  sys: ContentfulSys;
  fields: any;
}

export interface ContentfulCollection<T> {
  total: number;
  skip: number;
  limit: number;
  items: T[];
  includes?: {
    Entry?: any[];
    Asset?: ContentfulAsset[];
  };
}

export interface SEOMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface PageData {
  title: string;
  description?: string;
  content?: Document;
  seo?: SEOMetadata;
  locale: 'ko' | 'en';
}

export interface BlogPageData extends PageData {
  posts: BlogPost[];
  featuredPosts?: BlogPost[];
  categories?: Category[];
  totalPages?: number;
  currentPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

export interface PostPageData extends PageData {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export interface CategoryPageData extends PageData {
  category: Category;
  posts: BlogPost[];
  totalPages?: number;
  currentPage?: number;
}

export interface TagPageData extends PageData {
  tag: string;
  posts: BlogPost[];
  totalPages?: number;
  currentPage?: number;
}

export interface HomePageData extends PageData {
  featuredPosts: BlogPost[];
  latestPosts: BlogPost[];
  popularCategories?: Category[];
}

export interface AboutPageData extends PageData {
  team?: Author[];
}
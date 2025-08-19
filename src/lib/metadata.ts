import type { Metadata } from 'next';
import type { BlogPost, Category } from '@/types/contentful';

const baseUrl = 'https://enrich-the-world.vercel.app';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  locale?: 'ko' | 'en';
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  locale = 'ko',
  keywords = [],
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
}: GenerateMetadataProps): Metadata {
  const isKorean = locale === 'ko';
  const siteName = isKorean ? '세상을 풍요롭게' : 'Enrich the World';
  const defaultDescription = isKorean 
    ? '기술과 사회적 임팩트에 관한 통찰을 나누는 블로그'
    : 'A blog sharing insights on technology and social impact';

  const metaTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription = description || defaultDescription;
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const ogImage = image || `${baseUrl}/og-image.png`;

  const defaultKeywords = isKorean 
    ? ['기술', '사회적 임팩트', '블로그', '혁신', '지속가능성']
    : ['technology', 'social impact', 'blog', 'innovation', 'sustainability'];

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [...defaultKeywords, ...keywords],
    authors: authors ? authors.map(name => ({ name })) : [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url || '/',
      languages: {
        'ko-KR': isKorean ? (url || '/') : (url || '/').replace('/en', '') || '/',
        'en-US': isKorean ? `/en${url || ''}` : url || '/en',
      },
    },
    openGraph: {
      type,
      locale: isKorean ? 'ko_KR' : 'en_US',
      url: fullUrl,
      title: metaTitle,
      description: metaDescription,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateBlogPostMetadata(post: BlogPost, locale: 'ko' | 'en' = 'ko'): Metadata {
  const baseUrl = locale === 'ko' ? '' : '/en';
  const excerpt = post.excerpt || '';
  
  return generateMetadata({
    title: post.title,
    description: excerpt,
    image: post.featuredImage || undefined,
    url: `${baseUrl}/blog/${post.slug}`,
    locale,
    keywords: post.tags,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: post.author ? [post.author.name] : undefined,
  });
}

export function generateCategoryMetadata(category: Category, locale: 'ko' | 'en' = 'ko'): Metadata {
  const baseUrl = locale === 'ko' ? '' : '/en';
  const isKorean = locale === 'ko';
  
  const title = `${category.name} ${isKorean ? '카테고리' : 'Category'}`;
  const description = category.description || (isKorean 
    ? `${category.name} 카테고리의 블로그 글들을 확인해보세요.`
    : `Explore blog posts in the ${category.name} category.`);

  return generateMetadata({
    title,
    description,
    url: `${baseUrl}/blog/category/${category.slug}`,
    locale,
    keywords: [category.name],
  });
}

export function generateTagMetadata(tag: string, locale: 'ko' | 'en' = 'ko'): Metadata {
  const baseUrl = locale === 'ko' ? '' : '/en';
  const isKorean = locale === 'ko';
  
  const title = `${tag} ${isKorean ? '태그' : 'Tag'}`;
  const description = isKorean 
    ? `${tag} 태그가 포함된 블로그 글들을 확인해보세요.`
    : `Explore blog posts tagged with ${tag}.`;

  return generateMetadata({
    title,
    description,
    url: `${baseUrl}/blog/tag/${tag}`,
    locale,
    keywords: [tag],
  });
}

export function generateStructuredData(post: BlogPost, locale: 'ko' | 'en' = 'ko') {
  const baseUrl = locale === 'ko' ? '' : '/en';
  const siteName = locale === 'ko' ? '세상을 풍요롭게' : 'Enrich the World';
  const fullUrl = `https://enrich-the-world.vercel.app${baseUrl}/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || '',
    image: post.featuredImage || undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: post.author ? {
      '@type': 'Person',
      name: post.author.name,
      ...(post.author.bio && { description: post.author.bio }),
      ...(post.author.avatar && { image: post.author.avatar }),
    } : undefined,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `https://enrich-the-world.vercel.app/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    url: fullUrl,
    keywords: post.tags.join(', '),
    articleSection: post.category?.name || undefined,
    wordCount: post.readingTime * 200, // Approximate word count
    timeRequired: `PT${post.readingTime}M`,
  };
}

export function generateOrganizationStructuredData(locale: 'ko' | 'en' = 'ko') {
  const isKorean = locale === 'ko';
  const name = isKorean ? '세상을 풍요롭게' : 'Enrich the World';
  const description = isKorean 
    ? '기술과 사회적 임팩트에 관한 통찰을 나누는 블로그'
    : 'A blog sharing insights on technology and social impact';

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    url: 'https://enrich-the-world.vercel.app',
    logo: {
      '@type': 'ImageObject',
      url: 'https://enrich-the-world.vercel.app/logo.png',
    },
    sameAs: [
      // Add social media URLs here
    ],
  };
}
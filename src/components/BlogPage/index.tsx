import Link from 'next/link';
import Image from 'next/image';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import type { BlogPost, Category } from '@/types/contentful';
import { dictionaries } from '@/i18n/dictionaries';
import * as styles from '../HomePage/styles.css';

interface BlogPageProps {
  posts: BlogPost[];
  categories: Category[];
  locale: 'ko' | 'en';
}

export function BlogPage({ posts, categories, locale }: BlogPageProps) {
  const dict = dictionaries[locale];
  const baseUrl = locale === 'ko' ? '/kr' : '';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const PostCard = ({ post }: { post: BlogPost }) => {
    const excerpt = post.excerpt || documentToPlainTextString(post.content).slice(0, 150) + '...';
    
    return (
      <Link href={`${baseUrl}/blog/${post.slug}`} className={styles.postCard}>
        {post.featuredImage && (
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={600}
            height={300}
            className={styles.postImage}
          />
        )}
        <div className={styles.postContent}>
          <div className={styles.postMeta}>
            {post.category && (
              <span className={styles.categoryBadge}>
                {post.category.name}
              </span>
            )}
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readingTime}{dict.common.readingTime}</span>
          </div>
          <h3 className={styles.postTitle}>{post.title}</h3>
          <p className={styles.postExcerpt}>{excerpt}</p>
          <span className={styles.readMore}>
            {dict.common.readMore}
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </Link>
    );
  };

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{dict.blog.title}</h1>
          <p className={styles.heroSubtitle}>{dict.blog.subtitle}</p>
        </div>
      </section>

      {categories.length > 0 && (
        <section className={`${styles.section} ${styles.categoriesSection}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{dict.blog.categories}</h2>
            <div className={styles.categoriesGrid}>
              {categories.map((category) => (
                <Link key={category.id} href={`${baseUrl}/blog/category/${category.slug}`} className={styles.categoryCard}>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                  {category.description && (
                    <p className={styles.categoryDescription}>{category.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{dict.common.allPosts}</h2>
          {posts.length > 0 ? (
            <div className={styles.grid}>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
              {dict.common.noResults}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
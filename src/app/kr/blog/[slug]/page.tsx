import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getLatestPosts } from '@/lib/contentful';
import { generateMetadata as generateSEOMetadata } from '@/lib/metadata';
import * as styles from '../../[slug]/styles.css';

interface PostPageProps {
  params: {
    slug: string;
  };
}

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className={styles.bold}>{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em className={styles.italic}>{text}</em>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className={styles.paragraph}>{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className={styles.heading1}>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className={styles.heading2}>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className={styles.heading3}>{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className={styles.unorderedList}>{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className={styles.orderedList}>{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className={styles.listItem}>{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className={styles.blockquote}>{children}</blockquote>
    ),
  },
};

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
    };
  }

  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt || `${post.title} - 블로그 포스트`,
    ogImage: post.featuredImage || undefined,
    canonicalUrl: `/kr/blog/${post.slug}`,
  });
}

export default async function KrPostPage({ params }: PostPageProps) {
  const [post, relatedPosts] = await Promise.all([
    getPostBySlug(params.slug),
    getLatestPosts(3),
  ]);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        {/* Post Header */}
        <header className={styles.header}>
          {post.featuredImage && (
            <div className={styles.imageContainer}>
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className={styles.featuredImage}
                priority
              />
            </div>
          )}
          
          <div className={styles.headerContent}>
            <h1 className={styles.title}>{post.title}</h1>
            
            {post.excerpt && (
              <p className={styles.excerpt}>{post.excerpt}</p>
            )}
            
            <div className={styles.meta}>
              {post.author && (
                <div className={styles.author}>
                  {post.author.avatar && (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className={styles.authorAvatar}
                    />
                  )}
                  <span className={styles.authorName}>{post.author.name}</span>
                </div>
              )}
              
              <div className={styles.postInfo}>
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <span>•</span>
                <span>{post.readingTime}분 읽기</span>
              </div>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className={styles.content}>
          {documentToReactComponents(post.content, richTextOptions)}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <aside className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>관련 포스트</h2>
          <div className={styles.relatedGrid}>
            {relatedPosts
              .filter(relatedPost => relatedPost.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/kr/blog/${relatedPost.slug}`}
                  className={styles.relatedCard}
                >
                  {relatedPost.featuredImage && (
                    <Image
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className={styles.relatedImage}
                    />
                  )}
                  <div className={styles.relatedContent}>
                    <h3 className={styles.relatedPostTitle}>{relatedPost.title}</h3>
                    {relatedPost.excerpt && (
                      <p className={styles.relatedExcerpt}>{relatedPost.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </aside>
      )}

      {/* Back to Blog */}
      <div className={styles.backToBlog}>
        <Link href="/kr/blog" className={styles.backLink}>
          ← 블로그로 돌아가기
        </Link>
      </div>
    </div>
  );
}
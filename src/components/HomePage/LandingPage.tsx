'use client';

import { useState } from 'react';
import { ArrowRight, Github, Twitter, Rss, Sparkles, Code2, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import type { BlogPost, Category } from '@/types/contentful';
import { dictionaries } from '@/i18n/dictionaries';
import * as homeStyles from './styles.css';
import * as styles from './LandingPage.css';

interface LandingPageProps {
  featuredPosts: BlogPost[];
  latestPosts: BlogPost[];
  categories: Category[];
  locale: 'ko' | 'en';
}

export function LandingPage({ featuredPosts, latestPosts, categories, locale }: LandingPageProps) {
  const dict = dictionaries[locale];
  const baseUrl = locale === 'ko' ? '/kr' : '';
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const PostCard = ({ post, featured = false }: { post: BlogPost; featured?: boolean }) => {
    const excerpt = post.excerpt || documentToPlainTextString(post.content).slice(0, 150) + '...';

    return (
      <Link
        href={`${baseUrl}/blog/${post.slug}`}
        className={`${homeStyles.postCard} ${featured ? homeStyles.featuredMain : ''}`}
        data-blog-card
      >
        {post.featuredImage && (
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={600}
            height={300}
            className={homeStyles.postImage}
          />
        )}
        <div className={homeStyles.postContent}>
          <div className={homeStyles.postMeta}>
            {post.category && (
              <span className={homeStyles.categoryBadge}>
                {post.category.name}
              </span>
            )}
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readingTime}{dict.common.readingTime}</span>
          </div>
          <h3 className={homeStyles.postTitle}>{post.title}</h3>
          <p className={homeStyles.postExcerpt}>{excerpt}</p>
          <span className={homeStyles.readMore}>
            {dict.common.readMore}
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </Link>
    );
  };

  const landingCategories = ['All', 'Framework', 'React', 'TypeScript', 'Web Design', 'DevOps'];

  return (
    <div className={styles.landingPageWrapper}>
      {/* Background Gradients */}
      <div className={styles.backgroundContainer}>
        <div className={`${styles.backgroundGradient} ${styles.gradientBlue}`}></div>
        <div className={`${styles.backgroundGradient} ${styles.gradientCyan}`}></div>
        <div className={`${styles.backgroundGradient} ${styles.gradientEmerald}`}></div>
      </div>

      {/* Hero Section */}
      <section className={styles.landingHeroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.landingHeroBadge}>
            <Sparkles size={16} className={styles.landingHeroBadgeIcon} />
            <span className={styles.landingHeroBadgeText}>
              {locale === 'ko'
                ? '새로운 기술 트렌드를 함께 탐색해요'
                : 'Explore new tech trends together'}
            </span>
          </div>

          <h1 className={styles.landingHeroTitle}>
            <span className={styles.landingHeroTitleHighlight}>
              {locale === 'ko' ? '웹 개발의' : 'Deep insights for'}
            </span>
            <br />
            <span className={styles.landingHeroTitleHighlight}>
              {locale === 'ko' ? '깊이 있는 통찰' : 'web development'}
            </span>
          </h1>

          <p className={styles.landingHeroSubtitle}>
            {locale === 'ko'
              ? 'React, Next.js, TypeScript 등 최신 기술의 본질을 파고들고, 실무에서 즉시 활용 가능한 인사이트를 공유합니다.'
              : 'Dive deep into modern technologies like React, Next.js, and TypeScript, sharing insights you can apply immediately.'}
          </p>

          <div className={styles.heroButtons}>
            <Link href={`${baseUrl}/blog`} className={styles.landingPrimaryButton}>
              {locale === 'ko' ? '최신 글 탐색하기' : 'Explore Latest Posts'}
              <ArrowRight size={20} className={styles.landingArrowIcon} />
            </Link>
            <button className={styles.landingSecondaryButton}>
              {locale === 'ko' ? '구독하기' : 'Subscribe'}
            </button>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>150+</p>
              <p className={styles.statLabel}>
                {locale === 'ko' ? '깊이 있는 글' : 'In-depth posts'}
              </p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>50K+</p>
              <p className={styles.statLabel}>
                {locale === 'ko' ? '월간 독자' : 'Monthly readers'}
              </p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>20K+</p>
              <p className={styles.statLabel}>
                {locale === 'ko' ? '커뮤니티' : 'Community'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts - using existing HomePage component styles */}
      {featuredPosts.length > 0 && (
        <section className={homeStyles.section}>
          <div className={homeStyles.container}>
            <h2 className={homeStyles.sectionTitle}>{dict.blog.featuredPosts}</h2>
            <div className={homeStyles.featuredGrid}>
              {featuredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} featured={index === 0} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Posts */}
      <section className={homeStyles.section}>
        <div className={homeStyles.container}>
          <h2 className={homeStyles.sectionTitle}>{dict.common.latestPosts}</h2>
          <div className={homeStyles.grid}>
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.landingCategoriesSection}>
        <div className={homeStyles.container}>
          <div className={styles.landingCategoriesGrid}>
            {landingCategories.map((category, index) => (
              <button
                key={category}
                className={`${styles.landingCategoryButton} ${index === 0 ? styles.landingActiveCategoryButton : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.landingNewsletterSection}>
        <div className={styles.landingNewsletterCard}>
          <h2 className={styles.landingNewsletterTitle}>
            {locale === 'ko' ? '매주 새로운 인사이트' : 'Fresh insights every week'}
          </h2>
          <p className={styles.landingNewsletterSubtitle}>
            {locale === 'ko'
              ? '고품질의 기술 콘텐츠를 이메일로 직접 받아보세요'
              : 'Get quality tech content delivered to your inbox'}
          </p>

          <form className={styles.landingNewsletterInputGroup} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className={styles.landingNewsletterInput}
              required
            />
            <button type="submit" className={styles.landingNewsletterButton}>
              {locale === 'ko' ? '구독' : 'Subscribe'}
            </button>
          </form>

          <p className={styles.landingNewsletterNotice}>
            {locale === 'ko'
              ? '광고 없음. 스팸 없음. 언제든지 구독 해제 가능합니다.'
              : 'No ads. No spam. Unsubscribe anytime.'}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.landingAboutSection}>
        <div className={styles.landingAboutContainer}>
          <div className={styles.landingAboutHeader}>
            <p className={styles.landingAboutLabel}>{locale === 'ko' ? '소개' : 'About'}</p>
            <h2 className={styles.landingAboutTitle}>
              {locale === 'ko' ? '이 블로그에 대해' : 'About this blog'}
            </h2>
          </div>

          <div className={styles.landingAboutGrid}>
            <div className={styles.landingAboutCard}>
              <h3 className={styles.landingAboutCardTitle}>
                {locale === 'ko' ? '무엇을 다루나요?' : 'What we cover'}
              </h3>
              <ul className={styles.landingAboutCardList}>
                <li className={styles.landingAboutCardListItem}>
                  <span className={styles.landingAboutCardListIcon}>→</span>
                  <span>
                    {locale === 'ko' ? 'React와 Next.js의 심화 개념' : 'Advanced React and Next.js'}
                  </span>
                </li>
                <li className={styles.landingAboutCardListItem}>
                  <span className={styles.landingAboutCardListIcon}>→</span>
                  <span>{locale === 'ko' ? 'TypeScript 실무 패턴' : 'TypeScript best practices'}</span>
                </li>
                <li className={styles.landingAboutCardListItem}>
                  <span className={styles.landingAboutCardListIcon}>→</span>
                  <span>{locale === 'ko' ? '성능 최적화 전략' : 'Performance optimization'}</span>
                </li>
                <li className={styles.landingAboutCardListItem}>
                  <span className={styles.landingAboutCardListIcon}>→</span>
                  <span>
                    {locale === 'ko' ? '아키텍처와 설계 패턴' : 'Architecture and patterns'}
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.landingAboutCard}>
              <h3 className={styles.landingAboutCardTitle}>
                {locale === 'ko' ? '저는 누구인가요?' : 'Who am I?'}
              </h3>
              <div className={styles.landingAboutCardContent}>
                <p className={styles.landingAboutCardText}>
                  {locale === 'ko'
                    ? '5년 이상의 프론트엔드 개발 경험을 가진 개발자입니다. 복잡한 기술을 단순하고 명확하게 설명하는 것을 좋아합니다.'
                    : 'A frontend developer with 5+ years of experience. I love explaining complex technologies clearly.'}
                </p>
                <p className={styles.landingAboutCardText}>
                  {locale === 'ko'
                    ? '단순한 튜토리얼을 넘어, 기술의 근본 원리와 실무에서의 활용 방법을 깊이 있게 다룹니다.'
                    : 'I go beyond tutorials to explore fundamental principles and real-world applications.'}
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={styles.landingSocialLinks}>
            <a href="#" className={styles.landingSocialLink} aria-label="GitHub">
              <Github size={24} className={styles.landingSocialIcon} />
            </a>
            <a href="#" className={styles.landingSocialLink} aria-label="Twitter">
              <Twitter size={24} className={styles.landingSocialIcon} />
            </a>
            <a href="#" className={styles.landingSocialLink} aria-label="RSS">
              <Rss size={24} className={styles.landingSocialIcon} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.landingFooter}>
        <div className={styles.landingFooterContainer}>
          <div className={styles.landingFooterGrid}>
            <div className={styles.landingFooterSection}>
              <h4 className={styles.landingFooterSectionTitle}>
                {locale === 'ko' ? '카테고리' : 'Categories'}
              </h4>
              <ul className={styles.landingFooterLinks}>
                <li>
                  <a href="#" className={styles.landingFooterLink}>
                    Framework
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.landingFooterLink}>
                    React
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.landingFooterLink}>
                    TypeScript
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.landingFooterSection}>
              <h4 className={styles.landingFooterSectionTitle}>
                {locale === 'ko' ? '링크' : 'Links'}
              </h4>
              <ul className={styles.landingFooterLinks}>
                <li>
                  <a href="#" className={styles.landingFooterLink}>
                    {locale === 'ko' ? '공지사항' : 'Announcements'}
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.landingFooterLink}>
                    {locale === 'ko' ? '아카이브' : 'Archive'}
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.landingFooterLink}>
                    {locale === 'ko' ? '구독' : 'Subscribe'}
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.landingFooterSection}>
              <h4 className={styles.landingFooterSectionTitle}>
                {locale === 'ko' ? '따라오기' : 'Follow'}
              </h4>
              <ul className={styles.landingFooterLinks}>
                <li>
                  <a href="#" className={styles.landingFooterLink}>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.landingFooterLink}>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.landingFooterLink}>
                    RSS
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.landingFooterSection}>
              <h4 className={styles.landingFooterSectionTitle}>
                {locale === 'ko' ? '법' : 'Legal'}
              </h4>
              <ul className={styles.landingFooterLinks}>
                <li>
                  <a href="#" className={styles.landingFooterLink}>
                    {locale === 'ko' ? '프라이버시' : 'Privacy'}
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.landingFooterLink}>
                    {locale === 'ko' ? '이용약관' : 'Terms'}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.landingFooterDivider}>
            <p className={styles.landingFooterCopy}>
              &copy; 2025 {locale === 'ko' ? 'DevBlog. 모든 권리 보유.' : 'DevBlog. All rights reserved.'}
            </p>
            <p className={styles.landingFooterCredit}>
              {locale === 'ko' ? '개발자를 위해 제작되었습니다.' : 'Crafted with care for developers'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

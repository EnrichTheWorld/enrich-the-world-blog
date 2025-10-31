'use client';

import { ArrowRight, Github, Twitter, Rss, Sparkles, Code2, Zap } from 'lucide-react';
import { useState } from 'react';
import * as styles from './styles.css';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

interface BlogLandingProps {
  featuredPosts?: BlogPost[];
}

export function BlogLanding({ featuredPosts = [] }: BlogLandingProps) {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  const defaultPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Next.js 15: 새로운 기능들',
      excerpt: 'Next.js 15 버전의 주요 기능과 개선사항을 알아봅시다.',
      category: 'Framework',
      date: '2025-10-20',
    },
    {
      id: '2',
      title: 'React 서버 컴포넌트 완벽 가이드',
      excerpt: 'RSC의 개념부터 실전 활용법까지 상세하게 설명합니다.',
      category: 'React',
      date: '2025-10-15',
    },
    {
      id: '3',
      title: 'TypeScript 성능 최적화 팁',
      excerpt: '타입스크립트 컴파일 시간을 줄이는 실용적인 방법들입니다.',
      category: 'TypeScript',
      date: '2025-10-10',
    },
  ];

  const posts = featuredPosts.length > 0 ? featuredPosts : defaultPosts;
  const categories = ['All', 'Framework', 'React', 'TypeScript', 'Web Design', 'DevOps'];

  return (
    <div className={styles.backgroundContainer}>
      {/* Background Gradients */}
      <div className={`${styles.backgroundGradient} ${styles.gradientBlueTopLeft}`}></div>
      <div className={`${styles.backgroundGradient} ${styles.gradientCyanBottomRight}`}></div>
      <div className={`${styles.backgroundGradient} ${styles.gradientEmeraldRight}`}></div>

      {/* Navigation */}
      <nav className={styles.navigationBar}>
        <div className={styles.navContainer}>
          <div className={styles.navBrand}>
            <div className={styles.navBrandIcon}>
              <Code2 size={18} />
            </div>
            <div className={styles.navBrandText}>DevBlog</div>
          </div>
          <div className={styles.navLinks}>
            <a href="#posts" className={styles.navLink}>
              Posts
            </a>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </div>
          <div className={styles.navActions}>
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroBadge}>
            <Sparkles size={16} className={styles.heroBadgeIcon} />
            <span className={styles.heroBadgeText}>
              새로운 기술 트렌드를 함께 탐색해요
            </span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleHighlight}>웹 개발의</span>
            <br />
            <span className={styles.heroTitleHighlight}>깊이 있는 통찰</span>
          </h1>

          <p className={styles.heroSubtitle}>
            React, Next.js, TypeScript 등 최신 기술의 본질을 파고들고,
            <br />
            실무에서 즉시 활용 가능한 인사이트를 공유합니다.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>
              최신 글 탐색하기
              <ArrowRight size={20} className={styles.arrowIcon} />
            </button>
            <button className={styles.secondaryButton}>구독하기</button>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>150+</p>
              <p className={styles.statLabel}>깊이 있는 글</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>50K+</p>
              <p className={styles.statLabel}>월간 독자</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statNumber}>20K+</p>
              <p className={styles.statLabel}>커뮤니티</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="posts" className={styles.featuredSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <Zap size={20} />
              <span>FEATURED POSTS</span>
            </div>
            <h2 className={styles.sectionTitle}>인기 있는 글들</h2>
            <p className={styles.sectionSubtitle}>
              최신 기술 동향과 실무 노하우를 다룬 엄선된 컨텐츠
            </p>
          </div>

          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <article
                key={post.id}
                className={styles.postCard}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div className={styles.postCardBackground}></div>
                <div className={styles.postCardContent}>
                  <div className={styles.postCategory}>{post.category}</div>
                  <div className={styles.postMeta}>
                    <span>{post.date}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <a href="#" className={styles.readMoreLink}>
                    더 읽기
                    <ArrowRight size={18} className={styles.readMoreIcon} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
              <button key={category} className={styles.categoryButton}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterCard}>
          <h2 className={styles.newsletterTitle}>매주 새로운 인사이트</h2>
          <p className={styles.newsletterSubtitle}>
            고품질의 기술 콘텐츠를 이메일로 직접 받아보세요
          </p>

          <form className={styles.newsletterInputGroup} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              구독
            </button>
          </form>

          <p className={styles.newsletterNotice}>
            광고 없음. 스팸 없음. 언제든지 구독 해제 가능합니다.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutHeader}>
            <p className={styles.aboutLabel}>소개</p>
            <h2 className={styles.aboutTitle}>이 블로그에 대해</h2>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>무엇을 다루나요?</h3>
              <ul className={styles.aboutCardList}>
                <li className={styles.aboutCardListItem}>
                  <span className={styles.aboutCardListIcon}>→</span>
                  <span>React와 Next.js의 심화 개념</span>
                </li>
                <li className={styles.aboutCardListItem}>
                  <span className={styles.aboutCardListIcon}>→</span>
                  <span>TypeScript 실무 패턴</span>
                </li>
                <li className={styles.aboutCardListItem}>
                  <span className={styles.aboutCardListIcon}>→</span>
                  <span>성능 최적화 전략</span>
                </li>
                <li className={styles.aboutCardListItem}>
                  <span className={styles.aboutCardListIcon}>→</span>
                  <span>아키텍처와 설계 패턴</span>
                </li>
              </ul>
            </div>

            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>저는 누구인가요?</h3>
              <div className={styles.aboutCardContent}>
                <p className={styles.aboutCardText}>
                  5년 이상의 프론트엔드 개발 경험을 가진 개발자입니다. 복잡한 기술을 단순하고 명확하게 설명하는 것을 좋아합니다.
                </p>
                <p className={styles.aboutCardText}>
                  단순한 튜토리얼을 넘어, 기술의 근본 원리와 실무에서의 활용 방법을 깊이 있게 다룹니다.
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <Github size={24} className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <Twitter size={24} className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="RSS">
              <Rss size={24} className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <h4 className={styles.footerSectionTitle}>카테고리</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Framework
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    React
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    TypeScript
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerSectionTitle}>링크</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#" className={styles.footerLink}>
                    공지사항
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    아카이브
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    구독
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerSectionTitle}>따라오기</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    RSS
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerSectionTitle}>법</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#" className={styles.footerLink}>
                    프라이버시
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    이용약관
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerDivider}>
            <p className={styles.footerCopy}>&copy; 2025 DevBlog. 모든 권리 보유.</p>
            <p className={styles.footerCredit}>Crafted with care for developers</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

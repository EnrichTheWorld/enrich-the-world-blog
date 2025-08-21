'use client';

import { useEffect, useRef, useState } from 'react';
import * as styles from './styles.css';

interface ClimateActionPageProps {
  locale: 'ko' | 'en';
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${styles.animatedSection} ${isVisible ? styles.visible : ''} ${className || ''}`}
    >
      {children}
    </div>
  );
}

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function CountUp({ end, duration = 2000, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let startTime: number;
          
          const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutQuad = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeOutQuad * end));
            
            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          };
          
          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function ClimateActionPage({ locale }: ClimateActionPageProps) {
  const isKorean = locale === 'ko';
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    ko: {
      hero: {
        title: '기후 선거를',
        subtitle: '지지합니다!',
        description: '개인의 노력에는 정책적 뒷받침이 필요합니다',
      },
      story: {
        title: '우리의 이야기',
        paragraphs: [
          '매일 텀블러를 들고 다니고, 분리수거를 꼼꼼히 하고, 대중교통을 이용해요.',
          '하지만 기후위기 앞에서 개인의 노력만으로는 한계가 있음을 깨달았습니다.',
          '진정한 변화를 위해서는 정책적 접근이 필요해요.',
        ],
      },
      problem: {
        title: '우리가 직면한 현실',
        description: '개인의 환경 노력과 실제 기후 변화 속도 사이의 간극이 점점 벌어지고 있습니다.',
      },
      solution: {
        title: '해결책',
        description: '체계적인 기후 정책과 정치적 의지가 필요합니다. 우리의 목소리를 모아 정치인들에게 전달해야 해요.',
      },
      stats: {
        title: '우리의 영향력',
        items: [
          { number: 2024, label: '목표 연도' },
          { number: 1500, label: '참여자 수', suffix: '+' },
          { number: 87, label: '정책 제안', suffix: '개' },
          { number: 15, label: '지지 정치인', suffix: '명' },
        ],
      },
      cta: {
        title: '함께 행동해요',
        description: '기후 정책을 지지하는 정치인을 응원하고, 우리의 목소리를 전달해주세요.',
        buttonText: '캠페인 참여하기',
      },
    },
    en: {
      hero: {
        title: 'I Support',
        subtitle: 'Climate Elections!',
        description: 'Individual efforts need policy support',
      },
      story: {
        title: 'Our Story',
        paragraphs: [
          'We carry reusable cups every day, sort our waste meticulously, and use public transport.',
          'But we realized that individual efforts alone have limits in the face of the climate crisis.',
          'For real change, we need policy-level approaches.',
        ],
      },
      problem: {
        title: 'The Reality We Face',
        description: 'The gap between individual environmental efforts and the actual pace of climate change is widening.',
      },
      solution: {
        title: 'The Solution',
        description: 'We need systematic climate policies and political will. We must unite our voices and convey them to politicians.',
      },
      stats: {
        title: 'Our Impact',
        items: [
          { number: 2024, label: 'Target Year' },
          { number: 1500, label: 'Participants', suffix: '+' },
          { number: 87, label: 'Policy Proposals' },
          { number: 15, label: 'Supporting Politicians' },
        ],
      },
      cta: {
        title: "Let's Act Together",
        description: 'Support politicians who advocate for climate policies and help us amplify our voices.',
        buttonText: 'Join the Campaign',
      },
    },
  };

  const t = content[isKorean ? 'ko' : 'en'];

  return (
    <div className={styles.container}>
      {/* Floating Background Elements */}
      <div className={styles.backgroundElements}>
        <div 
          className={styles.floatingShape1}
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className={styles.floatingShape2}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className={styles.floatingShape3}
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        />
        <div className={styles.particleField}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <AnimatedSection className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>{t.hero.title}</span>
              <span className={styles.titleLine2}>{t.hero.subtitle}</span>
            </h1>
            <p className={styles.heroDescription}>{t.hero.description}</p>
          </AnimatedSection>
        </div>
        <div className={styles.heroGradient} />
      </section>

      {/* Story Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <AnimatedSection>
            <h2 className={styles.sectionTitle}>{t.story.title}</h2>
            <div className={styles.storyGrid}>
              {t.story.paragraphs.map((paragraph, index) => (
                <AnimatedSection key={index} delay={index * 200} className={styles.storyCard}>
                  <p className={styles.storyText}>{paragraph}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <AnimatedSection className={styles.problemSection}>
            <h2 className={styles.sectionTitle}>{t.problem.title}</h2>
            <p className={styles.problemText}>{t.problem.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <AnimatedSection className={styles.solutionSection}>
            <h2 className={styles.sectionTitle}>{t.solution.title}</h2>
            <p className={styles.solutionText}>{t.solution.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <AnimatedSection>
            <h2 className={styles.sectionTitle}>{t.stats.title}</h2>
            <div className={styles.statsGrid}>
              {t.stats.items.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 100} className={styles.statCard}>
                  <div className={styles.statNumber}>
                    <CountUp end={stat.number} suffix={stat.suffix || ''} />
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContent}>
          <AnimatedSection className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>{t.cta.title}</h2>
            <p className={styles.ctaDescription}>{t.cta.description}</p>
            <a
              href="https://donor.forourclimate.org/gidaehae_/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              {t.cta.buttonText}
            </a>
          </AnimatedSection>
        </div>
        <div className={styles.ctaGradient} />
      </section>
    </div>
  );
}
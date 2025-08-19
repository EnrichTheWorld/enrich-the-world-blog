import Image from 'next/image';
import type { Author } from '@/types/contentful';
import { dictionaries } from '@/i18n/dictionaries';
import * as styles from '../HomePage/styles.css';

interface AboutPageProps {
  authors: Author[];
  locale: 'ko' | 'en';
}

export function AboutPage({ authors, locale }: AboutPageProps) {
  const dict = dictionaries[locale];

  const content = {
    ko: {
      mission: {
        title: '우리의 미션',
        description: '기술의 발전과 사회적 임팩트 사이의 연결고리를 탐구하며, 더 나은 세상을 만들어 나가는 이야기를 전합니다. 혁신적인 아이디어와 지속가능한 솔루션을 통해 세상을 풍요롭게 만드는 것이 우리의 목표입니다.',
      },
      vision: {
        title: '우리의 비전',
        description: '기술이 인류의 복지와 환경의 지속가능성에 기여할 수 있는 방법을 모색하고, 이를 통해 모든 사람이 풍요로운 삶을 영위할 수 있는 세상을 만들어 나가겠습니다.',
      },
      values: {
        title: '우리의 가치',
        items: [
          { title: '혁신', description: '기존의 틀을 벗어나 새로운 가능성을 탐구합니다.' },
          { title: '지속가능성', description: '환경과 사회의 지속가능한 발전을 추구합니다.' },
          { title: '포용성', description: '모든 사람이 참여할 수 있는 개방적인 환경을 조성합니다.' },
          { title: '진정성', description: '진실되고 투명한 소통을 통해 신뢰를 구축합니다.' },
        ],
      },
    },
    en: {
      mission: {
        title: 'Our Mission',
        description: 'We explore the connections between technological advancement and social impact, sharing stories about building a better world. Our goal is to enrich the world through innovative ideas and sustainable solutions.',
      },
      vision: {
        title: 'Our Vision',
        description: 'We seek ways for technology to contribute to human welfare and environmental sustainability, working towards a world where everyone can lead a prosperous life.',
      },
      values: {
        title: 'Our Values',
        items: [
          { title: 'Innovation', description: 'We explore new possibilities beyond existing frameworks.' },
          { title: 'Sustainability', description: 'We pursue sustainable development for the environment and society.' },
          { title: 'Inclusivity', description: 'We create an open environment where everyone can participate.' },
          { title: 'Authenticity', description: 'We build trust through honest and transparent communication.' },
        ],
      },
    },
  };

  const pageContent = content[locale];

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{dict.about.title}</h1>
          <p className={styles.heroSubtitle}>{dict.about.subtitle}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ display: 'grid', gap: '4rem', gridTemplateColumns: '1fr', '@media': { 'screen and (min-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' } } }}>
            <div>
              <h2 className={styles.sectionTitle}>{pageContent.mission.title}</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                {pageContent.mission.description}
              </p>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>{pageContent.vision.title}</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                {pageContent.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.categoriesSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{pageContent.values.title}</h2>
          <div className={styles.grid}>
            {pageContent.values.items.map((value, index) => (
              <div key={index} className={styles.categoryCard}>
                <h3 className={styles.categoryName}>{value.title}</h3>
                <p className={styles.categoryDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {authors.length > 0 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{dict.about.team}</h2>
            <div className={styles.grid}>
              {authors.map((author) => (
                <div key={author.id} className={styles.categoryCard}>
                  {author.avatar && (
                    <div style={{ marginBottom: '1rem' }}>
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        width={80}
                        height={80}
                        style={{ borderRadius: '50%', margin: '0 auto' }}
                      />
                    </div>
                  )}
                  <h3 className={styles.categoryName}>{author.name}</h3>
                  {author.bio && (
                    <p className={styles.categoryDescription}>{author.bio}</p>
                  )}
                  {author.social && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1rem' }}>
                      {author.social.twitter && (
                        <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-600)' }}>
                          Twitter
                        </a>
                      )}
                      {author.social.github && (
                        <a href={author.social.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-600)' }}>
                          GitHub
                        </a>
                      )}
                      {author.social.linkedin && (
                        <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-600)' }}>
                          LinkedIn
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
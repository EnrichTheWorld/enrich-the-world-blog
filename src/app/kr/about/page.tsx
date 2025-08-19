import { getAllAuthors } from '@/lib/contentful';
import { AboutPage } from '@/components/AboutPage';

export const metadata = {
  title: '소개',
  description: '세상을 풍요롭게 만드는 이야기. 우리의 미션과 비전, 그리고 팀을 소개합니다.',
};

export default async function KrAbout() {
  const authors = await getAllAuthors('ko');

  return (
    <AboutPage
      authors={authors}
      locale="ko"
    />
  );
}
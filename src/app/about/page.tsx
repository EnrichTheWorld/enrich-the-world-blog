import { getAllAuthors } from '@/lib/contentful';
import { AboutPage } from '@/components/AboutPage';

export const metadata = {
  title: 'About',
  description: 'Stories that enrich the world. Learn about our mission, vision, and the team behind our blog.',
};

export default async function About() {
  const authors = await getAllAuthors('en');

  return (
    <AboutPage
      authors={authors}
      locale="en"
    />
  );
}
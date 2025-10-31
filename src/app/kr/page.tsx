import { getFeaturedPosts, getLatestPosts, getAllCategories } from '@/lib/contentful';
import { LandingPage } from '@/components/HomePage/LandingPage';

export default async function KrHome() {
  const [featuredPosts, latestPosts, categories] = await Promise.all([
    getFeaturedPosts(3, 'ko'),
    getLatestPosts(6, 'ko'),
    getAllCategories('ko'),
  ]);

  return (
    <LandingPage
      featuredPosts={featuredPosts}
      latestPosts={latestPosts}
      categories={categories}
      locale="ko"
    />
  );
}
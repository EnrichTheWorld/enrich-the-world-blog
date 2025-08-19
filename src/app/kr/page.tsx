import { getFeaturedPosts, getLatestPosts, getAllCategories } from '@/lib/contentful';
import { HomePage } from '@/components/HomePage';

export default async function KrHome() {
  const [featuredPosts, latestPosts, categories] = await Promise.all([
    getFeaturedPosts(3, 'ko'),
    getLatestPosts(6, 'ko'),
    getAllCategories('ko'),
  ]);

  return (
    <HomePage
      featuredPosts={featuredPosts}
      latestPosts={latestPosts}
      categories={categories}
      locale="ko"
    />
  );
}
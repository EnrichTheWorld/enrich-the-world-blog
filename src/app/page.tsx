import { getFeaturedPosts, getLatestPosts, getAllCategories } from '@/lib/contentful';
import { LandingPage } from '@/components/HomePage/LandingPage';

export default async function Home() {
  const [featuredPosts, latestPosts, categories] = await Promise.all([
    getFeaturedPosts(3, 'en'),
    getLatestPosts(6, 'en'),
    getAllCategories('en'),
  ]);

  return (
    <LandingPage
      featuredPosts={featuredPosts}
      latestPosts={latestPosts}
      categories={categories}
      locale="en"
    />
  );
}
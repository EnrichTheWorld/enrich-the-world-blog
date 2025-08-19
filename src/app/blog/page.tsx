import { getAllPosts, getAllCategories } from '@/lib/contentful';
import { BlogPage } from '@/components/BlogPage';

export const metadata = {
  title: 'Blog',
  description: 'Discover insights and perspectives on technology and social impact through our blog posts.',
};

export default async function Blog() {
  const [posts, categories] = await Promise.all([
    getAllPosts('en'),
    getAllCategories('en'),
  ]);

  return (
    <BlogPage
      posts={posts}
      categories={categories}
      locale="en"
    />
  );
}
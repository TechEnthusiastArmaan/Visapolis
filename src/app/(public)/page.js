import HomePageClient from './components/HomePageClient';
import { getPublishedBlogs } from '../admin/blog/actions';

export const metadata = {
  title: 'Home',
  description: 'Expert solutions for all type of visas. Achieve your dream of citizenship and immigration with our professional guidance.',
};

export default async function HomePage() {
    // Fetch blogs at the page level (server component)
    const blogs = await getPublishedBlogs(4);
    
    return <HomePageClient blogs={blogs} />;
}
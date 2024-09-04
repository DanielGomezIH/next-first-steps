import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO About',
  description: 'About page',
  keywords: ['about page', 'information'],
};

export default function AboutPage() {
  return (
    <>
      <span className='text-5xl'>About Page</span>
    </>
  );
}

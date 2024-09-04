import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Contact',
  description: 'Contact page',
};

export default function ContactPage() {
  return (
    <>
      <span className='text-5xl'>Contact Page</span>
    </>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Pricing',
  description: 'Pricing page',
};

export default function PricingPage() {
  return (
    <>
      <span className='text-5xl'>Pricing Page</span>
    </>
  );
}

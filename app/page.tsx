import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-screen p-24'>
      <span className='text-5xl'>Hola mundo</span>

      <Link href='/about'>About</Link>
    </main>
  );
}

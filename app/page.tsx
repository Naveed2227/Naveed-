import dynamic from 'next/dynamic';

// Import the client component with no SSR
const HomeClient = dynamic(() => import('./HomeClient'), { ssr: false });

export default function Home() {
  return <HomeClient />;
}

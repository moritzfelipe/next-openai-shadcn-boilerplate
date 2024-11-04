'use client';

import PetNameGenerator from '@/components/petNameGenerator';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PetNameGenerator />
    </main>
  );
}
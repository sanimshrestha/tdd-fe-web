import { metadatajson } from '@/lib/constants'
import { Metadata } from 'next'
import { redirect } from 'next/navigation';

export const metadata: Metadata = metadatajson

export default function Home() {
  redirect('/comingsoon');
}

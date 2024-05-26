import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Dev - Youth Matching',
      action: 'link',
      target: 'https://developer-connect-vwxu15e.gamma.site/',
    },
    {
      label: 'Call for Action',
      action: 'link',
      target: 'https://developer-connect-vwxu15e.gamma.site/sponsor',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/edgapbridger-1.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'EdGapBridger - Dev-Youth Matching Hack',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'EdGapBridger',
  description: 'ETHBerlin04 Hackathon Project - EdGapBridger',
  openGraph: {
    title: 'EdGapBridger',
    description: 'ETHBerlin04 Hackathon Project - EdGapBridger',
    images: [`${NEXT_PUBLIC_URL}/edgapbridger-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>EdGapBridger</h1>
    </>
  );
}

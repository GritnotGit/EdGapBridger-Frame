import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'get to know us',
      target: `https://www.youtube.com/watch?v=ksd86Tx5RGs`,
    },
    {
      action: 'link',
      label: 'project introduction',
      target: `https://sso-projects.my.canva.site`,
    },
    {
      // action: '',
      label: 'mint to donate',
      // target: `${NEXT_PUBLIC_URL}/api/tx`,
      
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/SSO_pic.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Donate To Empower Students!'
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Schulfundraiser',
  description: 'LFG',
  openGraph: {
    title: 'Schulfundraiser',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Schulfundraiser</h1>
    </>
  );
}

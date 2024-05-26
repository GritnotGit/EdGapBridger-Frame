import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config'; // Import the configuration
import React from 'react';

// Frame metadata with customized buttons and links
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Dev - Youth Matching',
      target: 'https://developer-connect-vwxu15e.gamma.site/',
    },
    {
      action: 'link',
      label: 'Call for Action',
      target: 'https://developer-connect-vwxu15e.gamma.site/sponsor',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/image.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'EdGapBridger - Dev-Youth Matching Hack',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

// Metadata for the page
export const metadata: Metadata = {
  title: 'EdGapBridger',
  description: 'ETHBerlin04 Hackathon Project - EdGapBridger',
  metadataBase: new URL(NEXT_PUBLIC_URL),
  openGraph: {
    title: 'EdGapBridger',
    description: 'ETHBerlin04 Hackathon Project - EdGapBridger',
    images: [`${NEXT_PUBLIC_URL}/image.png`],
  },
  other: {
    ...frameMetadata,
  },
};

const Page: React.FC = () => {
  return (
    <div>
      <h1>EdGapBridger</h1>
      <div>
        <h2>Hackathon Concept</h2>
        <p>
          Learn more about our hackathon concept and how you can participate.
          <a href="https://edgapbridger-2-day-hacka-06zz8ib.gamma.site/" target="_blank" rel="noopener noreferrer">
            Visit the Hackathon Website
          </a>
        </p>
      </div>
      <div>
        <h2>For Dev - Youth Matching</h2>
        <p>
          <a href="https://developer-connect-vwxu15e.gamma.site/" target="_blank" rel="noopener noreferrer">
            Visit Dev - Youth Matching
          </a>
        </p>
      </div>
      <div>
        <h2>Call for Action</h2>
        <p>
          <a href="https://developer-connect-vwxu15e.gamma.site/sponsor" target="_blank" rel="noopener noreferrer">
            Call for Action
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;

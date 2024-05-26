import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config'; // Import the configuration
import React from 'react';

// Frame metadata with customized buttons and links
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'PoConcept',
      target: 'https://edgapbridger-2-day-hacka-06zz8ib.gamma.site/',
    },
    {
      action: 'link',
      label: 'Dev - Youth Matching',
      target: 'http://localhost:3000', // Link to the local signup form for developers and youth
    },
    {
      action: 'link',
      label: 'Fundraise',
      target: 'http://localhost:3001', // Link to the local signup form for sponsors and supporters
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/SSO_pic.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Donate To Empower Students!',
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
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
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
        <iframe 
          src="http://localhost:3000" 
          width="600" 
          height="800" 
          frameBorder="0">
        </iframe>
      </div>
      <div>
        <h2>Fundraise</h2>
        <iframe 
          src="http://localhost:3001" 
          width="600" 
          height="800" 
          frameBorder="0">
        </iframe>
      </div>
    </div>
  );
};

export default Page;

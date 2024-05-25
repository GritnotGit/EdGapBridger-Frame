import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config'; // Der Import der Konfiguration

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'get to know us',
      target: `${NEXT_PUBLIC_URL}/get-to-know-us`, // Interne Seite für YouTube-Video
    },
    {
      action: 'link',
      label: 'mint project',
      target: `${NEXT_PUBLIC_URL}/mint-project`, // Interne Seite für Mint Project
    },
    {
      action: 'link',
      label: 'Donation',
      target: `https://fv.sophie-scholl-schule.eu/verein/wie-kann-ich-spenden`,
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
  description: 'School Project Mint',
  metadataBase: new URL(NEXT_PUBLIC_URL),
  openGraph: {
    title: 'Schulfundraiser',
    description: 'School Project Mint',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

const Page: React.FC = () => {
  return (
    <>
      <h1>Schulfundraiser</h1>
      <div>
        <h2>Get to Know Us</h2>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/UgkxH_D2DdkYjKQB-qHir0AzL6NQL5OjqQkf?feature=shared" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <div>
        <h2>Mint Project</h2>
        <p>
          Learn more about our Mint Project and how you can get involved.
          <a href="https://zora.co/collect/base:0xb1031d5f7e02de0481ec1c2743409fb6534401e9" target="_blank" rel="noopener noreferrer">
            Visit Mint Project
          </a>
        </p>
      </div>
      <div>
        <h2>Donation</h2>
        <iframe 
          src="https://fv.sophie-scholl-schule.eu/verein/wie-kann-ich-spenden" 
          width="560" 
          height="315" 
          frameBorder="0">
        </iframe>
      </div>
    </>
  );
}

export default Page;

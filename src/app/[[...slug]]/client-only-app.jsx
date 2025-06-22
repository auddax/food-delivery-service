'use client';

import dynamic from 'next/dynamic';

const ClientOnlyApp = dynamic(() => import('src/components/App/App'), {
  ssr: false,
});

export default ClientOnlyApp;

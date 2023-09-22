import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';
import Script from 'next/script';

interface Props {
  children: React.ReactNode;
}

const Root: React.FC<Props> = ({ children }) => {
  return (
    <html>
      <Head>
        <title>@kiahjh</title>
      </Head>
      <Script src="https://kit.fontawesome.com/597740db7b.js"></Script>
      <body>{children}</body>
    </html>
  );
};

export default Root;

import React from 'react';
import Head from 'next/head';

import { BlockText } from 'components/block-text/BlockText';
import { Highlight } from 'components/intro/Highlight';
import { Intro } from 'components/intro/Intro';

export default () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Intro>
      Araclx is open-source corporation that works,{' '}
      We're building experimental software based on latest <Highlight>distributed technologies</Highlight>
      , <Highlight>blockchain</Highlight>, and {' '}
      <Highlight>artifictial intelligence</Highlight>.
    </Intro>

    <BlockText
      heading="Who we are"
      description={
        <>
          Aralcx is worldwide open-source corporation, busy on building products that can potentially improve actual world by implementation of transparency with bloackchain usage. We're not a single-product organization - we have plans for building new, better future. For more informations go to{' '}
          <a href="https://github.com/araclx/manifest" target="_blank" rel="noopener noreferrer">
            Araclx's manifest
          </a>
          .
        </>
      }
    />
  </>
);

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Styles } from 'styles/base';

import Dribbble from 'assets/svg/dribbble.svg';
import Facebook from 'assets/svg/facebook.svg';
import Github from 'assets/svg/github.svg';
import Instagram from 'assets/svg/instagram.svg';
import Linkedin from 'assets/svg/linkedin.svg';
import Twitter from 'assets/svg/twitter.svg';
import Logo from 'assets/svg/araclx-logo.svg';

import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { HeaderLink } from 'components/header/HeaderLink';
import { Devtools } from 'components/devtools/Devtools';

interface AppLayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

const Layout = styled.div`
  display: block;

  min-height: 100vh;
`;

export const AppLayout = ({ children }: AppLayoutProps) => (
  <>
    <Styles />

    <Layout>
      <Header>
        <HeaderLink name="About" href="/about" />
        <HeaderLink name="GitHub" href="https://github.com/araclx" icon={<Github />} />
      </Header>

      {children}

      <Footer
        logo={<Logo />}
        social={[
          // { icon: <Dribbble />, to: 'https://dribbble.com/ueno' },
          // { icon: <Twitter />, to: 'https://twitter.com/araclx' },
          { icon: <Github />, to: 'https://github.com/araclx' },
          // { icon: <Instagram />, to: 'https://www.instagram.com/uenodotco' },
          { icon: <Facebook />, to: 'https://www.facebook.com/araclx' },
          { icon: <Linkedin />, to: 'https://www.linkedin.com/company/araclx' },
        ]}
      />

      {isDev && <Devtools />}
    </Layout>
  </>
);

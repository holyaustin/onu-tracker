import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import Services from '../sections/services';
import UltimateFeatures from '../sections/ultimate-feature';
import Faq from '../sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Decentralized Crime Record System"
          description="Storage of video files and media documents using web3 decentralized technology for on demand access with sharing made easy with web3Design and implementation of a police crime record management system using blockchain and decentralized storage system!"
        />
        <Banner />
        {/**
        <Services />
        <UltimateFeatures />
        <Faq />
         */}
      </Layout>
    </ThemeProvider>
  );
}

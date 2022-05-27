import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React from 'react';
import { FooterContent } from '../../components/FooterContent';
import { Navigation } from '../../components/Navigation';
import { Programmes } from '../../components/Programmes';

export const Home = () => {
  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Content>
        <Programmes />
      </Content>
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  );
};

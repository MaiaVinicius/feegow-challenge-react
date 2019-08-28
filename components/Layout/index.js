import * as React from 'react';
import styled from 'styled-components/native';

import Header from '../Header';
import Footer from '../Footer';

const Layout = styled.View`
`;

Layout.Content = styled.ScrollView`
  padding: 20px;
  height: 100%;
`;

Layout.Title = styled.Text`
  color: #010101;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export default ({ title, children }) => {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Layout.Title>{title}</Layout.Title>
        {children}
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

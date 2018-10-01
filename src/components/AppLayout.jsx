import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './assets/index.css';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: ${props => props.theme.color.gray};
`;

function getProductsUrlsFromEdges(edges) {
  const data = edges.map(({ node }) => ({
    name: node.title,
    path: node.path,
  }));

  return data;
}

const AppLayout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query PageData {
          siteTitle: site {
            siteMetadata {
              title
            }
          }

          productEdges: allContentfulProducto {
            edges {
              node {
                title
                path
              }
            }
          }
        }
      `}
      render={data => {
        const productsUrls = getProductsUrlsFromEdges(data.productEdges.edges);

        return (
          <Layout>
            <Helmet
              title={data.siteTitle.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Essenta' },
                { name: 'keywords', content: 'Essenta, perfumes' },
              ]}
              link={[
                {
                  rel: 'stylesheet',
                  href:
                    'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
                  integrity:
                    'sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt',
                  crossorigin: 'anonymous',
                },
                {
                  rel: 'shortcut icon',
                  href: '/favicon.ico',
                  type: 'image/x-icon',
                },
                {
                  rel: 'icon',
                  href: '/favicon.ico',
                  type: 'image/x-icon',
                },
              ]}
            />
            <html lang="es" />
            <div>
              <Navbar urls={productsUrls} />
              {children}
            </div>
            <Footer />
          </Layout>
        );
      }}
    />
  );
};

AppLayout.propTypes = {
  children: PropTypes.object,
};

export default AppLayout;

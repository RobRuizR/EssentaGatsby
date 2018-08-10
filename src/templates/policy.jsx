import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Breadcrumbs from './../components/Breadcrumbs';
import { device } from '../utilities/device';

const Layout = styled.div`  
  display: flex;
  flex-direction: column;
`;

const TitleBanner = styled.div`
  background: ${props => props.theme.color.orange};
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const TitleBlock = styled.div`
  max-width: 40%;
  font-size: 4.5rem;
  text-align: center;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.main};
  padding: 0.5rem 1rem;
  color: ${props => props.theme.color.black};
  border: 0.2rem solid ${props => props.theme.color.black};

  ${device.tablet} {
    max-width: 60%;
    font-size: 3rem;
  }
`;

const ContentBlock = styled.div`
  background: ${props => props.theme.color.gray};
  display: flex;
  justify-content: center;
  padding: 8rem 0;
`;

const Content = styled(ReactMarkdown)`
  font-family: ${props => props.theme.fonts.main};
  font-size: 1.4rem;
  line-height: 1.2em;
  width: 60%;
  color: ${props => props.theme.color.black};

  ${device.tablet} {
    width: 80%; 
  }

  ${device.mobile} {
    width: 90%;
    font-size: 1.2rem;
  }

  & strong {
    font-weight: 700;
  }

  & > :not(:last-child) {
    padding-bottom: 1.5em;
  }

  & ol {
    list-style-position: inside;
    list-style: none;

    & > li {
      counter-increment: ctr;

      &::before {
        content: counter(ctr, upper-roman) ". ";
        display: inline;
        color: ${props => props.theme.color.orange};
        font-weight: 700;
      }
    }    
  }
`;

function Privacidad ({data}) {
  const { markdownRemark } = data;
  const { frontmatter, rawMarkdownBody } = markdownRemark;

  return (
    <Layout>
      <Breadcrumbs />
      <TitleBanner>
        <TitleBlock>{frontmatter.title}</TitleBlock>
      </TitleBanner>
      <ContentBlock>
        <Content source={rawMarkdownBody} />
      </ContentBlock>
    </Layout>
  );
}

export default Privacidad;

export const pageQuery = graphql`
  query PolicyByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      rawMarkdownBody
      frontmatter {
        title
        path
      }
    }
  }
`;
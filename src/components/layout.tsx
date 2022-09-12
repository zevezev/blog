import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: any;
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <LayoutComponent>
      <header>
        <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
      </header>
      <NavComponent>
        <NavLinks>
          <NavLinkItem>
            <LinkText to="/">Home</LinkText>
          </NavLinkItem>
          <NavLinkItem>
            <LinkText to="/about">About</LinkText>
          </NavLinkItem>
          <NavLinkItem>
            <LinkText to="/blog">Blog</LinkText>
          </NavLinkItem>
        </NavLinks>
      </NavComponent>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </LayoutComponent>
  );
};
const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 4rem;
  font: sans-serif;
`;
const NavComponent = styled.nav`
  border-bottom: 1px solid gray;
`;
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;
const NavLinkItem = styled.li`
  padding-right: 2rem;
`;
const LinkText = styled(Link)`
  color: black;
`;
const SiteTitle = styled.h1`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0;
`;
export default Layout;

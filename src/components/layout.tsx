import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";

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

  const pages: { name: string; url: string }[] = [
    {
      name: "Art",
      url: "/art",
    },
    {
      name: "Pedals",
      url: "/pedals",
    },
    {
      name: "Chaos",
      url: "/chaos",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <LayoutComponent>
        <Header>
          <SiteTitle>
            <LinkText to={"/"}>{data.site.siteMetadata.title} </LinkText>
          </SiteTitle>

          {/* todo put this in an expand on movile and change the flex direciton */}
          <NavComponent>
            <NavLinks>
              {pages.map((page) => (
                <LinkText to={page.url}>{page.name}</LinkText>
              ))}
            </NavLinks>
          </NavComponent>
        </Header>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </LayoutComponent>
    </>
  );
};
const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
`;
const Header = styled.header`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavComponent = styled.nav``;
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  align-items: center;
  gap: 1.5rem;
`;
const NavLinkItem = styled.li`
  padding-right: 2rem;
`;
const LinkText = styled(Link)`
  color: black;
  text-decoration: none;
`;
const SiteTitle = styled.h1`
  font-size: 2rem;
  color: gray;
  font-weight: 700;
  margin: 0;
`;
export default Layout;

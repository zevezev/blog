import * as React from "react";
import { Link } from "gatsby";
const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: any;
}) => {
  return (
    <div style={{ display: "flex", gap: "3rem" }}>
      <nav style={{ borderRight: "1px solid gray", paddingRight: "2rem" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;

import { NavBar } from "@Components/atoms/NavBar";
import PageWrapper from "@Components/atoms/PageWrapper";
import React from "react";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  title?: string;
  meta?: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >;
  children: React.ReactNode;
}

export function Layout(props: LayoutProps): React.ReactElement {
  const { title, meta, children } = props;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta {...meta} />
      </Helmet>
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}

Layout.defaultProps = {
  title: "",
  meta: {},
};

export default Layout;

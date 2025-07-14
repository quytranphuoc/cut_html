import type React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Layout } from "antd";

const { Content } = Layout;
interface LayoutProps {
  children: React.ReactNode;
  headerContent: {
    logo: string;
    logos: Array<{ id: number; name: string; logoUrl: string }>;
    navigation: Array<{ label: string; href: string }>;
    loginText: string;
    signupText: string;
  };
  footerContent: {
    logo: string;
    copyright: string;
    sections: Array<{
      title: string;
      links: Array<{ label: string; href: string }>;
    }>;
    newsletter: {
      title: string;
      placeholder: string;
    };
    icons: Array<{ icon: string; href: string }>;
    logoUrl: string;
  };
}

export const LayoutComponent: React.FC<LayoutProps> = ({
  children,
  headerContent,
  footerContent,
}) => {
  return (
    <Layout className="min-h-screen">
      <Header content={headerContent} />

      <Content className="flex-grow">
        <div>{children}</div>
      </Content>

      <Footer content={footerContent} />
    </Layout>
  );
};

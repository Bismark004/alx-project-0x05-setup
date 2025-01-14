
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { LayoutProps } from "@/interfaces/index";


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

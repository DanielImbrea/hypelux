import React from "react";
import Helmet from "react-helmet";
import { ToastProvider } from "react-toast-notifications";
import { MDXProvider } from "@mdx-js/react";

import { components } from "@components/MdComponents";
import Seo from "@utils/seo";

import Footer from "@layouts/Footer";
import Navbar from "@layouts/Navbar";

import "@styles/global.scss";
import "@styles/utils.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const Layout = ({ children, header, seo }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/css/swiper.min.css"
        />
      </Helmet>
      <Seo {...seo} />
      <ToastProvider>
        <main className="layout layout--default">
          <Navbar {...header} />
          <div className="layout__inner">
            <MDXProvider components={components}>
              {children}
            </MDXProvider>
          </div>
          <Footer />
        </main>
      </ToastProvider>
    </>
  );
};

export default Layout;

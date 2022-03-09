import React from "react";
import Header from "../components/organisms/Header/Header";
import Footer from "../components/organisms/Footer/Footer";
import BannerContainer from "../components/organisms/Footer/Banner";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

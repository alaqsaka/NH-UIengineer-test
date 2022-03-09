import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../layout/Layout";
import BannerContainer from "../components/organisms/Footer/Banner";
import BlogSection from "../components/organisms/BlogSection";

const Home = () => {
  return (
    <Layout>
      <BlogSection />

      <BannerContainer />
    </Layout>
  );
};

export default Home;

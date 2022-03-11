import { Layout } from "../layout/Layout";
import ArticleSection from "../components/organisms/ArticleSection";
import BannerContainer from "../components/organisms/Footer/Banner";
import BannerLangganan from "../components/atoms/BannerLangganan";
import ArtikelTerkait from "../components/molecules/ArtikelTerkait";
const articleId = () => {
  return (
    <Layout>
      <ArticleSection />
      {/* banner langganan */}
      <BannerLangganan />
      {/* baca artikel terkait (list of vertical blog card)*/}
      <ArtikelTerkait />
      <BannerContainer />
    </Layout>
  );
};

export default articleId;

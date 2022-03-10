import { Layout } from "../../layout/Layout";
import ArticleSection from "../../components/organisms/ArticleSection";
import BannerContainer from "../../components/organisms/Footer/Banner";
const articleId = () => {
  return (
    <Layout>
      <ArticleSection />
      {/* banner langganan */}
      {/* baca artikel terkait (list of vertical blog card)*/}
      <BannerContainer />
    </Layout>
  );
};

export default articleId;

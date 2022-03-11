import styled from "styled-components";

export const ArticleHeaderDiv = styled.div`
  margin-top: 36px;
`;
export const ArticleBodyDiv = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
`;
export const ArticleFooterDiv = styled.div`
  margin-top: 36px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 100%;
  gap: 30px;
  div {
    max-width: 635px;
  }
`;

export const SidebarArticle = styled.div`
  width: 255px;
  div {
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
  }
`;

export const SidebarBreadcrumb = styled.div`
  display: flex;
  gap: 6px;
`;

export const NavLink = styled.p`
  color: rgba(0, 122, 255, 1);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-align: left;
`;

export const SidebarTitle = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.005em;
  text-align: left;
  color: rgba(41, 56, 78, 1);
`;

export const SidebarAuthor = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(41, 56, 78, 1);
`;

export const SidebarDetails = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  cursor: pointer;
`;

export const Devider = styled.div`
  border: 1px solid #d9dde3;
  width: 100%;
  height: 0px;
  margin-top: 24px;
`;

export const LikesCommentsShare = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;

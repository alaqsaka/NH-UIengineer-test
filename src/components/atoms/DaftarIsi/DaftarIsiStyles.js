import styled from "styled-components";

export const Container = styled.div`
  margin-top: 36px;
  border: 1px solid #bfc5cc;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 32px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: rgba(41, 56, 78, 1);

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  letter-spacing: 0.005em;
`;

export const Section = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */
  text-align: left;
  letter-spacing: 0.005em;

  /* Primary / Hoster Blue */

  color: #007aff;
`;
export const SectionNonActive = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */
  text-align: left;
  letter-spacing: 0.005em;

  /* Primary / Hoster Blue */

  color: #29384e;
`;

export const SubSection = styled.div`
  padding-left: 16px;
  margin-bottom: 6px;
`;

export const SubSectionText = styled.p`
  /* Body - Reguler/Body 5 */
  text-align: left;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  margin-bottom: 6px;
  /* identical to box height, or 200% */

  letter-spacing: 0.005em;

  /* Text Color / Primary */

  color: #29384e; ;
`;

export const SubSectionTextActive = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-align: left;
  line-height: 24px;
  /* identical to box height, or 200% */

  letter-spacing: 0.005em;

  /* Primary / Hoster Blue */

  color: #007aff;
`;

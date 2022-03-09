import styled from "styled-components";

export const BannerContainer = styled.div`
  padding-top: 52px;
  text-align: center;
  padding-bottom: 92px;
  background: linear-gradient(
      249.77deg,
      #0094ff -1.99%,
      #007aff 43.52%,
      #026ce8 95.86%
    ),
    linear-gradient(0deg, #f0f7ff, #f0f7ff);
`;

export const BannerTitle = styled.h1`
  font-weight: 700;
  text-align: center;
  font-size: 40px;
  line-height: 56px;
  -webkit-letter: -2%;
  -moz-letter: -2%;
  -ms-letter: -2%;
  letter: -2%;
  color: white;
`;

export const BannerText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  opacity: 0.72;
  text-align: center;
  letter-spacing: 0.005em;
  margin-bottom: 42px;
`;

export const BannerButton = styled.button`
  margin-top: 42px;
  height: 56px;
  width: 278px;
  border-radius: 40px;
  padding: 12px, 64px, 12px, 64px;
  box-shadow: 0px 8px 10px rgba(255, 176, 77, 0.32);
  background: rgba(255, 152, 0, 1);
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 92px;
`;

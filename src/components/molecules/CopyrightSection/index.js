import React from "react";
import styled from "styled-components";
import HorizontalDevider from "../../atoms/HorizontalDevider";

export default function CopyrightSection(props) {
  const LightText = styled.p`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    opacity: 0.72;
  `;

  const Text = styled.p`
    //styleName: Body - Reguler/Body 12 alt;
    font-family: Nunito Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    a {
      color: white;
    }
  `;

  const CopyrightDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  return (
    <div>
      <HorizontalDevider />
      <CopyrightDiv>
        <LightText>
          Copyright ©2021 Niagahoster | Hosting powered by PHP8, CloudLinux,
          CloudFlare, BitNinja and DC DCI-Indonesia | <br />
          Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud
          computing technology
        </LightText>
        <Text>
          <a href="#">Syarat dan Ketentuan</a> |{" "}
          <a href="#">Kebijakan Privasi</a>
        </Text>
      </CopyrightDiv>
    </div>
  );
}

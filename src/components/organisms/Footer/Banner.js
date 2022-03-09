import React from "react";
import ButtonOrange from "../../atoms/ButtonOrange";
import {
  BannerContainer,
  BannerTitle,
  BannerText,
  BannerButton,
} from "./BannerStyles";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerTitle>Awali Kesuksesan Anda Bersama Niagahoster</BannerTitle>
      <BannerText>
        Kini tidak lagi sulit mewujudkan website impian. Performa hebat,
        keamanan ekstra, dan <br /> layanan dukungan teknis yang bisa diandalkan
        - semua dengan harga terjangkau!
      </BannerText>
      <ButtonOrange height="56" width="278">
        Mulai Sekarang
      </ButtonOrange>
    </BannerContainer>
  );
};

export default Banner;

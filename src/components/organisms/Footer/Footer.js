import React from "react";
import Image from "next/image";
import {
  FooterContainer,
  FooterColumn,
  Column1,
  Div1,
  Div2,
  Column2,
  ListTitle,
  ListItem,
  MissionText,
  Rows,
  Row1,
  Row2,
  InputBerlangganan,
} from "./FooterStyles";
import CopyrightSection from "../../molecules/CopyrightSection";

import Icon from "../../atoms/Icon";
import FooterIcons from "../../molecules/FooterIcons";
import Search from "../../atoms/Search";
import ButtonOrange from "../../atoms/ButtonOrange";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumn>
        <Column1>
          <Div1>
            <ListTitle>Web Hosting</ListTitle>
            <ListItem>Hosting Indonesia</ListItem>
            <ListItem>Cloud Hosting</ListItem>
            <ListItem>Email Hosting</ListItem>
            <ListItem>Web Hosting Unlimited</ListItem>
            <ListItem>Hosting Terbaik</ListItem>
            <ListItem>Hosting Murah</ListItem>
            <ListItem>Hosting Singapore SG</ListItem>
            <ListItem>Keamanan SSL/HTTPS</ListItem>
            <ListItem>Data Center Hosting Terbaik</ListItem>
            <ListItem>Hosting Gratis</ListItem>
            <ListItem>Transfer Hosting</ListItem>
            <br />
            <br />

            <ListTitle>Domain</ListTitle>
            <ListItem>Domain</ListItem>
            <ListItem>Domain .ID</ListItem>
            <ListItem>Domain Gratis</ListItem>
            <ListItem>Promosi Domain .COM</ListItem>
            <ListItem>WHOIS</ListItem>
            <ListItem>Transfer Domain</ListItem>
          </Div1>
          <Div2>
            <div>
              <ListTitle>Virtual Private Server</ListTitle>
              <ListItem>VPS KVM Indonesia</ListItem>
              <ListItem>Cloud VPS Hosting</ListItem>
              <ListItem>CyberPanel VPS Hosting</ListItem>
              <br />
              <br />
            </div>
            <div>
              <ListTitle>WordPress Hosting</ListTitle>
              <ListItem>WordPress Hosting</ListItem>
              <ListItem>Managed WordPress</ListItem>

              <br />
              <br />
            </div>
            <div>
              <ListTitle>Website</ListTitle>
              <ListItem>Website Instan</ListItem>
              <ListItem>Jasa Pembuatan Website</ListItem>

              <br />
              <br />
            </div>

            <div>
              <ListTitle>Bantuan</ListTitle>
              <ListItem>Cara Pembayaran</ListItem>
              <ListItem>Ebook Gratis</ListItem>
              <ListItem>Knowledge Base</ListItem>
              <ListItem>Niagahoster Blog</ListItem>
              <ListItem>Niagahoster Course</ListItem>
              <ListItem>Niagahoster Forum</ListItem>
            </div>
          </Div2>
        </Column1>
        <Column2>
          <Rows>
            <Row1>
              <div>
                <ListTitle>Kemitraan</ListTitle>
                <ListItem>NiagaHoster Poin</ListItem>
                <ListItem>NiagaHoster Partner</ListItem>
                <ListItem>Program Afiliasi Niagahoster</ListItem>
                <br />
                <br />
                <ListTitle>Perusahaan</ListTitle>
                <ListItem>Tentang Niagahoster</ListItem>
                <ListItem>Kontak</ListItem>
                <ListItem>Karir</ListItem>
                <ListItem>Event</ListItem>
                <ListItem>Status Layanan</ListItem>
                <ListItem>Review Pelanggan</ListItem>
                <ListItem>Penawaran & Promo Spesial</ListItem>
                <ListItem>Niagahoster Virtual Summit</ListItem>
              </div>
              <div>
                <Image
                  src="/Niagahoster logo.svg"
                  width={255}
                  height={40}
                  layout=""
                  alt="Niagahoster Logo"
                ></Image>
                <MissionText>
                  Misi kami adalah membantu jutaan <br />
                  orang memanfaatkan potensi yang ada <br />
                  di internet untuk membangun <br />
                  kesuksesan online.
                </MissionText>
                <MissionText>
                  Jl. Palagan Tentara Pelajar No 81 <br />
                  Jongkang, Sariharjo, Ngaglik, Sleman <br />
                  Daerah Istimewa Yogyakarta 55581
                </MissionText>
                <MissionText>
                  Telepon: 0274-2885822 <br />
                  WhatsApp: 085943258274 <br />
                  Telegram: @niagahost_bot <br />
                </MissionText>
                <FooterIcons />
              </div>
            </Row1>
            <Row2>
              <div>
                <ListTitle>Newsletter</ListTitle>
                <br />
              </div>

              <div>
                <InputBerlangganan>
                  <Search placeholder="Write your input here" />
                  <ButtonOrange height="48" width="189">
                    Berlangganan
                  </ButtonOrange>
                </InputBerlangganan>
              </div>
            </Row2>
          </Rows>
        </Column2>
      </FooterColumn>
      <CopyrightSection />
    </FooterContainer>
  );
};

export default Footer;

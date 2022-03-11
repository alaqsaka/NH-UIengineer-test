import React from "react";

import Image from "next/image";
import {
  Container,
  Heading,
  Title,
  Section,
  SubSection,
  SubSectionText,
  SubSectionTextActive,
  SectionNonActive,
} from "./DaftarIsiStyles";

export default function DaftarIsi(props) {
  return (
    <Container>
      <Heading>
        <Title>Daftar Isi</Title>
        <Image
          src="/icons/chevron-upper.svg"
          layout=""
          width={24}
          height={24}
          alt="Arrow"
        ></Image>
      </Heading>
      <Section>Cara Cek IP Hosting</Section>
      <SubSection>
        <SubSectionTextActive>
          Melihat IP Hosting pada email informasi akun hosting
        </SubSectionTextActive>
        <SubSectionText>
          Melihat IP Hosting melalui Member Area Niagahoster
        </SubSectionText>
        <SubSectionText>Melihat IP Hosting melalui cPanel</SubSectionText>
        <SubSectionText>Melihat IP menggunakan CMD</SubSectionText>
        <SubSectionText>Melihat IP dengan web-based tools</SubSectionText>
      </SubSection>
      <SectionNonActive>Kesimpulan</SectionNonActive>
    </Container>
  );
}

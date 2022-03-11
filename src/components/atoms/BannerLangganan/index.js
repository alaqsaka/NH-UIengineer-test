import React from "react";
import { Container, Text, SmallText } from "./BannerLanggananStyles";
import ButtonOrange from "../../atoms/ButtonOrange";

export default function BannerLangganan(props) {
  return (
    <Container>
      <div>
        <Text>Ingin jadi yang pertama tau artikel terbaru kami?</Text>
        <SmallText>
          Kami akan mengirimkan pemberitahuan artikel terbaru kami melalui{" "}
          <br /> email Anda. Ingin mendapatkan pemberitahuan?
        </SmallText>
      </div>

      <ButtonOrange width={331} height={56}>
        Langganan Sekarang
      </ButtonOrange>
    </Container>
  );
}

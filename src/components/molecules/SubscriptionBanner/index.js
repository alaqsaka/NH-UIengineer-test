import React from "react";
import ButtonOrange from "../../atoms/ButtonOrange";
import { Container, Text, SmallText, Col2 } from "./SubscriptionBannerStyles";

export default function SubscriptionBanner(props) {
  return (
    <Container>
      <div>
        <Text>
          Ingin jadi yang pertama tau <br /> artikel terbaru kami?
        </Text>
        <SmallText>
          Kami akan mengirimkan pemberitahuan artikel <br /> terbaru kami
          melalui email Anda. Ingin <br /> mendapatkan pemberitahuan?
        </SmallText>
      </div>

      <Col2>
        <ButtonOrange width={331} height="56">
          Langganan Sekarang
        </ButtonOrange>
      </Col2>
    </Container>
  );
}

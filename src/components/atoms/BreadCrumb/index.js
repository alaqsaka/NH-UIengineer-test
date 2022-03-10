import React from "react";
import Image from "next/image";

import { Container, NavLink, NavLinkDisabled } from "./BreadcrumbStyles";

export default function Breadcrumb(props) {
  return (
    <Container>
      <NavLink>Home</NavLink>
      <Image
        src="/icons/chevron-right.svg"
        alt="Arrow right"
        width={4.16}
        height={6.99}
        layout=""
      ></Image>
      <NavLink>Tutorial</NavLink>
      <Image
        src="/icons/chevron-right.svg"
        alt="Arrow right"
        width={4.16}
        height={6.99}
        layout=""
      ></Image>
      <NavLink>Hosting</NavLink>
      <Image
        src="/icons/chevron-right.svg"
        alt="Arrow right"
        width={4.16}
        height={6.99}
        layout=""
      ></Image>
      <NavLinkDisabled>4+ Cara Mudah Cek IP Hosting Website</NavLinkDisabled>
    </Container>
  );
}

import React from "react";
import Image from "next/image";
import {
  Container,
  Navbar,
  Div1,
  Div2,
  NavLink,
  Div3,
  LanguageSelector,
  BtnLogin,
  Language,
  Menu,
  MenuItem,
  MenuItemLink,
  Hero,
  HeroTitle,
  HeroSubTitle,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Navbar>
      <Div1>
        <Image src="/Logo.svg" alt="Logo Niagahoster" width={42} height={42} />
        <Image
          src="/Niagahoster.svg"
          alt="Logo Niagahoster"
          width={115}
          height={42}
        />
      </Div1>
      <Div2>
        <NavLink>Hosting</NavLink>
        <NavLink>VPS</NavLink>
        <NavLink>Domain</NavLink>
        <NavLink>Website</NavLink>
        <NavLink>Kemitraan</NavLink>
        <NavLink>Wawasan</NavLink>
        <NavLink>Acara</NavLink>
      </Div2>
      <Div3>
        <Image src="/cart.svg" alt="Cart Icons" width={18} height={19} />
        <LanguageSelector>
          <Language>ID</Language>
          <Image
            src="/Chevron-down.svg"
            alt="Cart Icons"
            width={10.54}
            height={6.25}
          />
        </LanguageSelector>
        <BtnLogin>Login</BtnLogin>
      </Div3>
    </Navbar>
    <Menu>
      <MenuItem>
        <MenuItemLink>Tutorial</MenuItemLink>
        <Image
          src="/Chevron-down.svg"
          alt="Cart Icons"
          width={10.54}
          height={6.25}
        />
      </MenuItem>
      <MenuItem>
        <MenuItemLink>Digital Marketing</MenuItemLink>
        <Image
          src="/Chevron-down.svg"
          alt="Cart Icons"
          width={10.54}
          height={6.25}
        />
      </MenuItem>
      <MenuItem>
        <MenuItemLink>Web Development & Design</MenuItemLink>
        <Image
          src="/Chevron-down.svg"
          alt="Cart Icons"
          width={10.54}
          height={6.25}
        />
      </MenuItem>
      <MenuItem>
        <MenuItemLink>Insight Bisnis</MenuItemLink>
        <Image
          src="/Chevron-down.svg"
          alt="Cart Icons"
          width={10.54}
          height={6.25}
        />
      </MenuItem>
      <MenuItem>
        <MenuItemLink>News & Updates</MenuItemLink>
        <Image
          src="/Chevron-down.svg"
          alt="Cart Icons"
          width={10.54}
          height={6.25}
        />
      </MenuItem>
    </Menu>
    <Hero>
      <HeroTitle>
        Dapatkan Artikel <br />
        Tutorial Hosting <br />
        Terbaik Disini
      </HeroTitle>
      <HeroSubTitle>
        Temukan artikel berisi solusi terbaik untuk segala permasalahan Anda
      </HeroSubTitle>
    </Hero>
  </Container>
);

export default Header;

import styled from "styled-components";

export const Container = styled.div`
  background: url("header.svg"),
    linear-gradient(249.77deg, #0094ff -1.99%, #007aff 43.52%, #026ce8 95.86%),
    linear-gradient(0deg, #f0f7ff, #f0f7ff);
`;

export const Navbar = styled.div`
  padding: 22px;

  display: flex;
  justify-content: space-around;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(0, 87, 178, 1);
  padding: 12px;
`;

export const MenuItemLink = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-right: 8.75px;
  color: #fff;
  cursor: pointer;
`;

export const MenuItem = styled.div`
  color: white;
  font-size: 16px;
  line-height: 24px;
  letter: 0.5%;
  font-weight: 600;
  margin-right: 40px;
  cursor: pointer;
  align-items: center;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 180px;
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 16px;
  line-height: 24px;
  margin-right: 40px;
  color: #fff;
  cursor: pointer;
`;

export const Div3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 16px;
`;

export const Language = styled.div`
  margin-right: 5px;
`;

export const LanguageSelector = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BtnLogin = styled.button`
  width: 85px;
  height: 36px;
  border: 1px solid #fff;
  background: none;
  color: white;
  border-radius: 24px;
`;

export const Hero = styled.div`
  /* background: url("header2.svg"),
    linear-gradient(249.77deg, #0094ff -1.99%, #007aff 43.52%, #026ce8 95.86%),
    linear-gradient(0deg, #f0f7ff, #f0f7ff); */
  text-align: center;
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 56px;
  line-height: 64px;

  font-weight: 700;
`;

export const HeroSubTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #f5faff;
`;

export const SearchDiv = styled.div`
  padding-bottom: 78px;
  margin-top: 60px;
`;

export const Search = styled.div`
  margin: 0 auto;
  display: flex;

  width: 540px;
  height: 48px;
  border-radius: 30px;
  align-items: center;
  padding: 0;
  padding-left: 12px;
  padding-right: 20px;
  align-items: center;
  border: 1px solid rgba(0, 24, 51, 0.16);
  background: #fff;
  color: #a9afb8;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  border: none;
  outline: none;
`;

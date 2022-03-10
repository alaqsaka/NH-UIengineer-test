import styled from "styled-components";

export const NavLink = styled.a`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-align: left;
  color: rgba(0, 122, 255, 1);
  cursor: pointer;
`;

export const NavLinkDisabled = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-align: left;
  color: rgba(84, 96, 113, 1);
`;

export const Container = styled.div`
  text-align: left;
  align-items: center;
  display: flex;
  gap: 6px;
`;

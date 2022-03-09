import react from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Search(props) {
  console.log(props);
  const icon = props.icon;
  const SearchDiv = styled.div``;

  const Search = styled.div`
    display: flex;

    width: 336px;
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
  `;

  const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: none;
    outline: none;
  `;

  return (
    <SearchDiv>
      <Search>
        <SearchInput placeholder={props.placeholder} />
        {icon && (
          <Image
            src="/search-icon.svg"
            width={24}
            height={24}
            layout=""
            alt="Search icon"
          ></Image>
        )}
      </Search>
    </SearchDiv>
  );
}

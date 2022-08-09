import { faAngleUp, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 9999;
  overflow: hidden;
`;
const Wrap = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 80px;
  background-color: rgba(255, 255, 255, 1);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  transition: 0.5s;
`;

const MenuWrap = styled.ul`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Menu = styled.li`
  a {
    font-size: 22px;
    font-weight: 600;
    color: black;
  }
  &:hover {
    a {
      color: #13a1dc;
    }
  }
`;
const Button = styled.div`
  width: 50%;
  height: 15%;
  margin: 0 auto;
  background-color: #1d1d1d;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  text-align: center;
  cursor: pointer;
`;

const Icon = styled.div`
  margin: 0 auto;
  height: 80px;
  width: 50px;
  font-size: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

export const Header = () => {
  const [position, setPosition] = useState("-80px");
  return (
    <SHeader>
      <Wrap
        style={{
          transform: `translateY(${position})`,
        }}
      >
        <MenuWrap>
          <Menu>
            <Link to="/">홈</Link>
          </Menu>
          <Menu>
            <Link to="profile">프로필</Link>
          </Menu>
          <Menu>
            <Link to="/">포트폴리오</Link>
          </Menu>
          <Menu>
            <Link to="/">토이프로젝트</Link>
          </Menu>
          <Menu>
            <Link to="/">소통하는 개발자</Link>
          </Menu>
        </MenuWrap>
        <Button
          onClick={() => {
            setPosition("-80px");
          }}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </Button>
      </Wrap>
      <Icon
        onClick={() => {
          setPosition("0");
        }}
        style={{
          transform: `translateY(${position})`,
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </Icon>
    </SHeader>
  );
};

import React from "react";
import styled from "styled-components";
import LogoImg from "../images/logo.svg";
import HomeIcon from "../images/home-icon.svg";
import SearchIcon from "../images/search-icon.svg";
import WatchListIcon from "../images/watchlist-icon.svg";
import OriginalsIcon from "../images/original-icon.svg";
import MoviesIcon from "../images/movie-icon.svg";
import SeriesIcon from "../images/series-icon.svg";
import UserImage from "../images/user-image.jpg";

import { selectUserName, selectUserPhoto } from "../features/user/userSlice";
import { useSelector } from "react-redux";

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const signIn = () => {
    //add sign in functionality here
  };

  return (
    <Nav>
      <Logo src={LogoImg} />

      {!userName ? (
        <LoginContainer>
          <Login>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src={HomeIcon}></img>
              <span>HOME</span>
            </a>
            <a>
              <img src={SearchIcon}></img>
              <span>SEARCH</span>
            </a>
            <a>
              <img src={WatchListIcon}></img>
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src={OriginalsIcon}></img>
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src={MoviesIcon}></img>
              <span>MOVIES</span>
            </a>
            <a>
              <img src={SeriesIcon}></img>
              <span>SERIES</span>
            </a>
          </NavMenu>

          <UserImg src="https://lh3.googleusercontent.com/a-/AOh14ghPEWpoUbB_IZyXZnBokOFaXzn0RKzgXo7jfxxBGQ=s96-c" />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;

        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

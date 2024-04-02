import React from "react";
import styled, { keyframes } from "styled-components";
import { FaHeart } from "react-icons/fa";


const heartbeat = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const HeartbeatHeart = styled(FaHeart)`
  animation: ${heartbeat} 1.4s infinite;
`;

const FooterMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 60px;
  background-color: #303030;
  margin-top: -60px;

  @media (max-width: 1000px) {
    height: 40px;
    margin-top: -40px;
  }
`;

const Footerdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #fff;

  svg {
    color: #d31212;
  }

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const FooterText = styled.p`
  padding: 0px 6px;
`;

const FooterLink = styled.a`
  cursor: pointer;
  color: #152ea6;
  font-weight: bold;
  font-size: 26px;
  transition: 0.4s color;

  &:hover {
    color: #F0F0F0;
  }

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;


const Footer: React.FC = () => {
    return (
        <FooterMain>
            <Footerdiv>
                <FooterText>{"Feito com"}</FooterText>
                <HeartbeatHeart size={22} />
                <FooterText>{"por"}</FooterText>
                <FooterLink>{"Danielcsxx"}</FooterLink>
            </Footerdiv>
        </FooterMain>
    )
}

export default Footer;
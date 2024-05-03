import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FaRegFilePdf, FaRegUser } from "react-icons/fa";
import BaseContent from "./BaseContent";
import Typed from "typed.js";


const ContentHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 22px;
  width: 720px;
  height: 280px;

  @media (max-width: 1000px) {
    width: auto;
    height: auto;
  }
`;

const ContentInfos = styled.div`
  text-align: left;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  line-height: 1.2;
  margin-bottom: 12px;

  @media (max-width: 1000px) {
    font-size: 22px;
  }
`;

const TypedContent = styled.div`
  display: inline;
  flex-direction: row;
  align-items: center; 
  margin-bottom: 32px;
  font-size: 32px;
  font-weight: bold;
  height: 52px;
  color: #152ae6;

  @media (max-width: 1000px) {
    font-size: 22px;
  }
`;

const ContentBtn = styled.div`
  margin-top: 64px;  
`;

const BtnContact = styled.a`
  color: #FFF;
  font-weight: bold;
  border-radius: 6px;
  border: 2px solid #FFF;
  padding: 12px;
  margin-right: 22px;
  transition: all .6s ease;

  &:hover{
    background-color: #F5FFFA;
    color: #515151;
    border: 2px solid #152ae6;
    box-shadow: 0 0 62px 10px #152ae6;

  }

  &:hover svg{
    color: #152ae6;
  }

  svg{
    margin: 0px 6px -2px 8px;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
    border: 2px solid #152ae6;
    box-shadow: 0 0 62px 10px #152ae6;

    svg{
      height: 22px;
      width: 22px;
    }
  }
`;

const BtnDownload = styled.a`
  color: #FFF;
  font-weight: bold;
  border-radius: 6px;
  border: 2px solid #FFF;
  padding: 12px;
  margin-right: 22px;
  transition: all .6s ease;

  &:hover{
    background-color: #F5FFFA;
    color: #515151;
    border: 2px solid #DE2429;
    box-shadow: 0 0 62px 10px #DE2429;
  }

  &:hover svg{
    color: #DE2429;
  }

  svg{
    margin: 0px 6px -4px 8px;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
    border: 2px solid #DE2429;
    box-shadow: 0 0 62px 10px #DE2429;

    svg{
      height: 22px;
      width: 22px;
    }
  }
`;

const CubeContainer = styled.div`
  width: 100px;
  height: 120px;
  perspective: 400px;
  transform: translateY(-160%);
  margin-left: calc(120px + 100%);

  @media (max-width: 1000px){
    width: 100px;
    height: 100px;
    perspective: 600px;
    transform: translateY(-160%);
    margin-left: 36%;
    margin-top: -212px;
  }
`;

const CubeFace = styled.div`
  position: absolute;
  width: 100%;
  height: 120%;
  opacity: 1;
  border: 2px solid #FFF;
  box-shadow: 0 0 62px 10px #152ae6;

  &:hover{
  }
  
  @media (max-width: 1000px){
    width: 100%;
    height: 100%;
  }
`;

const CubeFace1 = styled(CubeFace)`
  transform: rotateX(90deg) translateZ(50px);
`;

const CubeFace2 = styled(CubeFace)`
  transform: rotateX(-90deg) translateZ(50px);
`;

const CubeFace3 = styled(CubeFace)`
  transform: translateZ(50px);
`;

const CubeFace4 = styled(CubeFace)`
  transform: rotateY(90deg) translateZ(50px);
`;

const CubeFace5 = styled(CubeFace)`
  transform: rotateY(-90deg) translateZ(50px);
`;

const CubeFace6 = styled(CubeFace)`
  transform: rotateY(180deg) translateZ(50px);
`;

const RotateAnimation = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: ${RotateAnimation} 7s linear infinite;
`;

const Home: React.FC = () => {
  const typed = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typed.current) {
      const typedContent = new Typed(typed.current, {
        strings: [
          "Desenvolvedor Front-end",
          "Desenvolvedor de Software",
          "Desenvolvedor Freelance",
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: "_",
        smartBackspace: false
      });

      return () => {
        typedContent.destroy();
      };
    }
  }, []);

  return (
    <BaseContent id="Home">
      <ContentHome>
        <ContentInfos>
          <Title>{"Olá, Sou o Daniel C. Soares"}</Title>
          <TypedContent ref={typed}></TypedContent>
        </ContentInfos>
        <ContentBtn>
          <BtnContact href="#Contact">
            {"Contato"}
            <FaRegUser size={26} />
          </BtnContact>
          <BtnDownload
            href="https://drive.google.com/file/d/1YefIwnzoQArtbAMVVLHvGC5xnDYmNCP_/view?usp=drive_link"
            target="_blank"
          >
            {"Download"}
            <FaRegFilePdf size={28} />
          </BtnDownload>
        </ContentBtn>
        <CubeContainer>
          <Cube>
            <CubeFace1 />
            <CubeFace2 />
            <CubeFace3 />
            <CubeFace4 />
            <CubeFace5 />
            <CubeFace6 />
          </Cube>
        </CubeContainer>
      </ContentHome>
    </BaseContent>
  )
}

export default Home;
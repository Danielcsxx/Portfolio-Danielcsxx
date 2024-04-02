import React from "react";
import BaseContent from "./BaseContent";
import styled from "styled-components";
import FotoPerfil from "../pictures/FotoPerfil.jpeg";


const ContentMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Title = styled.h1`
    width: 400px;
    font-size: 32px;
    display: flex;
    justify-content: center;
    margin-bottom: 32px;

    @media (max-width: 1000px) {
        width: 100%;
        display: flex;
        justify-content: center;    
    }
`;

const DetailTitle = styled.p`
    color: #152ae6;
    width: 48px;
`;

const ContentText = styled.div`
    width: 400px;
    margin-top: 16px;
    display: flex;
    font-size: 16px;
    letter-spacing: 1.4px;
    text-align: justify;

    @media (max-width: 1000px) {
        font-size: 14px;
    }
`;

const ImageProfile = styled.img`
    max-width: 400px;
    max-height: 480px;
    margin-right: 20px;
    width: 100%;
    height: auto;
    border-radius: 4%;
    object-fit: cover;
    transition: 0.4s ease-out;

    @media (max-width: 1000px) {
        max-width: 300px;
        max-height: 440px;
        margin-left: auto;
    }

    @media (max-width: 800px) {
        display: none;
    }
`;

const AboutMe: React.FC = () => {
    return (
        <BaseContent id="Aboutme">
            <Title><DetailTitle>-</DetailTitle>{"Sobre Mim"}<DetailTitle>-</DetailTitle></Title>
            <ContentMain>
                <ContentText>
                    Minha paixão pela tecnologia foi um dos principais motivos que me
                    ajudou a realizar a minha transição de carreira, deixando 
                    recentemente a área Técnica Industrial para ingressar 100% no mundo da
                    tecnologia, mais precisamente no Desenvolvimento de Softwares.
                    <br /><br />
                    Sou adpeto a aprendizagem contínua. Constantemente, desenvolvo 
                    projetos pessoais com o intuito de evoluir e aprimorar o meu conhecimento 
                    pessoal e também oferecer as melhores soluções possíveis no desenvolvimento de software.
                    <br /><br />
                    Atualmente, estou cursando Análise e Desenvolvimento de Sistemas
                    pela Uniasselvi e estudando por meio de cursos particulares
                    adquiridos na RockeSeat, ORIGAMID e Udemy, onde adquiro novos
                    conhecimentos e habilidades, seja por meio das atividades práticas, 
                    como também contribuindo com conhecimento em grupos de estudos no Discord.
                </ContentText>
                <ImageProfile src={FotoPerfil} alt="Profile photo Danielcsxx" />
            </ContentMain>
        </BaseContent>
    )
}

export default AboutMe;
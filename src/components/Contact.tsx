import React from "react";
import BaseContent from "./BaseContent";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaHome, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";


const ContactDivMain = styled.div`
    
    @media (max-width: 1000px) {
        height: 0vh;
    }
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    width: 400px;
    font-size: 32px;
    margin-top: 42px;
    margin-bottom: 42px;

    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;    
        width: 100%;
        margin-top: 82px;
        margin-bottom: -40px;
    }
`;

const DetailTitle = styled.p`
    color: #152ae6;
    width: 48px;
`;

const ContactMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 72px;

    @media (max-width: 1000px) {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 62px;
    }
`;

const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px;
    
    @media (max-width: 1000px) {
        margin-top: 32px;
    }
`;

const ContactText = styled.p`
    width: 400px;
    margin-bottom: 22px;
    font-size: 16px;
    letter-spacing: 1.4px;
    text-align: justify;

    @media (max-width: 1000px) {
        width: 100%;
        margin-bottom: -22px;
        font-size: 14px;
    }
`;

const ContactMainInfos = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 4px;
    gap: 10px;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const ContactIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 2px solid #FFF;
    border-radius: 8px;
    box-shadow: 0 0 26px 6px #152ae6;
`;

const ContactDivInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 6px;
`;

const ContactTitle = styled.h3`
`;

const ContactSubtitle = styled.h4`
    color: #152ae6;
    font-weight: bold;
    font-size: 16px;
`;

const ContatcBtnsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin-top: 64px;

    @media (max-width: 1000px) {
        width: 100%;
        font-size: 14px;
    }
`;

const ContatctBtnGit = styled.a`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 132px;
    padding: 8px;
    cursor: pointer;
    color: #F0F0F0;
    border: 2px solid #FFF;
    border-radius: 6px;
    transition: all 0.6s;

    &:hover{
        background-color: #5C6BC0;
        box-shadow: 0 0 26px 6px #5C6BC0;
    }
`;

const ContatctBtnIn = styled.a`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 132px;
    padding: 8px;
    cursor: pointer;
    color: #F0F0F0;
    border: 2px solid #FFF;
    border-radius: 6px;
    transition: all 0.6s;

    &:hover{
        background-color: #0A66C2;
        box-shadow: 0 0 26px 6px #0A66C2;
    }
`;


const Contact: React.FC = () => {

    return (
        <BaseContent id="Contact">
            <ContactMain>
                <ContactDivMain>
                    <Title><DetailTitle>-</DetailTitle>{"Contato"}<DetailTitle>-</DetailTitle></Title>
                    <ContactDiv>
                        <ContactText>
                            {`Estes são os meus principais meios de contato ou se preferir
                             utilize este formulário para me enviar uma mensagem e deixar o
                            seu contato.`}
                        </ContactText>
                        <ContactMainInfos>
                            <ContactIcon>
                                <FaHome size={22} />
                            </ContactIcon>
                            <ContactDivInfos>
                                <ContactTitle>{"Localização"}</ContactTitle>
                                <ContactSubtitle>{"E.S-Serra"}</ContactSubtitle>
                            </ContactDivInfos>
                        </ContactMainInfos>
                        <ContactMainInfos>
                            <ContactIcon>
                                <FaWhatsapp size={22} />
                            </ContactIcon>
                            <ContactDivInfos>
                                <ContactTitle>{"Whattsapp"}</ContactTitle>
                                <ContactSubtitle>{"(27) 9 8877-3797"}</ContactSubtitle>
                            </ContactDivInfos>
                        </ContactMainInfos>
                        <ContactMainInfos>
                            <ContactIcon>
                                <FaEnvelope size={22} />
                            </ContactIcon>
                            <ContactDivInfos>
                                <ContactTitle>{"Email"}</ContactTitle>
                                <ContactSubtitle>{"Devcoelhoxx@gmail.com"}</ContactSubtitle>
                            </ContactDivInfos>
                        </ContactMainInfos>
                        <ContatcBtnsDiv>
                            <ContatctBtnGit href="https://github.com/danielcsxx" target="_blank">{"Github"}<FaGithub size={20} /></ContatctBtnGit>
                            <ContatctBtnIn href="https://linkedin.com/in/danielcsxx" target="_blank">{"Linkedin"}<FaLinkedin size={20} /></ContatctBtnIn>
                        </ContatcBtnsDiv>
                    </ContactDiv>
                </ContactDivMain>
                <ContactForm />
            </ContactMain>
        </BaseContent >
    )
}

export default Contact;
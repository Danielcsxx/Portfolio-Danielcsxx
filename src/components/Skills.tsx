import React, { useState } from "react";
import BaseContent from "./BaseContent";
import styled from "styled-components";

import javascript from "../icons/javascript.svg";
import html5 from "../icons/html5.svg";
import css3 from "../icons/css3.svg";
import react from "../icons/react.svg";
import typescript from "../icons/typescript.svg";
import styledComponents from "../icons/styledComponents.svg";
import sass from "../icons/sass.svg";
import bootstrap from "../icons/bootstrap.svg";
import nodejs from "../icons/nodejs.svg";
import postgresql from "../icons/postgresql.svg";
import mysql from "../icons/mysql.svg";
import postman from "../icons/postman.svg";
import git from "../icons/git.svg";
import github from "../icons/github.svg";
import npm from "../icons/npm.svg";
import yarn from "../icons/yarn.svg";
import vscode from "../icons/vscode.svg";
import figma from "../icons/figma.svg";
import jira from "../icons/jira.svg";
import notepad from "../icons/notepadd++.svg";

import { FaLaptop, FaBrain } from "react-icons/fa";

const ContentMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    width: 400px;
    font-size: 32px;
    margin-bottom: 32px;

    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;    
        width: 100%;
    }
`;

const DetailTitle = styled.p`
    color: #152ae6;
    width: 48px;
`;

const ContentInfoSkills = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;

    @media (max-width: 1000px) {
        margin-bottom: 52px;
    }
`;

const MainSkills = styled.div`
    width: 50%;
    padding: 42px;
    margin-right: 56px;

    @media (max-width: 1000px) {
        width: 60%;
        padding: 0px;
        margin-right: 0px;
    }

    @media (max-width: 900px) {
        width: 60%;
    }

    @media (max-width: 740px) {
        width: 80%;
    }

    @media (max-width: 400px) {
        width: 100%;
    }
`;

const ContentCardSkills = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 322px;
    gap: 16px;

    @media (max-width: 1000px) {
        height: 242px;
        gap: 12px;
    }
`;

const InfoSkills = styled.p`
    font-size: 16px;
    letter-spacing: 1.6px;
    text-align: justify;

    @media (max-width: 1000px) {
        padding: 22px;
        font-size: 14px;
    }
`;

const HardSkillsCards = styled.img`
    background: #303030;
    width: 70px;
    height: 70px;
    padding: 8px;
    border-radius: 4px;
    border: 2px solid #FFF;
    cursor: pointer;
    transition: all .2s ease;

    &:hover{
        color: #FFF;
        background: #FFF;
        border: 2px solid #152ae6;
        box-shadow: 0 0 42px 10px #152ae6;
        transform: scale(1.2);
    }

    @media (max-width: 1000px) {
        padding: 6px;
        width: 52px;
        height: 52px;
    }
`;

const SoftSkillsCards = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 142px;
    height: 50px;
    font-weight: bold;
    letter-spacing: 1.2px;
    background: #303030;
    border-radius: 4px;
    border: 2px solid #FFF;
    cursor: pointer;
    // transition: color .2s ease, background .2s ease,border .2s ease;

    &:hover{
        color: #111;
        background: #FFF;
        border: 2px solid #152ae6;
        box-shadow: 0 0 42px 10px #152ae6;
        transform: scale(1.1);
    }

    @media (max-width: 1000px) {
        margin-top: -4px;
        width: 114px;
        height: 36px;
        font-size: 14px;

        &:hover{
            color: #111;
            font-weight: bold;
            background: #FFF;
            border: 2px solid #152ae6;
            transform: scale(1);
        }
    }
`;

const SkillsMain = styled.div`
    display: flex;
    justify-content: center;
    width: 400px;
`;

const ButtonToggleSkills = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 50px;
    margin-top: 32px;
    padding: 12px;
    cursor: pointer;
    color: #F0F0F0;
    background-color: #0A66C2;
    border-radius: 8px;
    border: 2px solid #FFF;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover{
        color: #0A66C2;
        background-color: #F0F0F0;
    
        border: 2px solid #152ae6;
        box-shadow: 0 0 42px 12px #152ae6;

        transform: scale(1.1);

    }
`;

const SkillName = styled.p`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-right: 12px;
`;

const Skills: React.FC = () => {

    const [showSkills, setShowSkills] = useState(true);

    const toggleSkills = () => {
        setShowSkills(!showSkills);
    }

    const skillsData = [
        { type: "hard", name: "JavaScript", src: javascript },
        { type: "hard", name: "HTML5", src: html5 },
        { type: "hard", name: "CSS3", src: css3 },
        { type: "hard", name: "CSS3", src: react },
        { type: "hard", name: "CSS3", src: typescript },
        { type: "hard", name: "CSS3", src: styledComponents },
        { type: "hard", name: "CSS3", src: sass },
        { type: "hard", name: "CSS3", src: bootstrap },
        { type: "hard", name: "CSS3", src: nodejs },
        { type: "hard", name: "CSS3", src: postgresql },
        { type: "hard", name: "CSS3", src: mysql },
        { type: "hard", name: "CSS3", src: postman },
        { type: "hard", name: "CSS3", src: git },
        { type: "hard", name: "CSS3", src: github },
        { type: "hard", name: "CSS3", src: npm },
        { type: "hard", name: "CSS3", src: yarn },
        { type: "hard", name: "CSS3", src: vscode },
        { type: "hard", name: "CSS3", src: figma },
        { type: "hard", name: "CSS3", src: jira },
        { type: "hard", name: "CSS3", src: notepad },
        { type: "soft", name: "Organizado" },
        { type: "soft", name: "Comunicativo" },
        { type: "soft", name: "Responsável" },
        { type: "soft", name: "Criativo" },
        { type: "soft", name: "Esforçado" },
        { type: "soft", name: "Persistente" },
        { type: "soft", name: "Resoluto" },
        { type: "soft", name: "Educado" },
        { type: "soft", name: "Versátil" },
        { type: "soft", name: "Proativo" },
        { type: "soft", name: "Colaborativo" },
        { type: "soft", name: "Adaptável" },
        { type: "soft", name: "Resiliente" },
        { type: "soft", name: "Flexível" },
        { type: "soft", name: "Analítico" },
    ];

    return (
        <BaseContent id="Skills">
            <Title><DetailTitle>-</DetailTitle>{"Habilidades"}<DetailTitle>-</DetailTitle></Title>
            <ContentMain>
                <ContentInfoSkills>
                    <InfoSkills>
                        Aqui estão as minhas principais habilidades Profissionais e Pessoais
                        que possuo até o momento.
                        < br />
                        Habilidades Profissionais estas que adquiri com o desenvolvimento do
                        código na prática em si e com as experiências profissionais.
                        < br />
                        E também minhas principais Habiliades Pessoais que possuo.
                    </InfoSkills>
                    <SkillsMain>
                        <ButtonToggleSkills onClick={toggleSkills}>
                            {showSkills ?
                                <><SkillName>{"Pessoais"}</SkillName><FaBrain size={32} /></> :
                                <><SkillName>{"Profissionais"}</SkillName><FaLaptop size={32} /></>}
                        </ButtonToggleSkills>
                    </SkillsMain>
                </ContentInfoSkills>
                <MainSkills>
                    <ContentCardSkills>
                        {skillsData.filter((skill) => (showSkills ? skill.type === "hard" : skill.type === "soft"))
                            .map((skill, index) => skill.type === "hard" ?
                                (<HardSkillsCards key={index} src={skill.src} />) :
                                (<SoftSkillsCards key={index}>{skill.name}</SoftSkillsCards>)
                            )
                        }
                    </ContentCardSkills>
                </MainSkills>
            </ContentMain>
        </BaseContent>
    )
}

export default Skills;
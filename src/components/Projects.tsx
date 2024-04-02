import React, { useState } from "react";
import BaseContent from "./BaseContent";
import styled from "styled-components";
import { FaChevronRight, FaChevronLeft, FaGithub, FaLink } from 'react-icons/fa';
import supermarkList from "../images/SupermarkList01.png";
import primeFlix from "../images/PrimeFLix01.png";
import devInfos from "../images/DevInfos01.png";
import calculadoraIMC from "../images/CalculadoraIMC01.png";


const MainProjects = styled.div`
    width: 100%;
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    width: 400px;
    font-size: 32px;
    margin-bottom: 80px;

    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;  
        width: 100%;
        margin-top: 72px;  
        margin-bottom: 22px;
    }
`;

const DetailTitle = styled.p`
    color: #152ae6;
    width: 48px;
`;

const ContentProjects = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`;

const ProjectsBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
    padding: 22px;
    margin: 12px;
    border: 2px solid #fff;
    border-radius: 6px;
    box-shadow: 0 0 102px 14px #152ae6;
    background-color: #303030;
    transition: all .4s ease-in;

    @media (max-width: 1000px) {
        width: auto;
        margin: 0;
        border: 2px solid #F0FF0;
        box-shadow: 0 0 62px 14px #152ae6;
    }
`;

const ProjectAbout = styled.div`
    padding: 4px;
`;

const ProjectTitle = styled.h3`
    display: flex;
    justify-content: center;
    margin-top: 22px;
    margin-bottom: 22px;
`;

const ProjectInfos = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`;

const ProjectImg = styled.img`
    width: 320px;
    height: 300px;
    border-radius: 4px;

    @media (max-width: 1000px) {
        width: 220px;
        height: 200px;
    }
`;

const ProjectResume = styled.div`
    max-width: 300px;
    margin: 0 33px;
`;

const ProjectTextInfo = styled.p`
    height: 166px;
    font-size: 16px;
    letter-spacing: 1.6px;
    text-align: justify;

    @media (max-width: 1000px) {
        height: 122px;
        font-size: 14px;
        letter-spacing: 1.4px;
    }
`;

const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
`;

const ProjectNextBtn = styled.button`
    border: none;
    cursor: pointer;
    color: #152ae6;
    background-color: transparent;
    transition: color .4s ease;

    &:hover{
        color: #FFFFF0;
    }

    @media (max-width: 1000px){
        color: #FFFFF0;
        margin-top: 14px;
        svg {
            width: 32px;
            height: 32px;
        }
    }
`;

const ProjectPrevBtn = styled.button`
    border: none;
    cursor: pointer;
    color: #152ae6;
    background-color: transparent;
    transition: color .4s ease;

    &:hover{
        color: #FFFFF0;
    }

    @media (max-width: 1000px){
        color: #FFFFF0;
        margin-bottom: 14px;

        svg {
            width: 32px;
            height: 32px;
        }    
    }
`;

const ContatctBtnGit = styled.a`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 110px;
    cursor: pointer;
    padding: 8px;
    color: #F0F0F0;
    border: 2px solid #FFF;
    border-radius: 6px;
    transition: all 0.6s ease;

    &:hover{
        background-color: #5C6BC0;
        box-shadow: 0 0 26px 8px #5C6BC0;
    }
`;

const ContatctBtnLink = styled.a`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 110px;
    cursor: pointer;
    padding: 8px;
    color: #F0F0F0;
    border: 2px solid #FFF;
    border-radius: 6px;
    transition: all 0.6s ease;

    &:hover{
        background-color: #32E6E2;
        box-shadow: 0 0 26px 4px #32E6E2;
    }
`;


const Projects: React.FC = () => {

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const projects = [
        {
            name: "SuperMarkList",
            img: supermarkList,
            resume: `O SuperMarkerList nasceu e foi desenvolvido com o objetivo de 
            simplificar o gerenciamento de listas de compras de supermercado 
            e aprimorar o controle dos gastos.`,
            githubLink: "https://github.com/Danielcsxx/Supermarkerlist",
            deployLink: "https://supermarklist.netlify.app/"
        },
        {
            name: "PrimeFlix",
            img: primeFlix,
            resume: `O PrimeFlix lista o Top 10 dos filmes mais atuais que estão em cartaz nos cinemas, 
             com a possibilidade de adicionar filmes em seus favoritos e acessar as informações
             individuais de cada filme.`,
            githubLink: "https://github.com/Danielcsxx/PrimeFlix",
            deployLink: "https://primeflixfilmes.netlify.app/"
        },
        {
            name: "DevInfos",
            img: devInfos,
            resume: `Esta Landing Page foi o primeiro projeto que desenvolvi para colocar em pratica 
            meus estudos com HTML, CSS e JS. Contém informações estáticas porém reais de 
            acordo com a data em que foram obtidas.`,
            githubLink: "https://github.com/Danielcsxx/Landing-Page-Dev-Infos",
            deployLink: "https://devinfos.netlify.app/"
        },
        {
            name: "Calculadora de IMC",
            img: calculadoraIMC,
            resume: `Calcule o seu IMC de uma forma simples e rápida agora mesmo. Este projeto 
            se trata de uma ferramenta simples, mas poderosa, que poderá ajudá-lo(a) a obter 
            informações relacionadas ao seu IMC atual.`,
            githubLink: "https://github.com/Danielcsxx/CalculadoraIMC",
            deployLink: "https://calculaomeuimc.netlify.app/"
        }
    ];

    const nextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProjectIndex((prevIndex) => prevIndex === 0 ? projects.length - 1 : prevIndex - 1);
    }

    return (
        <BaseContent id="Projects">
            <Title><DetailTitle>-</DetailTitle>Projetos<DetailTitle>-</DetailTitle></Title>
            <MainProjects>
                <ContentProjects>
                    <ProjectPrevBtn onClick={prevProject}><FaChevronLeft size={42} /></ProjectPrevBtn>
                    <ProjectsBox>
                        <ProjectAbout>
                            <ProjectInfos>
                                <ProjectImg src={projects[currentProjectIndex].img} />
                                <ProjectResume>
                                    <ProjectTitle>
                                        {projects[currentProjectIndex].name}
                                    </ProjectTitle>
                                    <ProjectTextInfo>
                                        {projects[currentProjectIndex].resume}
                                    </ProjectTextInfo>
                                    <ProjectLinks>
                                        <ContatctBtnGit href={projects[currentProjectIndex].githubLink} target="_blank">{"Github"}<FaGithub size={20} /></ContatctBtnGit>
                                        <ContatctBtnLink href={projects[currentProjectIndex].deployLink} target="_blank">{"Deploy"}<FaLink size={20} /></ContatctBtnLink>
                                    </ProjectLinks>
                                </ProjectResume>
                            </ProjectInfos>
                        </ProjectAbout>
                    </ProjectsBox>
                    <ProjectNextBtn onClick={nextProject}><FaChevronRight size={42} /></ProjectNextBtn>
                </ContentProjects>
            </MainProjects>
        </BaseContent>
    )
}

export default Projects;
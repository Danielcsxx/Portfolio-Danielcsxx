import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import styled from 'styled-components';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  z-index: 2;
  transition: all 0.3s ease;  

  &.HeaderFix { 
    background-color: #303030;
    height: 72px;  
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between; 
  height: 100%;
  width: 100%;
  max-width: 1220px;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 32px;
  font-weight: bold;
  color: #152ae6;
  transition: all .4s ease;

  &:hover{
    color: #F9F6EE;
    text-shadow: 0 2px 42px #152ae6;
  }

  @media (max-width: 1000px) {
    font-size: 28px;
    font-weight: bold;
  }
`;

const NavbarList = styled.ul`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  position: absolute;
  z-index: 1;
  left: 0;
  margin: 0;
  background-color: #303030;

  &.isOpen {
    display: flex;
    margin-top: 0px;
    height: 100vh;
    width: 100vw;
    margin-top: 72px;
    overflow: hidden;
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    position: static;
    background-color: transparent;
    padding: 0;
  }
`;

const NavbarItem = styled.li`
  margin-bottom: 20px;

  @media (min-width: 1000px) {
    margin: 0 10px;
    margin-bottom: 0;
  }
`;

const NavbarLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: #FFF;
  cursor: pointer;
  position: relative;
  padding-bottom: 2px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0; 
    height: 2px; 
    background-color: #152ae6; 
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavbarActions = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 14px;

  @media (max-width: 1000px) {
    margin-left: auto;
    margin-right: 12px;
  }
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  color: #FFF;
  background-color: transparent;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const ContatctBtnGit = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 0 12px;
  color: #FFF;
  transition: color 0.6s;

    &:hover{
        color: #5C6BC0;
    } 
  
    &:hover::after {
      content: "Github";
      position: absolute;
      background: #5C6BC0;
      color: #fff;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 14px;
      margin-top: 66px;
      margin-left: -20px;
      z-index: 9;
      border: 2px solid #FFF; 
      box-shadow: 0 0 10px 6px #5C6BC0;
    }
`;

const ContatctBtnIn = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #FFF;
  margin: 0 12px;
  transition: color 0.6s;

    &:hover{
          color: #0A66C2;
      }

    &:hover::after {
      content: "Linkdin";
      position: absolute;
      background: #0A66C2;
      color: #fff;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 14px;
      margin-top: 66px;
      margin-left: -20px;
      z-index: 9;
      border: 2px solid #FFF; 
      box-shadow: 0 0 10px 6px #0A66C2;
    }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY >= 10) {
          headerRef.current.classList.add('HeaderFix');
        } else {
          headerRef.current.classList.remove('HeaderFix');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (isMenuOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer id="nav-header" ref={headerRef}>
      <Container>
        <Logo href="#Home">
          {'<Portfolio />'}
        </Logo>
        <NavbarList className={isMenuOpen ? 'isOpen' : ''}>
          <NavbarItem>
            <NavbarLink href="#Home" onClick={closeMenu}>{"Início"}</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#Aboutme" onClick={closeMenu}>{"Sobre mim"}</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#Skills" onClick={closeMenu}>{"Habilidades"}</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#Projects" onClick={closeMenu}>{"Projetos"}</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#Contact" onClick={closeMenu}>{"Contato"}</NavbarLink>
          </NavbarItem>
        </NavbarList>
        <NavbarActions>
          <ContatctBtnGit href="https://github.com/danielcsxx" target="_blank">
            <FaGithub size={28} />
          </ContatctBtnGit>
          <ContatctBtnIn href="https://linkedin.com/in/danielcsxx" target="_blank">
            <FaLinkedin size={28} />
          </ContatctBtnIn>
        </NavbarActions>
        <ToggleButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
        </ToggleButton>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
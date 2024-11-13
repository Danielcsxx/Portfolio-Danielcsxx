import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import styled from "styled-components";


const ButtonBackToTop = styled.button`
    position: fixed;
    bottom: 32px;
    right: 32px;
    padding: 10px;
    background-color: #0A66C2;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    transition: all .3s;

    &:hover{
        background-color: #007bff;
        box-shadow: 0 0 26px 6px #0A66C2;
    }

    @media (max-width: 1000px) {
    display: none;
  }

`;

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        isVisible && (
            <ButtonBackToTop onClick={scrollToTop}>
                <FaChevronUp size={20} />
            </ButtonBackToTop>
        )
    );
}

export default BackToTop;
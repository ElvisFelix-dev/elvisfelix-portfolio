import styled, { keyframes } from 'styled-components';
import { IoIosArrowDropdown } from 'react-icons/io';

// Container principal
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  position: relative;
  z-index: 100;
  background: transparent;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Div2 = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 1.7rem;
  color: rgba(255, 255, 255, 0.8);
  transition: 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

// Ícone do menu hambúrguer
export const MobileIcon = styled.div`
  display: none;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Animação do menu mobile
const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Menu mobile
export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    background: rgba(20, 20, 30, 0.98);
    padding: 1.5rem 2rem;
    border-radius: 12px;
    animation: ${slideDown} 0.3s ease forwards;
    gap: 1.2rem;

    a {
      font-size: 1.6rem;
      color: #fff;
      text-decoration: none;
      transition: 0.3s ease;

      &:hover {
        color: #61dafb;
      }
    }
  }
`;

export const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  color: white;
  border-radius: 50%;
  padding: 10px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
  }
`;

export const ContactDropDown = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  transition: 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

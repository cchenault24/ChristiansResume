import React, { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const StyledCard = styled.div`
  background: rgba(45, 55, 65, 0.95);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;

  // Add hover effect
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }
`;

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;

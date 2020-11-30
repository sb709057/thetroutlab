import React from 'react';
import { CardContainer } from '../../components/styles';

interface CardProps {
  text: string;
}

const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};

export default Card;

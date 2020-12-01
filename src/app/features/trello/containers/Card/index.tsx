import React from 'react';
import { CardContainer } from '../../components/styles';

interface CardProps {
  text: string;
  index: number;
}

const Card = ({ text, index }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};

export default Card;

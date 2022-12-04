import React from 'react';
import { CardStyle } from 'src/assets/styles/components/Card/Card.style';

interface propTypes {
  id: string;
  image: string;
}

const Card: React.FC<propTypes> = (props) => {

  const { id, image } = props;

  return (
    <CardStyle className="img-item">
      <img src={image} alt={`${image}`} />
    </CardStyle>
  );
};
export default Card;

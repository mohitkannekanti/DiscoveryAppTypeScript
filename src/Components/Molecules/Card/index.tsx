import React from 'react';
import Images from '../../Atoms/Images';

interface CardProps {
    cardImg: string;
    cardImgClass?: string;
    cardContent: string;
}

const Card: React.FC<CardProps> = ({ cardImg, cardImgClass, cardContent }) => {
    console.log(cardContent, "card atom")
    return (
        <div className="card-box">
            <Images imgSrc={cardImg} className={cardImgClass} />
            <div className="card-content">
                <span>{cardContent}</span>
            </div>
        </div>
    )
}
export default Card
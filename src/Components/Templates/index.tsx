import React from 'react';
import CardList from '../Organisms/CardList';
import Header from '../Organisms/header';

const templateData = {
    cardDataList: {
        cardImgs: ['adventure.jpg', 'animals.jpg', 'auto.jpg', 'food.jpg', 'nature.jpg'],
        cardContents: ['Adventures', 'Animals', 'Automotives', 'Food', 'Nature']
    }
}

const Template: React.FC = () => {
    return (
        <div className="template">
            <Header />
            {/* <CardList content={templateData.cardDataList} /> */}
        </div>
    )
}
export default Template
import React from 'react'
import Card from '../../Molecules/Card'

interface cardProps {
    content: string[];
}


const CardList: React.FC<cardProps> = ({ content }) => {
    console.log(content, "cardsList")
    return (
        <div className="card-box">
            {content && content.map((cData, index) => {
                <Card cardImg={cData} cardContent={cData} />
            })}
        </div>
    )
}
export default CardList
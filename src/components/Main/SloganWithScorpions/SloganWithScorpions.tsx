import * as React from 'react';
import './SloganWithScorpions.scss'

export const SloganWithScorpions: React.FC = () => {
    return (
        <div className="slogan-with-scorpions bordered flex">
            <img className="scorpion" src="/assets/images/vector/scorpion.svg" alt=""/>
            <h2 className="h2">THROW SOME LAVA IN YOUR JAVA</h2>
            <img className="scorpion scaleX" src="/assets/images/vector/scorpion.svg"
                 alt=""/>
        </div>
    )
}
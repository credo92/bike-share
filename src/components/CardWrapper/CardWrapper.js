import React from 'react';
import CardContainer from './CardContainer';
import Card from '../Card/Card';

function createCards(data){
    return data.map( (cityObj,i)=>
        <Card
        city={cityObj.city}
        bikes={cityObj.bikes}
        name={cityObj.name}
        spots={cityObj.spots}
        company={cityObj.company}
        key={cityObj.name+i}
        />
    )
}

const CardWrapper =({data})=>{
    return(
    <CardContainer>
      {createCards(data)}
    </CardContainer>
    )
}

export default CardWrapper;

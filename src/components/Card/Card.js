import React from 'react';
import CardDiv from './style';
import UL from '../UL/UL';

function getPercentage(bikes,spots){
    const percentage = Math.floor( (bikes/spots)*100 )
    return isNaN(percentage) ? 0 : percentage;
}

function createList(companies){
return companies.map( company=>
    <li>{company}</li>
    )
}

const Card =({city,bikes,name,spots,company})=>{
    const percentage = getPercentage(bikes,spots);
    const color = percentage < 25 ? '#CC2936':'#388697';
    const fontSize = '4em';

    return(
    <CardDiv>
        <div style={{textAlign:'center'}}>
            <h3>{city}</h3>
            
            <div style={{
                display:'inline', 
                marginLeft:10
            }}>
                Availability:
                
                {percentage>25 && 
                <>
                <span>&#128077;</span> 
                <span style={{fontSize,color:'#388697'}}>%{percentage}
                </span>
                </>
             }
                
                {percentage<25 && 
                <>
                <span>&#128078;</span> 
                <span style={{fontSize,color:'#CC2936'}}>%{percentage}
                </span>    
                </>
                }
            </div>            
        </div>
        <div>    
            <p style={{color}}>Companies: {bikes} bikes / {spots} spots</p>
            <UL>
                {createList(company)}
            </UL>
        </div>
    </CardDiv>)
}

export default Card;

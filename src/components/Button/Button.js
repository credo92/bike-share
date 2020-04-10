import React from 'react';
import Btn from './style';
import Image from '../Image/Image';

const Button = ({selected, countryCode,handleClick})=>{
    return (
    <Btn selected={selected===countryCode}
    onClick={()=>handleClick(countryCode)}
    >
        <Image
        countryCode={countryCode}
        />
    </Btn>)
}

export default Button;


import React from 'react';
import Img from './style';

const Image = ({countryCode})=>{
    const imgUrl = `https://www.countryflags.io/${countryCode}/flat/64.png`

    return <Img src={imgUrl}/>
}

export default Image;


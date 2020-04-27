import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getData } from "../actions";

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Button from '../components/Button/Button';
import Image from '../components/Image/Image';
import Loading from '../components/Loading/Loading';

import CardWrapper from '../components/CardWrapper/CardWrapper';

// TEST DATA - 
//LATER @TODO: Call API to fetch countries and filter on location
const COUNTRIES = [
    'us',
    'uy',
    'mx',
    'cl',
    'ca',
    'br',
    'ar',
    'co',
]
// TEST DATA

const AppContainer = ()=> {
    const [selected,setSelected] = useState('ca');
    const dispatch = useDispatch()

    const { data, loading, error } = useSelector(state => ({
        data: state.data,
        loading: state.loading,
        error: state.error,
      }));

    const setCountry = (selected) => {
        setSelected(selected);
    }
    const createButtons = () => {
        return COUNTRIES.map(country =>
            <Button
                key={country}
                countryCode={country}
                selected={selected}
                handleClick={handleClick}
            />)
    }
    
    const handleClick = (clickedCountry) => {
        setCountry(clickedCountry);
        dispatch(getData(clickedCountry));
    }
    
    useEffect( ()=>dispatch(getData(selected)),[selected]);

        return (
            <>
                <Header>
                    <Image countryCode={selected} />
                </Header>
                <Sidebar>
                    {createButtons()}
                </Sidebar>
                {loading && <Loading/>}
                {!loading &&
                    <CardWrapper
                        data={data}
                    />}
            </>
        )
}

export default AppContainer
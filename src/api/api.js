import axios from 'axios';

const BASE_URL =  'http://api.citybik.es';

function getBikeData(citiesData){
    const bikeData = citiesData.map(city => {
        let bikes =0;
        let spots =0;

        city.network.stations.forEach(station=>{
            bikes = bikes + station.free_bikes;
            spots = spots + station.empty_slots + station.free_bikes;
        })
    
        return({
            "company":city.network.company,
            "name": city.network.name,
            bikes,
            spots,
            "city":city.network.location.city
        });
    });
    return bikeData;
}

async function getCityData(cityUrl){
    const response =  await axios.get(`${cityUrl}`)
    return response.data;
}

function getAllCitiesData(countryNetworks){
    return Promise.all( 
            countryNetworks.map( network=>getCityData(`${BASE_URL+network.href}`))
        )
}

async function getCountryNetworks(countryName){
    const response = await axios.get(`${BASE_URL}/v2/networks`);
    const json = response.data;
    return json.networks.filter( (network)=>
      network.location.country.toLowerCase() 
            === countryName
    );
}

async function getBikeSharingData(countryName){
    const countryNetworks = await getCountryNetworks(countryName);
    const citiesData = await getAllCitiesData(countryNetworks);
    const bikeData = getBikeData(citiesData);
    return bikeData;
}

export default getBikeSharingData;
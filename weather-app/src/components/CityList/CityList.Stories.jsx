import React from 'react';
import CityList from './CityList';   

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city:"Buenos Aires", country:"Argentina"},
    {city:"Bogotá", country:"Colombia"},
    {city:"París",  country:"Francia"},
    {city:"Málaga", country:"España"},

]
export const CityListExample = () => <CityList cities={cities}/>
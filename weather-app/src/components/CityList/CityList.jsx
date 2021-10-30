import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";

//li: es un item (segun tag html, tiene el role "listitem") 
const renderCityAndCountry = cityAndCountry => {
  const { city, country } = cityAndCountry
  return (
    <li key={city}> 
      <Grid container
        justify="center"
        alignItems="center"
      > 
      </Grid>
    </li>
  );
};

//cities: es un array, y en cada item tiene que tener city y el country.
//ul: tag html para listas no ordenadas

const CityList = ({ cities }) => {
  return (
    <ul>
      {cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CityList;

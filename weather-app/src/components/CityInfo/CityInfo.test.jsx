import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo' //SUT: Subject under testing (objeto de testeo)

test("CityInfo render", async () => {
    //AA
    //Arrage
    //Act

    const city = "Malaga"
    const country = "España"

    //Render: renderiza el componenteby  y retorna una serie de funciones de utilidad
    //En este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
    //Vamos a analizar su estado en el "Asert"

    const {findAllByRole} = render(<CityInfo city={city} country={country}></CityInfo>)

    //Assert
    //findAllByRole nos va a buscar (en este caso) todos los componentes que seas "heading"
    // => H1, H2, H3.. etc
    //El resultado es un array de componentes (CityAndCountryComponents)
    const CityAndCountryComponents = await findAllByRole("heading")

    // ¿cuando el test va a hacer correcto?
    // Definicion:
    // cuando en el primer elemnto (heading) se encuentre la ciudad "Malaga"
    // y cuando en el segundo elemnto se encuntre el pais "Españana" 

    expect(CityAndCountryComponents[0]).toHaveTextContent(city)   
    expect(CityAndCountryComponents[1]).toHaveTextContent(country)   

    //Si estas dos condiones se cumplen (expect), el test está ok
})
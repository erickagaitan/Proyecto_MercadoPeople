import React, {useEffect, useState} from 'react'
import Banner from "../../components/banner/Banner"
import Cards from "../../components/ProductCard"

const Home = () => {

    const [ data, setData ] = useState([])

    useEffect(() => {
        fetch('/promociones.json')
          .then((res) => res.json())
          .then((json) => setData(json))
          .catch((e) => console.log(e))
      }, [])
    
    return (
        <>
            <div className="mb-5">
                <Banner />
            </div>

            <div className="row d-flex justify-content-center align-items-center pt-5 pb-5">
                <h1 className="d-flex justify-content-center pt-5">RENUÉVATE EN ESTA TEMPORADA</h1>
                {data.map((respuesta, index) => (
                    <Cards 
                        key={index}
                        img={respuesta.img} 
                        width="15rem" 
                        price={respuesta.price}
                        title={respuesta.title}
                        id={respuesta.id}
                    />
                        
                ))}
            </div>
            
        </>
    )
}

export default Home;
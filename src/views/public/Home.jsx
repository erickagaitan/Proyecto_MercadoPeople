import Banner from "../../components/banner/Banner"
import Cards from "../../components/product-cards/ProductCard"

const data = [1,2,3,4,5,6]
const Home = () => {

    return (
        <div className="">
            <div className="">
                <Banner />
            </div>
            <div className="card2">
                {data.map(() => (
                    <Cards />
                )
                    
                )}
                
            </div>
           
        </div>
    )
}

export default Home;
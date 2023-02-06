import axios from 'axios';
import { useState, useEffect } from 'react';
import Noimage from "../asset/images/no-image.jpeg"

const Home = ({ search_term }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    // const [search_term, setSearchTerm] = useState("");



    useEffect(() => {
        axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products?search_term=${search_term}`)
            .then(res => {
                console.log(res);
                setisLoading(false)
                setProducts(res.data.data[0].data)

            }).catch(err => {

            })


    }, [search_term]);




    return (
        <div className='row'>
            {
                isLoading
                &&
                <h1>Loading.... Please Wait</h1>
            }
            {/* <input value={search_term} onChange={(e) => { setSearchTerm(e.target.value) }} /> */}
            {
                products.map(product => {
                    return <div className='p-3 col-md-3' key={product._id}>

                        <div className="card" >
                            <img src={`${product.images[0] || Noimage}`} className="card-img-top" alt="..." style={{
                                height: "200px",
                                objectFit: "cover"
                            }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <a href="#" className="btn btn-primary">Add To Cart</a>
                            </div>
                        </div>
                    </div>

                })
            }


        </div>
    );
}

export default Home;

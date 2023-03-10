import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import data from '../data'
import axios from 'axios'

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('/api/products');
        setProducts(result.data);
        console.log(result);
      }
      fetchData();
    }, []);
    
  return (
    <div>
        <h1>Featured Products</h1>
        <div className="products">
        {
        products.map(product => (
            <div className="product" key={product._id}>
            <Link to={`/product/${product._id}`}>
                <img src={product.image} alt={product.name}/>
            </Link>
            <div className="product-info">
                <Link to={`/product/${product._id}`}>
                <p>
                    {product.name}
                </p>
                </Link>
                <p><strong>
                ${product.price}
                </strong></p>
                <button>Add to cart</button>
            </div>
            
            </div>
        ))
        }
        </div>
    </div>
  )
}

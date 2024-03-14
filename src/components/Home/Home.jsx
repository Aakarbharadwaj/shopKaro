import React, { useState, useEffect } from 'react'
import NavBar from '../Nav/NavBar'
import CardSection from '../CardSection/CardSection'
import './Home.css'
const Home = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const handleData = async () => {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const result = await fetchData.json();
      setData(result);
      // console.log(data)
      // console.log("dataz.k.jdfghvb");

    };

    handleData();

  }, [])

  return (
    <>
      <NavBar />
      <div className='card-container'>
        {
          data.map((value, index)=>(
            <CardSection key={index} image={value.image} title={value.title} price={value.price}/>
          ))
        }
        
      </div>
    </>
  )
}

export default Home
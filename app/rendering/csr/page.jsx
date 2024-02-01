"use client"
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function page() {

  const api = 'https://fakestoreapi.com/products'
  const [product,setProduct] = useState([])

  useEffect(()=> {
    getData()
  },[])

  const  getData = async () => {
    const response = await fetch(api)
    const data = await response.json()
    setProduct(data)
    console.log(data);
  }

  return (  
    <div>
      {product.length === 0 && <h3>Loading....</h3>}
      {product.map(({id,title,image})=> {
        return <div key={id}>
          <h1>{title}</h1>
          <img src={image} alt="" className='w-[200px] h-[200px]'/>
        </div>
      })}
    </div>
  )
}

export default page
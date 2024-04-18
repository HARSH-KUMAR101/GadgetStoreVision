import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import PageNavigation from './components/PageNavigation';
 






function SingleProduct() {
  let [item, setItem] = useState({})
  const [load, setLoad] = useState(true)
  const [err, seterr] = useState(false)


  const { id } = useParams()


  const API = "https://api.pujakaitem.com/api/products"

  const getsingleproduct = async (url) => {
    try {
      setLoad(true)
      const res = await axios(url)
      const product = await res.data;
      setItem(product)
      setLoad(false)
    } catch (error) {
      // prompt(error)
      setLoad(false)
      seterr(true)
    }
  }

  useEffect(() => {
    getsingleproduct(`${API}?id=${id}`)

  }, [])

   if(err){
      return(
        <h1>error found in api</h1>
      )
   } 
  if (load) {
    return (

      <h1>loading...............</h1>
    )
  }

  return (

    <PageNavigation data={item} />
  )
}

export default SingleProduct
import { useEffect, useState } from 'react'
import Link from 'next/Link'
import { useMarketplace } from '@thirdweb-dev/react'

const Listings = () => {

  const [listings,setListings] = useState([])
  //const marketplace = useMaketplace()


  useEffect(() => {
    getListings()
  }, [])
  
  const getListings = async () => {
    try {
      
    } catch (error) {
      
    }
  }
  
  return (
    <div>
    Listings
    </div>
  )
}

export default Listings
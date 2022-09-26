import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAddress } from '@thirdweb-dev/react'
import { MdVerified } from 'react-icons/md'
import TopNavbarLayout from '../../layouts/TopNavbarLayout'
import CollectionStats from './CollectionStats'
import { collectionData } from '../../static/collections'
import Listings from './Listings'

const style = {
  title: `py-4 text-4xl text-center font-bold text-[#525252] dark:text-white`
}

export default function Home() {
  const address = useAddress()
  const [collection] = useState(collectionData)
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (!address) router.replace('/')
  }, [address])

  useEffect(() => {
    if (!slug) return
    ;(async () => {
      const collectionData = await getCollection()

      setCollection(collectionData)
    })()
  }, [slug])

  return (
    <div>
      <TopNavbarLayout>
        <h1 className = {style.title}>Available Listings below</h1>
                  

          <Listings />
        </TopNavbarLayout>
    </div>
  )
}

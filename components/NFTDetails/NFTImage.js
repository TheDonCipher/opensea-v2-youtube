import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons'

const style = {
  wrapper: `rounded -lg border dark:border-transparent dark:bg-[#313339]`,
  nftHeader: `flex items-center justfiy-end space-x-2`,
  nftImage: `rounded-b-lg object-cover`
  
}

const NFTImage = ({image}) => {
  return (
    <div className = {style.wrapper}>
      <div className = {style.nftHeader}>
        <Image height = {20 } width = {20} src = '/eth-logo.svg' alt='eth' />

        <div>
          {image&&<Image
                    src = {image}
                    width = {448}
                    height = {448}
                    alt = "nft"
                    />}
        </div>
      </div>         
    </div>
  )
}

export default NFTImage
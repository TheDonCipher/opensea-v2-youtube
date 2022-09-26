import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
  wrapper: `relative flex space-x-2 cursor-pointer flex-col rounded-lg bg-[#334155] shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-[#333333]`,
  imageContainer: `h-3/4 overlow-hidden`,
  nftImage: `rounded-t-lg object-cover`,
  nftLowerContainer: `flex h-1/4 flex-col justify-between p-4`,
  collectionTitle: `text-sm text-gray-500 dark:text-gray-400`,
  nftTitle: `text-base font-bold`,
  priceContainer: `flex flex-col justify-end`,
  priceTitle: `text-[50] justify-end`,
  priceValue: `text-[20px]`,
  wethImageContainer: `flex justify-end space-x-1`,
  //likesContainer: `flex items-center space-x-2`,
  //heartIcon: `h-3 w-3 text-gray-500 dark:text-gray-400`,
  //likesCounter: `text-xs text-gray-500 dark:text-gray-400`,
}

const NFTCard = ({listing}) => {

  return (
    <div className = {style.wrapper}>
      <div className = {style.imageContainer}>
        <Image
          classname = {style.nftImage}
          src = {listing.asset.image}
          height = {340}
          width = {340}
          alt = 'nft'
        />
      </div>

      <div className = {style.nftLowerContainer}>
        <div className = {style.nftInfoContainer}>
          <div>
            {listing.asset.collection && (
              <div className = {style.collectionTitle}>            {listing.asset?.collection.collection?.name}
              </div>      
            )}

            <div className = {style.nftTitle}>
              {listing.asset.name}
            </div>
          </div>

          <div className = {style.priceContainer}>
            <div className = {style.priceTitle}>Buy at</div>
            <div className = {style.wethImageContainer}>
              <Image
                height = {16}
                width = {16}
                src = '/weth-logo.svg'
                alt = 'weth'
                />
              <div className = {style.priceValue}>
                {listing.buyoutCurrencyValuePerToken?.displayValue}
            </div>
          </div>
        </div>
      </div>
    </div>
            
    </div>
  )
}

export default NFTCard
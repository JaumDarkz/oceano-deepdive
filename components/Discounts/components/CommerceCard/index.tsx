import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

import star from '@/public/assets/icons/star.svg'
import cart from '@/public/assets/icons/cart.svg'
import BuyPopup from '../BuyPopup'

interface CardData {
  image: string,
  productName: string,
  value: number,
  discountValue: number,
  description: string,
  starsValue: number,
  componentType: string
}

const CommerceCard = ({image, productName, value, discountValue, description, starsValue, componentType}: CardData) => {
  const [buyPopup, setBuyPopup] = useState(false)

  return (
    <>
      {buyPopup &&
        <BuyPopup
        image={image}
        productName={productName}
        value={value} discountValue={discountValue}
        description={description} starsValue={starsValue}
        closeFunction={(closePopup) => setBuyPopup(closePopup)}
        componentType={componentType}
        />
      }

      <div className={styles.container}>
        <div className={styles.productImage}>
          <Image src={image} alt='Foto do produto' layout='responsive' width={259} height={233} />
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.productName}>
            {productName}
          </div>

          <div className={styles.productInfo}>
            <div className={styles.points}>
              <div className={styles.value}>
                <span>{componentType == 'coupon' ? '$' : null}{value} {componentType == 'coupon' ? '-' : null} </span> {componentType == 'normal' ? 'pts' : null}
              </div>

              {discountValue == 0 ? null :
                <>
                  {componentType == 'normal' ?
                    <div className={styles.discountValue}>
                      {discountValue}
                    </div>
                  :
                    <div className={styles.couponValue}>
                      <span>{discountValue}</span> pts
                    </div>
                  }
                </>
              }
            </div>

            <div className={styles.description}>
              {description}
            </div>

            <div className={styles.starsAndBuy}>
              <div className={styles.stars}>
                <div className={styles.image}>
                  <Image src={star} alt='Estrelas' />
                </div>

                <div className={styles.starsValue}>
                  {starsValue}
                </div>
              </div>

              <div className={styles.buy} onClick={() => setBuyPopup(true)}>
                <Image src={cart} alt='Comprar' style={{marginLeft: '-2px'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommerceCard
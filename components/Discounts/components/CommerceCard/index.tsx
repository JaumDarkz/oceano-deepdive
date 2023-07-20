import Image from 'next/image'

import styles from './styles.module.scss'

import star from '@/public/assets/icons/star.svg'
import cart from '@/public/assets/icons/cart.svg'

interface CardData {
  image: string,
  productName: string,
  value: number,
  discountValue: number,
  description: string,
  starsValue: number
}

const CommerceCard = ({image, productName, value, discountValue, description, starsValue}: CardData) => {
  return (
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
              <span>{value}</span> pts
            </div>

            {discountValue == 0 ? null :
              <div className={styles.discountValue}>
                {discountValue} pts
              </div>
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

            <div className={styles.buy}>
              <Image src={cart} alt='Comprar' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommerceCard
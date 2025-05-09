import styles from './KnifeCards.module.scss';
import { Rate } from 'antd';
import YellowBtn from '../UI/YellowBtn/YellowBtn';
import { useState } from "react";
function KnifeCards({showLikes,showComparision,btnName,onAddToCart,title, steel, materials, reviews, reviewstext, price, currency, imgsrc }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.knifeCard}>
      <div className={styles.knifeCardsContent}>
        <div className={styles.knifeCardText}>
          <img className={styles.knife} src={imgsrc} alt={title} />
          <h4>{title}</h4>
          <div className={styles.size}>
            <p>{steel}</p>
            <p>{materials}</p>
          </div>
          <div className={styles.valuation}>
            <Rate className={styles.rate} />
            <p>{reviews}<span>{reviewstext}</span></p>
          </div>
          <hr />
          <div>
            <div className={styles.cardPrice}>
              <h4>{price}<span>{currency}</span></h4>
              <div className={styles.cardScale}>
                <button onClick={showComparision}>
                  <img src="./../assets/img/Vector (22).png" alt="nema" />
                </button>
                <svg
                  width="28"
                  height="25"
                  viewBox="0 0 28 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    showLikes()
                    setIsActive(!isActive)}}
                  style={{ cursor: "pointer" }}
                >
                  <path
                    d="M20.1004 0C17.7169 0 15.4856 1.00889 14 2.69927C12.5144 1.00883 10.2832 0 7.89957 0C3.54375 0 0 3.31281 0 7.3849C0 10.5735 2.03385 14.2616 6.04492 18.3468C9.13175 21.4906 12.4897 23.9248 13.4454 24.596L13.9998 24.9854L14.5543 24.5961C15.5099 23.9249 18.868 21.4907 21.9549 18.347C25.9661 14.2618 28 10.5736 28 7.3849C28 3.31281 24.4562 0 20.1004 0ZM20.5948 17.1798C18.0558 19.7656 15.3242 21.8559 13.9998 22.8193C12.6755 21.8559 9.944 19.7656 7.40498 17.1797C3.76837 13.476 1.84615 10.0889 1.84615 7.3849C1.84615 4.26452 4.56172 1.72587 7.89957 1.72587C10.0961 1.72587 12.1243 2.84504 13.1927 4.64668L14 6.00817L14.8073 4.64668C15.8756 2.8451 17.9038 1.72587 20.1004 1.72587C23.4383 1.72587 26.1538 4.26446 26.1538 7.3849C26.1538 10.0891 24.2316 13.4761 20.5948 17.1798Z"
                    fill={isActive ? "#FFD700" : "#E8AA31"}
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
        
          <YellowBtn
          onClick={onAddToCart}
            btnName={btnName}
            icon={
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.14005 4.42146H16.6916C17.3507 4.42146 17.8296 5.04797 17.6565 5.68396L16.9778 8.17874C16.6225 9.48483 15.4366 10.3912 14.0831 10.3912H5.24054M0 1H2.00252C2.97824 1 3.81154 1.70406 3.97445 2.66608L5.47496 11.5273C5.63787 12.4893 6.47118 13.1934 7.44689 13.1934H16.3759"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M7.87915 15.7791C8.42837 15.7792 8.84096 16.2086 8.84106 16.699C8.84106 17.1894 8.42844 17.6187 7.87915 17.6189C7.32969 17.6189 6.91626 17.1895 6.91626 16.699C6.91637 16.2085 7.32976 15.7791 7.87915 15.7791Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M15.4146 15.7791C15.9638 15.7792 16.3764 16.2086 16.3765 16.699C16.3765 17.1894 15.9638 17.6187 15.4146 17.6189C14.8651 17.6189 14.4517 17.1895 14.4517 16.699C14.4518 16.2085 14.8652 15.7791 15.4146 15.7791Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            }
          />
       
      </div>
    </div>
  );
}

export default KnifeCards;

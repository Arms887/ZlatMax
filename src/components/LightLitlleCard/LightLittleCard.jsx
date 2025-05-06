import React from 'react';
import YellowBtn from '../UI/YellowBtn/YellowBtn';
import styles from './LightLittleCard.module.scss';

function LightLittleCard({ title, description, image, btnName }) {
    return (
        <div className={styles.container}>
            <div className={styles.cardFanarik}>
                <div className={styles.cardFanarikChild}>
                    <div className={styles.cardFanarikChildText}>
                        <div className={styles.LightLittleCardText}>
                            <h4>{title}</h4>
                            <div className={styles.line}></div>
                            <p className={styles.description}>{description}</p>
                        </div>
                        <img className={styles.hideedimg} src={image} alt={title} />
                        <YellowBtn btnName={btnName} />
                    </div>
                    <img className={styles.cardImage} src={image} alt={title} />
                </div>
            </div>
        </div>
    );
}

export default LightLittleCard;

import styles from './Section2Cards.module.scss';


function Section2Cards({ title, imgsrc, items, imgClass }) {
    return (

        <div className={styles.sectTwoCard}>
            <div className={styles.sectTwoCardContent}>
                <h3>{title}</h3>
                <div className={styles.line}></div>
                <ul>
                    {items.map((item,index) => {
                        return <li key={index}><a href="#">{item}</a></li>
                    })}
                </ul>
                <img src={imgsrc} alt={title} className={`${styles.cardImage} ${imgClass ? styles[imgClass] : ''}`} />

            </div>
        </div>
    );
}

export default Section2Cards;



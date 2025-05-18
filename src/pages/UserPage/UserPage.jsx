import { useParams } from 'react-router-dom';
import KnifeCards from '../../components/KnifeCards/KnifeCard';
import { useTranslation } from 'react-i18next';
import styles from './UserPage.module.scss';
import { useState } from 'react';
import { Rate } from 'antd';
function UserPage() {
    const { t } = useTranslation();
    const { id } = useParams();
    const allCards = [
        ...t('knifecards', { returnObjects: true }),
        ...t('lights', { returnObjects: true }),
    ];
    const needCard = allCards.find((item) => (item.id == id));
    const [show, setShow] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const options = ['100Х13М', '110Х18М-ШД', '40Х10С2М (ЭИ-107)', '50Х14МФ', '95Х18', 'AUS-8', 'ELMAX', 'RWL-34'];

    const [qanak, setQanak] = useState(0)
    return (
        <div className={styles.sectionOne}>
            <div className="container">
                <div className={styles.sectionOneContent}>
                    <div className={styles.sectionOneContentImg}>
                        <img className={styles.sectionOneContentMainImg} src="./assets/img/knife1Card.png" alt="" />
                        <div className={styles.sectionOneContentImgSmalls}>
                            <img src="./assets/img/knife2Card.png" alt="" />
                            <img src="./assets/img/knife3Card.png" alt="" />
                            <img src="./assets/img/knife4Card.png" alt="" />
                            <img src="./assets/img/knife5Card.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.sectionOneContentCharacteristic}>
                        <div className={styles.sectionOneCharacteristicMain}>
                            <div className={styles.sectionOneCharacteristicTitle}>
                                <h4>{needCard.title}</h4>
                                <Rate />
                            </div>
                            <div className={styles.sectionOneCharacteristicLike}>
                                <img src="./assets/img/Vector (22).png" alt="" />
                                <img src="./assets/img/hearthYellow.svg" alt="" />
                            </div>
                        </div>
                        <span className={styles.inStock}><p className={needCard.isInStock ? styles.available : styles.unavailable}>
                            {needCard.isInStock ? t('isInStockText') : t('outOfStock')}
                        </p></span>
                        <div className={styles.line}></div>
                        <div className={styles.productInfo}>
                            <div className={styles.productInfoTitle}>
                                <h6>Артикул:</h6>
                                <h6>Торговая марка:</h6>
                                <h6>Серия:</h6>
                                <h6>Бонусные баллы: </h6>
                            </div>
                            <div className={styles.productInfoCode}>
                                <span>AF0000001952</span>
                                <span>WUESTHOF (Германия)</span>
                                <span>Ножи серии Classic Ikon</span>
                                <span>38</span>
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.composition}>
                            <div className={styles.compositionInform}>
                                <h6>Сталь</h6>
                                <div className={styles.compositionSearch}>
                                    <form action="">
                                        <input type="text" placeholder="Выбрать сталь"
                                            value={show} readOnly onClick={() => setShowOptions(!showOptions)} />
                                        <button onClick={() => setShowOptions(!showOptions)} type="button">
                                            <img src="./assets/img/vectorDown.svg" alt="dropdown icon" />
                                        </button>
                                    </form>
                                    {showOptions && (
                                        <div className={styles.dropdown}>
                                            {options.map((i) => (
                                                <div
                                                    key={i}
                                                    className={styles.dropdownItem}
                                                    onClick={() => {
                                                        setShow(i);
                                                        setShowOptions(false);
                                                    }}
                                                >
                                                    {i}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.compositionInform}>
                                <h6>Рукоять</h6>
                                <div className={styles.compositionSearch}>
                                    <form action="">
                                        <input placeholder='Выбрать рукоять' type="text" />
                                        <button>
                                            <img src="./assets/img/vectorDown.svg" alt="" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className={styles.compositionInform}>
                                <h6>Гарда и тыльник</h6>
                                <div className={styles.compositionSearch}>
                                    <form action="">
                                        <input placeholder='Выбрать гарда и тыльник' type="text" />
                                        <button>
                                            <img src="./assets/img/vectorDown.svg" alt="" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className={styles.compositionInform}>
                                <h6>Обработка клинка</h6>
                                <div className={styles.compositionSearch}>
                                    <form action="">
                                        <input placeholder='Выбрать обработку клинка' type="text" />
                                        <button>
                                            <img src="./assets/img/vectorDown.svg" alt="" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.priceAndQuantity}>
                            <div className={styles.price}>
                                <div className={styles.priceChild}>
                                    <h6>3 865 </h6>
                                    <img className={styles.rubli} src="./assets/img/rubli.svg" alt="" />
                                </div>
                                <div className={styles.priceChild}>
                                    <span>+ 449 баллов за покупку</span>
                                    <div className={styles.imageContainer}
                                        onMouseEnter={() => setShowModal(true)}
                                        onMouseLeave={() => setShowModal(false)}
                                    >
                                        <img src="./assets/img/harcakan.svg" alt="" className={styles.harcakan} />
                                        {showModal && (
                                            <div className={styles.modal}>
                                                <p>Вам будут начислены баллы в размере 5%
                                                    от стоимости покупки. Их можно будет использовать
                                                    на оплату последующих заказов.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Quantity}>
                                <div className={styles.number}>
                                    <button className={styles.minus} onClick={() => setQanak(qanak - 1)}>-</button>
                                    <div className={styles.numberQanak}>{qanak}</div>
                                    <button className={styles.plus} onClick={() => setQanak(qanak + 1)}>+</button>
                                </div>
                                <div className={styles.buy}>
                                    <button>В корзину</button>
                                    <button>Купить в 1 клик</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UserPage;
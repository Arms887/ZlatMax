import styles from './Header.module.scss';
import { useState } from 'react';
import { Button, Drawer, List } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import { useLikes } from '../../context/LikeContext';
import { useLogin } from '../../context/LoginContext';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import './../../i18n';
import { Link } from 'react-router-dom';
function Header() {
    const [menus, setmenus] = useState(false);
    const togglemenus = () => {
        setmenus(!menus);
    };
    const icon = menus ? (
        <span style={{ fontSize: '24px', color: 'white' }}>✕</span>
    ) : (
        <MenuOutlined style={{ fontSize: '24px', color: 'white' }} />
    );
    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };
    const { t, i18n } = useTranslation();
    const { cart, removeFromCart, cartItems, totalPrice } = useCart();
    const { removeLike, likeItems } = useLikes();
    const [cartVisible, setCartVisible] = useState(false);
    const [likesVisible, setLikesVisible] = useState(false);
    const { openLogin } = useLogin();

    return (
        <header>

            <Drawer
                title="Корзина"
                placement="right"
                onClose={() => setCartVisible(false)}
                open={cartVisible}
                width={400}
            >
                <List
                    dataSource={cartItems}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <Button type="link" onClick={() => removeFromCart(item.id)}>
                                    Удалить
                                </Button>,
                            ]}
                        >
                            <List.Item.Meta
                                title={item.title}
                                description={`Цена: ${item.price} ${item.currency}`}
                            />
                        </List.Item>
                    )}
                />
                {cartItems.length === 0 && <p>Корзина пуста.</p>}
            </Drawer>
            <Drawer
                title="likes"
                placement="right"
                onClose={() => setLikesVisible(false)}
                open={likesVisible}
                width={400}
            >
                <List
                    dataSource={likeItems}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <Button type="link" onClick={() => removeLike(item.id)}>
                                    Удалить
                                </Button>,
                            ]}
                        >
                            <List.Item.Meta
                                title={item.title}
                                description={`Цена: ${item.price} ${item.currency}`}
                            />
                        </List.Item>
                    )}
                />
                {likeItems.length === 0 && <p>Корзина пуста.</p>}
            </Drawer>
            <div className={styles.headerInformation}>
                <div className='container'>
                    <div className={styles.headerContent}>
                        <div className={styles.headerInformationMediaIcon}>
                            <ul className={styles.headerInformationMediaIcons}>
                                <li><a href="#"><img src="./assets/img/zang.svg" alt={t('header.alt.phone')} /></a></li>
                                <li><a href="#"><img src="./assets/img/headerman.svg" alt={t('header.alt.profile')} /></a></li>
                                <li onClick={() => setLikesVisible(true)}><img src="./assets/img/heartWhite.svg" alt={t('header.alt.heart')} /></li>
                                <li onClick={() => setCartVisible(true)} className={styles.QuantityySizeParent}>
                                    <img src="./assets/img/zambyuxWhites.svg" alt={t('header.alt.cart')} />
                                    <div className={styles.QuantityySIze}><span>{cart.length}</span></div>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.navbar}>
                            <div className={styles.menu}>
                                <nav>
                                    <ul>
                                        <li><a href="#">{t('header.about')}</a></li>
                                        <li><a href="#">{t('header.payment')}</a></li>
                                        <li><a href="#">{t('header.news')}</a></li>
                                        <li><a href="#">{t('header.contacts')}</a></li>
                                        <li> <select className={styles.selectLanguage} onChange={changeLanguage} defaultValue={i18n.language}>
                                            <option value="en">🇺🇸</option>
                                            <option value="ru">🇷🇺</option>
                                            <option value="am">🇦🇲</option>
                                        </select></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className={styles.personalAccount} onClick={() => openLogin()}>     
                                    <img src="./assets/img/headerman.svg" alt={t('header.alt.profile')} />
                                    <span>{t('header.personal')}</span>        
                            </div>
                        </div>
                        <div className={styles.hamburger}>
                            <Button type="text" icon={icon} onClick={togglemenus} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.logoMedia}>
                <div className='container'>
                    <Link to="/"><img src="./assets/img/logo.png" alt={t('header.alt.logo')} /></Link>
                </div>
            </div>
            <div className={styles.headerLogoAddres}>
                <div className='container'>
                    <div className={styles.headerLogoAddresChild}>
                        <div className={styles.headerLogoAddresChildLeft}>
                            <Link to="/"><img src="./assets/img/logo.png" alt={t('header.alt.logo')} /></Link>
                            <form action="#">
                                <input type="text" placeholder={t('header.searchPlaceholder')} />
                            </form>
                        </div>
                        <div className={styles.headerLogoAddresChildRight}>
                            <div className={styles.city}>
                                <img src="./assets/img/tex.svg" alt={t('header.alt.location')} />
                                <span>{t('header.city')}</span>
                            </div>
                            <div className={styles.number}>
                                <div className={styles.numbers}>
                                    <span>8-800-777-49-67</span>
                                    <h6>{t('header.call')}</h6>
                                </div>
                                <img src="./assets/img/vectorDown.svg" alt={t('header.alt.arrow')} />
                            </div>
                            <button onClick={() => setLikesVisible(true)}>
                                <img src="./assets/img/heart.png" alt={t('header.alt.heart')} />
                            </button>
                            <div onClick={() => setCartVisible(true)} className={styles.basket}>
                                <img src="./assets/img/zambyux.svg" alt={t('header.alt.cart')} />
                                <div className={styles.QuantityySIze}><span>{cart.length}</span></div>
                                <div className={styles.basketQuantityy}>
                                    <span>{totalPrice}</span>
                                    <h6>{t('header.order')}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.headerMedia} ${menus ? styles.open : ''}`} >
                <div className={styles.headerMediaContent}>
                    <ul>
                        <li><a href="#">{t('header.personal')}</a></li>
                        <li><a href="#">{t('header.catalog')}</a></li>
                        <li><a href="#">{t('header.contacts')}</a></li>
                        <li><a href="#">{t('header.news')}</a></li>
                        <li><a href="#">{t('header.payment')}</a></li>
                        <li><a href="#">{t('header.about')}</a></li>
                    </ul>
                </div>
            </div>
            <LoginModal />
            <RegisterModal />
        </header>
    );
}

export default Header;

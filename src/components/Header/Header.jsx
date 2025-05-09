import styles from './Header.module.scss';
import React, { useState } from 'react';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();

    return (
        <header>
            <div className={styles.headerInformation}>
                <div className='container'>
                    <div className={styles.headerContent}>
                        <div className={styles.headerInformationMediaIcon}>
                            <ul className={styles.headerInformationMediaIcons}>
                                <li><a href=""><img src="./assets/img/zang.svg" alt={t('header.alt.phone')} /></a></li>
                                <li><a href=""><img src="./assets/img/headerman.svg" alt={t('header.alt.profile')} /></a></li>
                                <li><a href=""><img src="./assets/img/heartWhite.svg" alt={t('header.alt.heart')} /></a></li>
                                <li className={styles.QuantityySizeParent}>
                                    <a href="">
                                        <img src="./assets/img/zambyuxWhites.svg" alt={t('header.alt.cart')} />
                                        <div className={styles.QuantityySIze}><span>0</span></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.navbar}>
                            <div className={styles.menu}>
                                <nav>
                                    <ul>
                                        <li><a href="">{t('header.about')}</a></li>
                                        <li><a href="">{t('header.payment')}</a></li>
                                        <li><a href="">{t('header.news')}</a></li>
                                        <li><a href="">{t('header.contacts')}</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className={styles.PersonalAccount}>
                                <a href="">
                                    <img src="./assets/img/headerman.svg" alt={t('header.alt.profile')} />
                                    <span>{t('header.personal')}</span>
                                </a>
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
                    <a href=""><img src="./assets/img/logo.png" alt={t('header.alt.logo')} /></a>
                </div>
            </div>
            <div className={styles.headerLogoAddres}>
                <div className='container'>
                    <div className={styles.headerLogoAddresChild}>
                        <div className={styles.headerLogoAddresChildLeft}>
                            <a href=""><img src="./assets/img/logo.png" alt={t('header.alt.logo')} /></a>
                            <form action="">
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
                            <button>
                                <img src="./assets/img/heart.png" alt={t('header.alt.heart')} />
                            </button>
                            <div className={styles.basket}>
                                <img src="./assets/img/zambyux.svg" alt={t('header.alt.cart')} />
                                <div className={styles.QuantityySIze}><span>0</span></div>
                                <div className={styles.basketQuantityy}>
                                    <span>0 p.</span>
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
                        <li><a href="">{t('header.personal')}</a></li>
                        <li><a href="">{t('header.catalog')}</a></li>
                        <li><a href="">{t('header.contacts')}</a></li>
                        <li><a href="">{t('header.news')}</a></li>
                        <li><a href="">{t('header.payment')}</a></li>
                        <li><a href="">{t('header.about')}</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;

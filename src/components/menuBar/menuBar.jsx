import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './menuBar.module.scss';

function MenuBar() {
    const containerRef = useRef(null);
    const [submenuWidth, setSubmenuWidth] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setSubmenuWidth(containerRef.current.offsetWidth);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Все секции, как в JSON
    const sections = [
        {
            title: t('menu.categories.title'),
            items: t('menu.categories.items', { returnObjects: true }),
        },
        {
            title: t('menu.manufacturers.title'),
            items: t('menu.manufacturers.items', { returnObjects: true }),
        },
        {
            title: t('menu.steel.title'),
            items: t('menu.steel.items', { returnObjects: true }),
        },
        {
            title: t('menu.sharpening.title'),
            items: t('menu.sharpening.items', { returnObjects: true }),
        },
        {
            title: t('menu.workshop.title'),
            items: t('menu.workshop.items', { returnObjects: true }),
        },
    ];

    return (
        <div className={styles.menuBar}>
            <div className="container" ref={containerRef}>
                <nav>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>
                            {t('menu.catalog')}
                            <div className={styles.submenu} style={{ width: submenuWidth }}>
                                {sections.map((section, index) => (
                                    <div className={styles.submenuGroup} key={index}>
                                        <div className={styles.submenuTitle}>{section.title}</div>
                                        <ul>
                                            {section.items.map((item, idx) => (
                                                <li key={idx} className={styles.submenuItem}><a href="#">{item}</a></li>
                                            ))}
                                        </ul>
                                        <div className={styles.viewAll}>{t('menu.view_all')}</div>
                                    </div>
                                ))}
                            </div>
                        </li>
                        <li className={styles.menuItem}>{t('menu.blades')}</li>
                        <li className={styles.menuItem}>{t('menu.souvenirs')}</li>
                        <li className={styles.menuItem}>{t('menu.flashlights')}</li>
                        <li className={styles.menuItem}>{t('menu.accessories')}</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MenuBar;

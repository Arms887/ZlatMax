import styles from './Home.module.scss';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import Section2Cards from '../../components/Section2Cards/Section2Cards';
import Zagolovok from '../../components/Zagolovok/Zagolovok';
import LittleCard from '../../components/LittleCard/LittleCard';
import { useState, useRef } from 'react';
import SliderMy from '../../components/Slider/Slider';
import './../../i18n';
import SectionLast from '../../components/SectionLast/SectionLast';

function Home() {
    const { t, i18n } = useTranslation();
    const cards = t('cards', { returnObjects: true });
    const knifecardarr = t('knifecards', { returnObjects: true });
    const littlecards = t('littleCards', { returnObjects: true });
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        gap: 15,
        afterChange: (index) => setCurrentSlide(index),
        responsive: [
            { breakpoint: 1290, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
        ],
    };
    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('ru')}>Русскый</button>
            <button onClick={() => changeLanguage('am')}>Հայերեն</button>
            <section className={styles.SectionTwo}>
                <div className="container">
                    <div className={styles.SectionTwoContent}>
                        <div><Row gutter={[16, 16]}>
                            {cards.map((card, index) => (
                                <Col xs={24} sm={12} md={12} lg={12} xl={8} key={index}>
                                    <Section2Cards
                                        title={card.title}
                                        imgsrc={card.image}
                                        items={card.items}
                                        imgClass={card.imgClass}
                                    />
                                </Col>
                            ))}
                        </Row></div>
                        <div>
                            <Zagolovok title={"Хиты продаж"} linkText={"Перейти в каталог"} />
                            <SliderMy importedarr={knifecardarr} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sectionFour}>
                <div className={styles.sectionFourMainBlock}>
                    <div className="container">
                        <div className={styles.sectionFourContent}>
                            <div>
                                <Zagolovok title={"Акции"} linkText={"Перейти в каталог"} />
                                <SliderMy importedarr={knifecardarr} /></div>
                            <div><Zagolovok title={"Акции"} linkText={"Перейти в каталог"} />
                                <SliderMy importedarr={knifecardarr} /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sectionSix}>
                <div className={styles.sectionSixMainBlock}>
                    <div className="container">
                        <div className={styles.sectionSixContent}>
                            <div>
                                <Zagolovok title={"Акции"} linkText={"Перейти в каталог"} />
                                <SliderMy importedarr={knifecardarr} /></div>
                            <div><Zagolovok title={"Акции"} linkText={"Перейти в каталог"} />
                                <SliderMy importedarr={knifecardarr} /></div>
                            <div>
                                <Zagolovok title={"Наши статьи"} linkText={"Перейти в каталог"} />
                            </div>
                            <div className={styles.littleCardsBox}>
                                <Row gutter={[16, 16]}>
                                    {littlecards.map((item, index) => (
                                        <Col xs={24} sm={12} md={12} lg={12} xl={6} key={index}>
                                            <LittleCard imgsrc={item.image} text={item.cardtext} />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionLast />
        </div>
    );
}

export default Home;

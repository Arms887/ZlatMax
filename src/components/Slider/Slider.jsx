import styles from './Slider.modules.scss';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { useState, useRef } from 'react';
import ProgressLine from '../../components/ProgressLine/ProgressLine';
import KnifeCards from '../KnifeCards/KnifeCard';
import './../../i18n';

function SliderMy({ importedarr ,slidesToShow}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        gap: 15,
        arrows: false,
        afterChange: index => setCurrentSlide(index),
        responsive: [
            { breakpoint: 1290, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 709, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className={styles.sliderWrapper}>
            <Slider ref={sliderRef} {...sliderSettings}>
                {importedarr.map((item, index) => (
                    <div key={index}>
                        <KnifeCards
                            title={item.title}
                            steel={item.steel}
                            materials={item.materials}
                            reviews={item.reviews}
                            reviewstext={item.reviewsText}
                            price={item.price}
                            currency={item.currency}
                            imgsrc={item.image}
                        />
                    </div>
                ))}
            </Slider>
            <ProgressLine
                total={importedarr.length}
                current={currentSlide}
                onDotClick={(index) => sliderRef.current.slickGoTo(index)}
            />
        </div>
    );
}

export default SliderMy;

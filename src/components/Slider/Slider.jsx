import styles from './Slider.modules.scss';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import Slider from 'react-slick';
import { useState, useRef } from 'react';
import ProgressLine from '../../components/ProgressLine/ProgressLine';
import KnifeCards from '../KnifeCards/KnifeCard';
import './../../i18n';

function SliderMy({importedarr}) {
    const { t, i18n } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();

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
            <Slider ref={sliderRef} {...sliderSettings}>
                {importedarr.map((item, index) => (
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
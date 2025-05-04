import style from './OtherSection.module.scss'
import ToCatalog from '../UI/ToCatalog/ToCatalog';
import SliderMy from '../Slider/Slider';
const OtherSection = ({content,cardsContent,sliderSettings}) => {
    return (
        <div>
            <div className="container">
            <div>
                <p>{content.title}</p>
                <p>{content.text}</p>
            <ToCatalog linkText={content.tocatalog} />
            </div>
            <div>
                <SliderMy importedarr={cardsContent} slidesToShow={sliderSettings} />
            </div>
            </div>
        </div>
    );
};

export default OtherSection;
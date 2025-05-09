import style from './OtherSection.module.scss'
import ToCatalog from '../UI/ToCatalog/ToCatalog';
import SliderMy from '../Slider/Slider';
import { Row, Col } from 'antd';
const OtherSection = ({btnName,content,cardsContent,sliderSettings,showLikes = () => {},showFunction = () => {},showComparision = () =>{}} ) => {
    return (
        <div className={style.OtherSection}>
          <div className="container">
            <Row gutter={[24, 24]}  className={style.OtherSectionContent}>
              <Col xs={24} xl={6} lg={24} md={24} className={style.OtherSectionCol}>
              <div className={style.OtherSectionText}>
              <p>{content.title}</p>
                <p>{content.text}</p>
                <ToCatalog linkText={content.tocatalog} />
              </div>
              </Col>
              <Col xs={24} xl={18} lg={24} md={24} className={style.OtherSectionCol}>
                <div className={style.sliderCub}>
                  <SliderMy btnName={btnName} importedarr={cardsContent} slidesToShow={sliderSettings} showLikes={showLikes} showComparision={showComparision} showFunction={showFunction}/>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      );
};

export default OtherSection;
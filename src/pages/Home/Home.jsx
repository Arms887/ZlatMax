import styles from './Home.module.scss';
import { useTranslation } from 'react-i18next';
import { useComparison } from '../../context/Comparison';
import { Row, Col, Modal, } from 'antd';
import Section2Cards from '../../components/Section2Cards/Section2Cards';
import Zagolovok from '../../components/Zagolovok/Zagolovok';
import LittleCard from '../../components/LittleCard/LittleCard';
import SliderMy from '../../components/Slider/Slider';
import OtherSection from '../../components/OtherSection/OtherSection';
import './../../i18n';
import SectionLast from '../../components/SectionLast/SectionLast';
import MenuBar from '../../components/menuBar/menuBar';
import FirstSection from '../../components/FirstSection/FirstSection'
import LightLittleCard from '../../components/LightLitlleCard/LightLittleCard';
function Home() {
  const { t } = useTranslation();
  const cards = t('cards', { returnObjects: true });
  const knifecardarr = t('knifecards', { returnObjects: true });
  const littlecards = t('littleCards', { returnObjects: true });
  const heading = t('heading', { returnObjects: true });
  const otherSection = t('toOtherSection', { returnObjects: true });
  const lastSection = t('lastSection', { returnObjects: true });
  const lights = t('lights', { returnObjects: true });
  const buttontext = t('btntext');
  const lightLitlleCard = t('lightLittleCards', { returnObjects: true });
const { comparison, isModalOpen, handleClose } = useComparison();
  return (
    <div>
       <Modal
      title="Сравнение товаров"
      open={isModalOpen}
      onCancel={handleClose}
      footer={null}
    >
      {comparison.map((id) => {
        const item = [...knifecardarr, ...lights].find((el) => el.id === id);
        return (
          <div key={id} style={{ marginBottom: '10px' }}>
            <h4>{item?.title}</h4>
            <p>Сталь: {item?.steel}</p>
            <p>Материалы: {item?.materials}</p>
            <hr />
          </div>
        );
      })}
    </Modal>
      <MenuBar />
      <section>
        <FirstSection />
      </section>
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
              <Zagolovok title={heading.title2} linkText={heading.href} />
              <SliderMy btnName={buttontext} importedarr={knifecardarr} slidesToShow={4}   />
            </div>
          </div>
        </div>
        <OtherSection btnName={buttontext} content={otherSection} cardsContent={knifecardarr} sliderSettings={3}   />
      </section>
      <section className={styles.sectionFour}>
        <div className={styles.sectionFourMainBlock}>
          <div className="container">
            <div className={styles.sectionFourContent}>
              <div>
                <Zagolovok title={heading.title} linkText={heading.href} />
                <SliderMy btnName={buttontext} importedarr={knifecardarr} slidesToShow={4}   /></div>
              <div><Zagolovok title={heading.title} linkText={heading.href} />
                <SliderMy btnName={buttontext} importedarr={knifecardarr} slidesToShow={4}   /></div>
            </div>
          </div>
          <OtherSection btnName={buttontext} content={otherSection} cardsContent={knifecardarr} sliderSettings={3}  />
        </div>
      </section>
      <section className={styles.sectionSix}>
        <div className={styles.sectionSixMainBlock}>
          <div className="container">
            <div className={styles.sectionSixContent}>
              <div>
                <Zagolovok title={heading.title} linkText={heading.href} />
                <SliderMy btnName={buttontext} importedarr={knifecardarr} slidesToShow={4}   /></div>
              <div><Zagolovok title={heading.title} linkText={heading.href} />
                <SliderMy btnName={buttontext} importedarr={knifecardarr} slidesToShow={4}   /></div>
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
              <div>
                <div className={styles.lightsCart}>
                  <Row gutter={[16, 16]}>
                    {lightLitlleCard.map((item, index) => (
                      <Col
                        key={index}
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        xl={12}
                      >
                        <LightLittleCard
                          title={item.title}
                          description={item.description}
                          image={item.image}
                          btnName={item.btntext}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
                <Zagolovok title={heading.title3} linkText={heading.href} />
                <SliderMy btnName={buttontext} importedarr={lights} slidesToShow={4}   />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionLast title={lastSection.title} description={lastSection.text} />
    </div>
  );
}

export default Home;

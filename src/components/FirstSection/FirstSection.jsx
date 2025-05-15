import styles from './FirstSection.module.scss';
import FirstSectionButton from '../UI/FirstSectionButton/FirstSectionButton';
import InfoComponent from '../InfoComponent/InfoComponent';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
function FirstSection() {
    const {t} = useTranslation();
    const infoCards = t('infoCards' , { returnObjects: true });
    const firstSectionTexts = t('firstSectionTexts' , { returnObjects: true });    
  return (
    <div className={styles.FirstSectionBlock}>
        <div className="container">
<div className={styles.FirstSectionContent}>
<div className={styles.FirstSectionTexts}>
<p className={styles.FirstSectionTitle}>{firstSectionTexts.infoCardTitle}<span>{firstSectionTexts.infoCardTitleSpan}</span></p>
    <p className={styles.FirstSectionText}>{firstSectionTexts.infoCardsText}</p>
<FirstSectionButton btnName={t('FirstSectionBtn')}/>
</div>
<img className={styles.FirstSetcionKnifeimg} src="/assets/img/knifemain.png" alt="asdasdasdasdasdsa" />
<div className={styles.infoCardsBlock}>
<Row justify="space-between" gutter={[16, 16]} style={{ width: '100%' }}>
  {infoCards.map((item, index) => (
    <Col
      key={index}
      xs={24} 
      sm={12} 
      md={8}   
      lg={6}   
    >
      <InfoComponent
        text={item.text}
        imgsrc={item.imgsrc}
      />
    </Col>
  ))}
</Row>

</div>
</div>
        </div>
    </div>
  );
}

export default FirstSection;

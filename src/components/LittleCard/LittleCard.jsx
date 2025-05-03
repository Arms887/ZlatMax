import style from './LittleCard.module.scss'

const LittleCard = ({ imgsrc, text }) => {
  let date = new Date();

  return (
    <div className={style.littleCard}>
      <div className={style.littleCardContent}>
        <img src={imgsrc} alt="img" />
        <div className={style.littleCardTexts}>
          <p>{text}</p>
          <span>{date.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default LittleCard;



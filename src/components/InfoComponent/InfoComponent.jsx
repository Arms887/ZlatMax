import styles from './InfoComponent.module.scss';
function InfoComponent({imgsrc,text }) {
  return (
    <div className={styles.InfoComponent}>
<img src={imgsrc} alt={text} />
<p>{text}</p>
    </div>
  );
}

export default InfoComponent;

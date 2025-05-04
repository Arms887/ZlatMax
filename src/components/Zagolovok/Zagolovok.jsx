import styles from './Zagolovok.module.scss';
import ToCatalog from '../UI/ToCatalog/ToCatalog';
function SectionHeader({ title, linkText }) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.left}>
        <h2>{title}</h2>
      </div>
      <ToCatalog linkText={linkText}/>
    </div>
  );
}

export default SectionHeader;

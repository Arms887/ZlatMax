import styles from './FirstSectionButton.module.scss'
function FirstSectionButton({ btnName}) {

  return (
    <div>
      <button className={styles.mainBtn}>
        <p>{btnName}</p>
      </button>
    </div>
  );
}


export default FirstSectionButton;
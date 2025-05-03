import styles from './YellowBtn.module.scss';
function YellowBtn({btnName,icon}) {
    return (
<div>
    <button className={styles.mainBtn}><p>{btnName}</p><span>{icon}</span></button>
</div>
   
    );
}

export default YellowBtn;
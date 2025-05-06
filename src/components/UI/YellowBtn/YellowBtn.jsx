import styles from './YellowBtn.module.scss';
function YellowBtn({btnName,icon,onClick}) {
    return (
<div>
    <button onClick={onClick} className={styles.mainBtn}><p>{btnName}</p><span>{icon}</span></button>
</div>
   
    );
}

export default YellowBtn;
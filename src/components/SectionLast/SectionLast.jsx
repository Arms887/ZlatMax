import styles from './SectionLast.module.scss'

function SectionLast({title, description}) {
    return (
        <section className={styles.sectionLast}>
            <div className='container'>
                <div className={styles.sectionLastContent}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>

            </div>
        </section>
    )
}
export default SectionLast;
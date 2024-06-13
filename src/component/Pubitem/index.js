
import styles from './pubitem.module.css'
const Pubitem = ({content}) => {

    
    return (

        <ul className={styles.style}>
            <a className={styles.conl}>{content} </a>
            </ul>
    )
}

export default Pubitem;
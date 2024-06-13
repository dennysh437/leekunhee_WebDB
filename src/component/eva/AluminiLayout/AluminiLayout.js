import React, {useRef} from 'react';



import styles from "./AluminiLayout.module.css"

export default function AluminiLayout({course,photo, name, EName, edu1, dissertation, affilation, con, }) {

  return (   
    <div className={styles.alu_profile}>
       
        <div className={styles.alu_left}>
       
           <div className={styles.alu_course}>
               {course}
            </div>
           
            <div className={styles.alu_photo}> 
              <img className={styles.aluImg} src={`images/${photo}`} alt=""/> 
            </div>
        </div>
        <div className={styles.alu_right}>
          <div className={styles.alu_name}>
              {name}
             
              <span className={styles.alu_eng}> {EName}</span>
          </div>

          <div className={styles.alu_field}> 
            <span className={styles.alu_edu}>| Education |</span>
            <span className={styles.alu_edul1}>{edu1}</span>
            <span className={styles.alu_aff}>| Affiliation |</span>
            <span className={styles.alu_affl}>{affilation}</span>
            <span className={styles.alu_dis}>| Dissertation |</span>
            <span className={styles.alu_disl}>{dissertation}</span>
            <span className={styles.alu_contact}>| Contact |</span>
            <span className={styles.alu_contactl}>{con}</span>
        
          </div>

         
          
        </div>
        
      </div>  )
}
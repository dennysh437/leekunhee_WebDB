import React, {useRef} from 'react';


import styles from "./StudentLayout.module.css"

export default function StudentLayout({course,lphoto,photo, name, EName, edu1, edu2, edu3, int, con, rphoto}) {

  return (   
    <div className={styles.stu_profile}>
       {/* <img className={styles.bar_left} src={lphoto} alt="" /> */}
        <div className={styles.stu_left}>
       
           <div className={styles.stu_course}>
               {course}
            </div>
           
            <div className={styles.stu_photo}> 
              <img className={styles.stuImg} src={photo} alt=""/> 
            </div>
        </div>
        <div className={styles.stu_right}>
          <div className={styles.stu_name}>
              {name}
             
              <span className={styles.stu_eng}> {EName}</span>
          </div>

          <div className={styles.stu_field}> 
            <div className={styles.stu_subContainer}>
            <span className={styles.stu_edu}></span>
            <span className={styles.stu_edu}>| Education |</span>
            {edu3 && <span className={styles.stu_edul1}>{edu3}</span> }
            <span className={styles.stu_edul1}>{edu1}</span>
            {edu2 && <span className={styles.stu_edul2}>{edu2}</span>}
            <span className={styles.stu_ri}>| Research Interest |</span>
            <span className={styles.stu_ril}>{int} </span>
            <span className={styles.stu_contact}>| Contact |</span>
            <span className={styles.stu_contactl}>{con}</span>
            </div>

            {/* <img className={styles.bar_rights} src={rphoto} alt="" /> */}
          
          </div>
          
        </div>
        
      </div>
  )
}
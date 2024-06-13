
import React, {useRef} from 'react';


import styles from './researchLayout.module.css'

export default function ResearchLayout({barl,title,img,bar}) {
  
  return (   
      <div className={styles.layout}>
        
        <div className={styles.bspl}>
          <div className={styles.cd_container}>
            

            <span className={styles.bsp_title}>{title}</span>
            <img className={styles.bspImg}style = {{width: '100%', height: '80%'}} src={img} alt=""/> 
            
          </div>
       
        </div>
      
        </div>
  )
}

        
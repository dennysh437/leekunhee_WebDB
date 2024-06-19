import React, {useRef} from 'react';

import styles from "./Staff.module.css"
export default function Staffs() {

  return (   
    <div className={styles.staffs} >
      <div className={styles.staffs_header} >
        <div className={styles.staffs_title}>
          Publication
        </div>
        <style jsx>{`
            
            ul {
              list-style-type: square;
              list-style-position: inside;
            }

            li::marker {
              color: #0086c4;
              
            }
               
           
                            `}

        </style>

        <div className={styles.journal_content}>

          <ul >
              <li className ={styles.conl}>Updates on Genetic Hearing Loss: From Diagnosis to Targeted Therapies.Yun Y, Lee SY. Journal of audiology & Otology. 2024 Apr 28(2):88-92.</li>
         </ul>

        </div>
      </div>       
    </div>
  )
}

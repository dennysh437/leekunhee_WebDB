
import styles from './researchUD.module.css'
import React, {useState} from 'react';

export default function ResearchUD() {
    
    
  const title="Publication"
  
  return (   
    <div className={styles.researchUD} >
      <div className={styles.ud_header} >
        <div className={styles.ud_title}>
         {title}
        </div>       
      </div>
    </div>
  )
}

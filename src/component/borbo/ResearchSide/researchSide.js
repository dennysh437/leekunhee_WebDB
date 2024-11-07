import React from 'react'
import styles from './researchSide.module.css'
export default function ResearchSide({select,setSelect}) {
  const clickCD=()=>{
     setSelect('CD')
      
  }
  const clickUD=()=>{
      setSelect('UD')
     
  }

  
  
   return (
    <div className={styles.researchSide}>
       <div className={styles.title_research}>
          BOR_BO
          <div className={styles.titleResearch_border}>
            <div className={styles.titleResearch_left}>
              
            </div>
            <div className={styles.titleResearch_right}>
              
            </div>
        </div>  
       </div>

      <div className={styles.researchList}>
         <ul className={styles.researchContent}>
            <li className={styles.researchListItem} onClick={clickCD} style={{color: select === 'CD' ? 'black' : 'grey'}} >Patient List</li>
            <li className={styles.researchListItem} onClick={clickUD} style={{color: select === 'UD' ? 'black' : 'grey'}}>Publication</li>

         </ul>
        
      </div>

    </div>
  )
}

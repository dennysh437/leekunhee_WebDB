import styles from './researchSide.module.css'

import React,{useState} from 'react'
// import StudentLayout from '../studentLayout/StudentLayout'
export default function ResearchSide({ select, setSelect, selectStudent, setSelectStudent} ) {


 //  const [selectStudent,setSelectStudent]=useState('Ph.D course')
  const clickResearchCD = () => {
    setSelect('CD') 
   
  }

  const clickResearchUD=()=>{
    setSelect('UD')
  
  }

  const clickGD = () => {
    setSelect('GD')
  }


  return (
    <div className={styles.memberSide}>
       <div className={styles.title_member}>
          USHER
        <div className={styles.title_border}>
            <div className={styles.title_left}>
            
            </div>
            <div className={styles.title_right}>
              
            </div>
        </div>  
         
       </div>

      <div className={styles.memberList}>
        <div className={styles.memberside_container}>
        <ul className={styles.memberContent}>
          <li className={styles.memberListItem} onClick={clickResearchCD} style={{color: select === 'CD' ? 'black' : 'grey'}} >Patient List</li>
          <li className={styles.memberListItem} onClick={clickGD} style={{color: select === 'GD' ? 'black' : 'grey'}} >Genome DB</li>
          <li className={styles.memberListItem} onClick={clickResearchUD}style={{color: select === 'UD' ? 'black' : 'grey'}}>Publication</li>
        </ul>
        </div>
      </div>

    </div>
  )
}

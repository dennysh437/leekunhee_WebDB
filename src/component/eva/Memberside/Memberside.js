import styles from './memberside.module.css'

import React,{useState} from 'react'
// import StudentLayout from '../studentLayout/StudentLayout'
export default function MemberSide({ select, setSelect, selectStudent, setSelectStudent} ) {


 //  const [selectStudent,setSelectStudent]=useState('Ph.D course')
  const clickPro = () => {
    setSelect('Professor') 
   
  }

  const clickStaffs=()=>{
    setSelect('Staffs')
  
  }

  


  return (
    <div className={styles.memberSide}>
       <div className={styles.title_member}>
          EVA
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
          <li className={styles.memberListItem} onClick={clickPro} style={{color: select === 'Professor' ? 'black' : 'grey'}} >Patient List</li>
          <li className={styles.memberListItem} onClick={clickStaffs}style={{color: select === 'Staffs' ? 'black' : 'grey'}}>Publication</li>
        </ul>
        </div>
      </div>

    </div>
  )
}

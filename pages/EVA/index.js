import React,{useEffect, useState} from 'react'
import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './members.module.css'

import MemberSide from '@/src/component/eva/Memberside/Memberside'
import Professor from '@/src/component/eva/Professor/Professor'
import Staffs from '@/src/component/eva/Staff/Staff'
//import StudentLayout from '@/src/component/members/studentLayout/StudentLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Members() {

  const [select,setSelect]=useState('Professor');

  const [selectStudent,setSelectStudent]=useState();

  const [page, setPage] = useState('');

  useEffect(() => {

    if (select === 'Staffs') {
      setPage('Staffs')
      
    }
    else{
      setPage('Professor')
    }
  },[select])


  return (
    <div style = {{}}>
      <Head>
        <title>
          LeeKunHee | WebDB | EVA
        </title>
      </Head>
    <div style ={{}}>

    
      <div className={styles.container}>

      

      <div className={styles.members}>

        <div className ={styles.sidePosition}>
        
        <div className={styles.membersLeft}>
        <MemberSide select={select} setSelect={setSelect} selectStudent = {selectStudent }   setSelectStudent = {setSelectStudent}  />
      </div>
    
      {select === 'Staffs'?
               
              <div className={styles.membersRight}>
              <Staffs/>
              </div>
              
              :
              <div className={styles.membersRight}>
              <Professor/>
              </div>
      } 
      
      </div>
      </div>
    </div>
     
    </div>
    </div>
  )
}

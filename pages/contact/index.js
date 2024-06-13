

import React from 'react'
import Map from '@/src/component/Map/Map';
import styles from './contact.module.css'
// import {RiMapPin2Fill} from "react-icons/ri";
// import {MdContactMail} from "react-icons/md";
// import {MdPersonSearch} from "react-icons/md";
// import { FaGraduationCap} from "react-icons/fa";
import { faXmark, faLocationDot,faContactBook, faMagnifyingGlass, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Head from 'next/head';
// import StudentLayout from '@/src/component/members/studentLayout/StudentLayout';

export default function Contact() {

  const toHomepage = () => {
    window.location.href='https://www.snuh.org/intro.do'

    return false
}
  return (
    <div>
      <Head>
        <title>
          LeeKunHee | WebDB | Contact
        </title>
      </Head>

      <div className ={styles.container}>

      <div className={styles.contact}>
      

       <div className={styles.contactRight}>
        
        
            <div className={styles.contact_header}>
              Contact
            </div>
         <div className={styles.contact_content}>
            <div className={styles.google_Map}>
                <Map/>
            </div>

            <div className={styles.address}>
               
               <span className={styles.address_title}><FontAwesomeIcon className={styles.address_icon} icon={faLocationDot} color = "#002650"  />Address</span>
               <span className={styles.address_content}>71, Daehak-ro, Jongno-gu, Seoul, Republic of Korea</span>
            </div>

            <div className={styles.email}>
               <span className={styles.email_title}>
               
               <FontAwesomeIcon className={styles.email_icon} icon={faContactBook} color = "#002650"  />
                 {/* <MdContactMail className="email_icon"/> */}
                 Email</span>
               <span className={styles.email_content}>geneticentlab@gmail.com</span>
            </div>

            <div className={styles.application}>
               <span className={styles.application_title}>
               <FontAwesomeIcon className={styles.application_icon} icon={faMagnifyingGlass} color = "#002650"  />
                 {/* <MdPersonSearch className="application_icon"/> */}
                 Application</span>
               <span className={styles.application_content}> A </span>
               <span className={styles.application_content}> B </span>
               <span className={styles.application_content}> C </span>
            </div>

            <div className={styles.department}>
               <span className={styles.department_title}>
               
               <FontAwesomeIcon className={styles.department_icon} icon={faGraduationCap} color = "#002650"  />
                 {/* <FaGraduationCap className="department_icon"/> */}
                 Department</span>
               <span className={styles.department_content}> @@@ </span>
               <span className={styles.department_content_mdi}  onClick={toHomepage} > https://www.snuh.org/intro.do </span>
            </div>
        </div>
       </div>
       </div>
     
    </div>
     
    </div>
  )
}

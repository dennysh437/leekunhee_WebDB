import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React,{useEffect,useState} from 'react'

import useInterval from '@/src/component/useInterval'


export default function Home() {

  const [position, setPosition] = useState(0);
  let [count, setCount] = useState(0);
  let [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(count + 1);
    console.log(count)
  }, delay);

  const onScroll = () => {
    setPosition(window.scrollY);
    console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  },[])

 

  return (
    <div>
    <div style ={{}}>
      <Head>
        <title>
           LeeKunHee | WebDB
        </title>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="P-d4C_H2QecrsaOjW_iwNbcNPeDz0j5LFn0eU3jMfas" />
      </Head>


      <style jsx>{`
            

          

           

         
                        `}

        </style>
      
      <div className ={styles.header}>
            <div className={styles.headerTitles}>

              <div className={styles.upper}>
                <div className={styles.container}>
                      <span className={styles.headerTitleSmall} style = {{ color: position > 0  ? "#dceff5" : null,}} >Lee Kun Hee</span>
                      <span className={styles.headerTitleSmall} style = {{ color: position > 0  ? "#dceff5" : null,}} >Child Cancer & Rare Disease Project</span>
                      <span className={styles.headerTitleSmall} style = {{ color: position > 0  ? "#dceff5" : null,}} >Lee Sang Yeon Research Team</span>

                </div>
                <div className = {styles.back} style = {{backgroundPositionY : position /1.2, opacity : 0.4 +  position/3}}>

                </div>

              </div>
              
                {/* <img style={{display: 'flex', width: '100%', height: '100%', objectFit: &quotcontain&quot}} src=&quotimages/main_design_img.png&quot alt=&quot/> */}
                
                
            {/* </div> */}
           

            {/* ================= Figure Section 1 ================= */}

            <div className={styles.section}>

              <div className={styles.figureBox}>
                <img
                  src="/images/2026.png"
                  className={styles.figureImage}
                  alt="2026 recruitment goal"
                />
              </div>

              <div className={styles.textBox}>

                <h1 className={styles.sectionTitle}>
                  2026 Patient Recruitment Goal
               </h1>

              <p className={styles.sectionText}>
                 Current progress toward the 2026 recruitment target
                 for pediatric rare disease patients.
              </p>

              </div>

            </div>


{/* ================= Figure Section 2 ================= */}

<div className={styles.section}>

  <div className={styles.figureBox}>
    <img
      src="/images/Barplot.png"
      className={styles.figureImage}
      alt="Annual participants"
    />
  </div>

  <div className={styles.textBox}>

    <h1 className={styles.sectionTitle}>
      Annual Participants by Syndrome
    </h1>

    <p className={styles.sectionText}>
      Number of enrolled participants by syndrome
      across different years.
    </p>

  </div>

</div>


{/* ================= Figure Section 3 ================= */}

<div className={styles.section}>

  <div className={styles.figureBox}>
    <img
      src="/images/dist.png"
      className={styles.figureImage}
      alt="Regional distribution"
    />
  </div>

  <div className={styles.textBox}>

    <h1 className={styles.sectionTitle}>
      Geographic Distribution of Participants
    </h1>

    <p className={styles.sectionText}>
      Regional distribution of enrolled families and
      participants across Korea.
    </p>

  </div>

</div>
            
   
        </div>
        </div>
    </div>


</div>
  )
}

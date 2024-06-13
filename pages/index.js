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
           


            <div style = {{display: 'flex', flexDirection:'column', position : 'relative' , marginTop: '100px', marginBottom: '100px', width: '100%', height: '100%',  justifyContent:'center', alignSelf:'center',}}>
              
            <p className = {styles.textContainer1} style = {{opacity: (position-100)/100}}>
              About Our Target Syndrome 
            </p>
            <p className = {styles.textContainer2} style = {{opacity: (position-140)/100}}>
            &quot;EVA Syndrome&quot;
            </p>
            <p className = {styles.textContainer3} style = {{opacity: (position-180)/100}}>
            {'Pre- or perilingual onset of sensorineural or mixed hearing loss, \nwhich may be fluctuating or progressive'}
            </p>
            <p className = {styles.textContainer4} style = {{opacity: (position-250)/50}}>
            &quot;USHER Syndrome&quot;
            </p>
            <p className = {styles.textContainer5} style = {{opacity: (position-300)/50}}>
            {'Three primary subtypes based on the severity and onset of subjective \nhearing loss, along with the presence of vestibular dysfunction.'}
            </p>
            <p className = {styles.textContainer6} style = {{opacity: (position-340)/50}}>
            &quot;BOR/BO Syndrome&quot;
            </p>
            <p className = {styles.textContainer7} style = {{opacity: (position-380)/100}}>
            {'Rare disorder that is clinically heterogeneous,\ncharacterized by anomalies of the ear, branchial arch, and renal system'}
            </p>

            </div>

            <div>

            </div>

            
          
          
        </div>
        </div>
    </div>


</div>
  )
}

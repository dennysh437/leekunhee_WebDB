import Head from 'next/head'
import styles from './publication.module.css'
import React,{useRef,useState} from 'react';


export default function Publication() {

  const jourRef=useRef(null);
  const confRef=useRef(null);


  const scrollHeight=162;
 
  const [select,setSelect]=useState('Journals');
  const onJourClick=()=>{
    jourRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
    setSelect('Journals')
  }
  const onConfClick=()=>{
    confRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
    setSelect('Conferences')
  }


  return (
    <div>
      <Head>
        <title>
          LeeKunHee | WebDB | Publication
        </title>
      </Head>

      <div style ={{}}>
     
      <div className={styles.publication}>
      <div className ={styles.container}>
        <div className={styles.pub_left}>
            <div className={styles.slider}>
            
              <div className={styles.title_research}>
                Publication
                <div className={styles.title_border}>
                  <div className={styles.title_left}>
                    
                  </div>
                  <div className={styles.title_right}>

                  </div>
                 </div>  
              </div>
              <div className={styles.pubContent}>
                  <ul className={styles.pub_list}>
                    <li className={styles.pub_item} onClick={onJourClick} style={{color: select === 'Journals' ? 'black' : 'grey'}}>Journals</li>
                    <li className={styles.pub_item} onClick={onConfClick} style={{color: select === 'Conferences' ? 'black' : 'grey'}}>Conferences</li>

                  </ul>
              </div>
              </div>
            
         </div>
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

        <div className={styles.pub_right}>
            <div className={styles.pub_header} >
              <div className={styles.pub_title}>
                Publication
              </div>
            </div>
            
            <div className={styles.international_journal} ref={jourRef}>
              | International Journals |
            </div>

            <div className={styles.journal_content}>

            <ul >
                <li className ={styles.conl}>Updates on Genetic Hearing Loss: From Diagnosis to Targeted Therapies.Yun Y, Lee SY. Journal of audiology & Otology. (2024 Apr) 28(2):88-92. doi: 10.7874/jao.2024.00157. Epub 2024 Apr 10.</li>
                <li className ={styles.conl}>Hwalin Yi, Yejin Yun, Won Hoon Choi, Hye-Yeon Hwang, Ju Hyuen Cha, Heeyuong Seok, Jae-Jin Song, Jun Ho Lee, Lee Sang-Yeon, Daesik Kim. CRISPR-based editing strategies to rectify EYA1 complex genomic rearrangement linked to haploinsufficiency. Molecular Therapy Nucleic Acids. (2024 Apr) 23;35(2):102199. doi: 10.1016/j.omtn.2024.102199. eCollection 2024 Jun 11.</li>     
            </ul>

            </div>

        </div>
    
      </div>

      
     </div>
    </div>
  )
}

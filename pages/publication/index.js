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
                <li className ={styles.conl}>Updates on Genetic Hearing Loss: From Diagnosis to Targeted Therapies.Yun Y, Lee SY. Journal of audiology & Otology. 2024 Apr 28(2):88-92.</li>
                <li className ={styles.conl}>CRISPR-based editing strategies to rectify EYA1 complex genomic rearrangement linked to haploinsufficiency. Hwalin Yi, Yejin Yun, Won Hoon Choi, Hye-Yeon Hwang, Ju Hyuen Cha, Heeyuong Seok, Jae-Jin Song, Jun Ho Lee, Lee Sang-Yeon, Daesik Kim. Molecular Therapy Nucleic Acids. 2024 Apr 23;35(2):102199.</li>     
                <li className ={styles.conl}>Molecular Genetic Etiology and Revisiting the Middle Ear Surgery Outcomes of Branchio-Oto-Renal Syndrome: Experience in a Tertiary Referral Center. Dong Woo Nam, Dae Woong Kang, So Min Lee, Moo Kyun Park, Jun Ho Lee, Seung Ha Oh, Myung-Whan Suh, Sang-Yeon Lee. Otol Neurotol. 2023 Jun 1;44(5):e319-e327</li>
                <li className ={styles.conl}>Phenotypic and molecular basis of SIX1 variants linked to non-syndromic deafness and atypical branchio- otic syndrome in South Korea. Somin Lee, Yejin Yun, Ju Hyuen Cha, Jin Hee Han, Dae Hee Lee, Jea-Jin Song, Moo Kyun Park, Jun Ho Lee, Seung Ha Oh, Byung Yoon Choi, Sang-Yeon Lee. Sci Rep. 2023 Jul 21;13(1):11776.</li>
                <li className ={styles.conl}>Allelic hierarchy for USH2A influences auditory and visual phenotypes in South Korean patients. Dong Woo Nam, Yong Keun Song, Jeong Hun Kim, Eun Kyoung Lee, Kyu Hyung Park, JuHyuen Cha, Byung Yoon Choi, Jun Ho Lee, Seung Ha Oh, Dong Hyun Jo, Sang-Yeon Lee. Sci Rep. 2023 Nov 19; 13(1):20239</li>
            </ul>

            </div>

        </div>
    
      </div>

      
     </div>
    </div>
  )
}

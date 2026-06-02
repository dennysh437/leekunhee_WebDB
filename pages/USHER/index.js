import React,{useEffect, useState} from 'react'
import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './research.module.css'

import ResearchSide from '@/src/component/usher/ResearchSide/researchSide'
import ResearchCD from '@/src/component/usher/researchCD/researchCD'
import ResearchUD from '@/src/component/usher/researchUD/researchUD'
import ResearchGD from '@/src/component/usher/researchGD/ResearchGD'

const inter = Inter({ subsets: ['latin'] })

export default function Members() {

  const [select,setSelect]=useState('CD');

  return (
    <div>
      <Head>
        <title>
          LeeKunHee | WebDB | USHER
        </title>
      </Head>

      <div className={styles.container}>
        <div className={styles.members}>
          <div className={styles.sidePosition}>

            <div className={styles.membersLeft}>
              <ResearchSide
                select={select}
                setSelect={setSelect}
              />
            </div>

            <div className={styles.membersRight}>
              {select === 'CD' && <ResearchCD />}
              {select === 'UD' && <ResearchUD />}
              {select === 'GD' && <ResearchGD />}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

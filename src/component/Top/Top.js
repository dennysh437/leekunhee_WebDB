import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from './top.module.css'
import { useState } from "react";
import Link from "next/link";

const Top = () => {

    const [toggle, setToggle] = useState(false);

    const barClick = () => {
        setToggle(!toggle);
        
    }
    return (
        <div style = {{ }}>
            <div className={styles.container}>
            {/* <div style = {{ flex : "100px 0 0"}}>
            <img src = "/images/LogoDesign_Eng.png" alt ="logo"/>
            로고 텍스트 이미지

            </div> */}

            <div className = {styles.navbar}>
                <div className = {styles.logo}>
                    <Link href="/">
                    <img className = {styles.back} src = "images/Rare_Logo.png" />

                   
                    </Link>
                </div>
                <ul className = {styles.links}>
                    <li><a href = "EVA" >EVA</a></li>
                    <li><a href = "USHER">USHER</a></li>
                    <li><a href = "BOR_BO">BOR/BO</a></li>
                    <li><a href = "publication">Publication</a></li>
                    
                </ul>
                <a href = "contact" className={styles.action_btn} style ={{color: "#fff"}}>Contact</a>
                <div className = {styles.togle_btn} onClick = {() => barClick()}>
                 {toggle ? 
                 <FontAwesomeIcon icon={faXmark} color = "#002650"  />
                 :
                 <FontAwesomeIcon icon={faBars} color = "#002650" />
                 }

                </div>

            </div>

            <div className ={toggle ? styles.dropDownMenuOpen : styles.dropDownMenu}>
                    <li><a href = "EVA" >EVA</a></li>
                    <li><a href = "USHER">USHER</a></li>
                    <li><a href = "BOR_BO">BOR/BO</a></li>
                    <li><a href = "publication">Publication</a></li>
                    <li><a href = "contact" className={styles.action_btn} style ={{color: "#fff"}}>Contact</a></li>
            </div>

      
            <style jsx>{`
            
                li {
                    list-style: none;
                }

                a {
                    text-decoration: none;
                    color : #484848;
                    font-size: 1.5rem;
                    font-family: 'Noto Sans KR','Open Sans',AppleGothic,helvetica,sans-serif;
                    
                }
                a:hover {
                    color : #0167b3;
                }

               

             
                            `}

            </style>


           
            </div>
           
        </div>
    )
}

export default Top;
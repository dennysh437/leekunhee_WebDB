
import styles from './footer.module.css'
const Footer = () => {

    const toHomepage = () => {
        window.location.href='https://github.com/hisstoryxx'
    
        return false
    }
    return (
        // position : "relative", padding : "0 2rem"
        <div style= {{}}>
        <div style = {{width:'100%', flexDirection:'column', bottom:'0', backgroundColor: '#002650',
         margin: '0 0.1rem',
         
    
    }}>
            <div style = {{width:'100%', display:'flex', justifyContent:'center', alignSelf:'center'}}>
            <img style= {{width: '20%'}} src = "/images/Rare_Logo2.png" alt ="logo"/>
            </div>

            <div className = {styles.text}>
                이건희과제 WebDB Site
            </div>
            <div className = {styles.text}>
            서울대학교병원 이비인후과 이상연 교수 연구팀
            </div>
            <div className = {styles.text}>
            (03082) 서울특별시 종로구 대학로 71
            </div>
            <div className = {styles.text}>
            (03082) 71, Daehak-ro, Jongno-gu, Seoul, Republic of Korea 
            </div>
            {/* <span className={styles.department_content_mdi}  onClick={toHomepage} > http://mdi.yonsei.ac.kr/</span> */}
            <div>
            
            </div>


            
        </div>


        </div>
    )
}

export default Footer;
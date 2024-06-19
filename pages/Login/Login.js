import React,{useState} from "react";
import styles from './login.module.css'
// import {Auth} from 'aws-amplify'
//import LNSuccess from "./modal/loginSuccess"
//import LNFail from "./modal/loginFail"


const TestUser = {
    email: 'admin',
    password: 'qwer1234!'
}


const Login = ({setIsLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email)

    const [openS, setOpenS] = useState(false)
    const [openF, setOpenF] = useState(false)

    const emailChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    const passwordChange = (event) => {
        // console.log(event.target.value)
        setPassword(event.target.value)
    }

    console.log(password.length)

    function Join(){
        // window.location.hash = "/signin"
    }
    
    function ResetPW(){
        // window.location.hash = "/resetPW"
    }

    const openModalS = () => {
        setOpenS(!openS);
      };
    const closeModalS = () => {
        setOpenS(false);
        window.location.hash = "/consulting"
        
    };
    const openModalF = () => {
        setOpenF(!openF);
      };
    const closeModalF = () => {
        setOpenF(false);
    };

  

    
    const loginToHomepage = async () => {
        
        if(email === TestUser.email && password === TestUser.password){
            setIsLogin(true)
           
        } else {
   
           alert('아이디와 비밀번호가 올바르지 않습니다.')
        }
        // try {
                            
        //     const user = await Auth.signIn(email, password);
        //     console.log('login success')
            

        //     //alert('로그인 되었습니다.')   // UI 만들까? 
        //     //window.location.href = "/consulting"
        //    openModalS();
           
    
        // } catch (error){
        
        //    openModalF()
        // }
         
    }
    
  return (
    <div className={styles.login_page}>
        <div className={styles.content}>
            <h1>로그인</h1>
            <h3>의료진 이메일</h3>
            <div className={styles.email_area}>
                <input className={styles.login_email} placeholder="ex. user@email.com" onChange={emailChange} />
            </div>
            <h3>비밀번호</h3>
            <div className={styles.password_area}>
                <input className={styles.login_password} placeholder="ex. ••••••••" onChange={passwordChange} type="password" />
            </div>
            <div className={styles.btn_area}>
                {/* <button className={styles.btn_join} onClick={Join}>회원가입</button> */}
                
                {password.length > 8 ? 
                
                <button className={styles.btn_login_confirm} 
                onClick={loginToHomepage}>로그인</button>
                :
                <button className={styles.btn_login} 
                onClick={loginToHomepage}>로그인</button>
                }
            </div>
        </div>
        <div className={styles.missing_pw}>
            <a className={styles.missingPWText} onClick={ResetPW}>비밀번호를 잊으셨나요?</a>
        </div>

            
        
        {/* <Modal isOpen={openS} className="modal_round" >
            <div className="modal_inner" >
            <div className="modal_bigText">로그인 성공</div>
            <div className="modal_smallText">로그인 되었습니다</div>
            <div className="border"/>
            <div ><button onClick={closeModalS}  >확인</button></div>
            </div>
        </Modal>
        <Modal isOpen={openF} className="modal_round">
            <div className="modal_inner">
            <div className="modal_bigText">로그인 실패</div>
            <div className="modal_smallText">이메일 혹은 비밀번호를 확인해주세요</div>
            <div className="border"/>
            <div><button onClick={closeModalF} >확인</button></div>
            </div> 
        </Modal> */}

    </div>
  )
}

export default Login;
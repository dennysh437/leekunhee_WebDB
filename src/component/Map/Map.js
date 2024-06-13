import styles from './map.module.css'
//import React,{Component} from 'react';
//import GoogleMapReact from 'google-map-react';

export default function Map() {
  
  return (
    <div className={styles.Map}>
    <iframe className={styles.map_content} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.0192553485033!2d126.99904588599985!3d37.577710846201995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca328c1520559%3A0x2b869399ba86134!2sSeoul%20National%20University%20Hospital%20Medical%20Research%20and%20Innovation%20Center!5e0!3m2!1sen!2skr!4v1718254742096!5m2!1sen!2skr" 
    loading="lazy"></iframe>
         
    </div>
  )
}



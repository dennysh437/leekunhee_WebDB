
import { useState } from 'react';
import styles from './choGallery.module.css'
import { 
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import testImage from '../../../public/images/vision.jpg'
const ChoGallery = ({galleryImages}) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const [title, setTitle] = useState("")
    
    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleTouch = (slideTitle) => {
        setTitle(slideTitle)
        console.log(slideTitle)
        
    }
    // close modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    // Previous Image
    const prevSlide = () => {
        slideNumber == 0 ?
        setSlideNumber( galleryImages.length - 1) 
        : setSlideNumber( slideNumber - 1)
    }
    // Next Image
    const nextSlide = () =>{ 
        slideNumber + 1 === galleryImages.length 
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)

        
    }
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position:'relative'}}>
            {openModal &&
                <div className = {styles.sliderWrap}>
                    <FontAwesomeIcon className={styles.btnPrev} icon={faCircleChevronLeft} onClick={prevSlide}/>
                    <FontAwesomeIcon className={styles.btnNext} icon={faCircleChevronRight} onClick={nextSlide} />
                    
                    <div className = {styles.fullScreenImage}>
                        <div style = {{display: 'flex', flexDirection :'column', alignItems:'center', width: '100%', height:'auto' }}>
                        <span className= {styles.textFullTitle}>  {galleryImages[slideNumber].title} </span>
                        <FontAwesomeIcon className={styles.btnClose} icon={faCircleXmark} onClick={handleCloseModal} />
                        <img src={galleryImages[slideNumber].img}  alt=''/>
                        </div>
                    </div>
                    
                </div>
            }

            {/* <br />
            Current slide number: {slideNumber}
            <br />
            Total Slides : {galleryImages.length} */}
            <br/>
            <div className={styles.header}>
            <span className={styles.textTitle}> {title} </span>
            </div>
            <br/>
            <div className= {styles.galleryWrap}>
                
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return(
                            <div 
                                className= {styles.single} 
                                key = {index}
                                onClick = { () => handleOpenModal(index)}
                                onMouseMove = {() => handleTouch(slide.title)}
                                >
                                <div className={styles.IContainer}>
                                <Image src={slide.img} width={100} height={100}  />
                                {/* <img src={slide.img}  alt ="" /> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
    )
}

export default ChoGallery;
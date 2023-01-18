import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faFutbol, faDumbbell, faDownload, faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const AboutMe = ({isEnglish}) => {

    const dowloadCV = () => {
        const fetchVal = isEnglish?"Eduardo_Orellana_CV2022-EN.pdf":"Eduardo_Orellana_CV22.pdf"
        fetch(fetchVal).then(res => {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = fetchVal;
                alink.click();
            })
        })
    }

  return (
    <section id='aboutMe' className='aboutMe'>
        <div className='aboutMe-container'>
            <h2>
                {isEnglish?"About me":"Sobre mí"}
            </h2>
            <div className='aboutMe-grid'>
                <div className='aboutMe-left'>
                    <span>{isEnglish?"Hi, i'm Eduardo Guerretta":"Hola, soy Eduardo Guerretta."}</span><br/><br/>I'm 24 years old and i'm an Enginnering of Informatic Systems student. Throughout my studies I've worked on different projects that have allowed me to learn and improve my skills as a web developer<br/><br/>I'm a optimistic, collavorative person, and i'm willing to give my all to improve.
                    <br/><br/>    
                    <button className='cvButton' type='button' onClick={dowloadCV}>
                        {isEnglish?"Download CV":"Descargar CV"} 
                        <FontAwesomeIcon icon={faDownload} />
                    </button>
                </div>
                <div className='aboutMe-right'>
                    <h3>Hobbies</h3>
                    <div className='intereses'>
                        <ul>
                            <li>
                                <FontAwesomeIcon className='intereses-i' icon={faGamepad} />
                                <span>{!isEnglish?"Juegos":"Games"}</span>
                            </li>
                            <li>
                                <FontAwesomeIcon className='intereses-i' icon={faFutbol} />
                                <span>{!isEnglish?"Fútbol":"Soccer"}</span>
                            </li>
                            <li>
                                <FontAwesomeIcon className='intereses-i' icon={faYoutube} />
                                <span>{!isEnglish?"Vídeos":"Videos"}</span>
                            </li>
                            <li>
                                <FontAwesomeIcon className='intereses-i' icon={faMugSaucer} />
                                <span>{!isEnglish?"Café":"Coffee"}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export { AboutMe }
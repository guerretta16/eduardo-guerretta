import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faFutbol, faDumbbell, faDownload, faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {

    const dowloadCV = () => {
        fetch('Eduardo_Orellana_CV22.pdf').then(res => {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Eduardo_Guerretta_CV22.pdf';
                alink.click();
            })
        })
    }

  return (
    <section id='aboutMe' className='aboutMe'>
        <div className='aboutMe-container'>
            <h2>
                Sobre mí
            </h2>
            <div className='aboutMe-grid'>
                <div className='aboutMe-left'>
                    <span>Hola, soy Eduardo Guerretta.</span><br/><br/>Tengo 24 años y soy estudiante de Ingeniería de Sistemas Informáticos. A lo largo de mis estudios he trabajado en diferentes proyectos que me han permitido aprender y mejorar mis habilidades como desarrollador web.<br/><br/>Soy una persona optimista, colaborativa y dispuesta a dar todo de si para mejorar.
                    <br/><br/>    
                    <button className='cvButton' type='button' onClick={dowloadCV}>
                        Descargar CV 
                        <FontAwesomeIcon icon={faDownload} />
                    </button>
                </div>
                <div className='aboutMe-right'>
                    <h3>Hobbies</h3>
                    <div className='intereses'>
                        <ul>
                            <li>
                                <FontAwesomeIcon className='intereses-i' icon={faGamepad} />
                                <span>Juegos</span>
                            </li>
                            <li>
                                <FontAwesomeIcon className='intereses-i' icon={faFutbol} />
                                <span>Fútbol</span>
                            </li>
                            <li>
                                <FontAwesomeIcon className='intereses-i' icon={faYoutube} />
                                <span>Vídeos</span>
                            </li>
                            <li>
                                <FontAwesomeIcon className='intereses-i' icon={faMugSaucer} />
                                <span>Café</span>
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
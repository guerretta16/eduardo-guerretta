import React from 'react';
import htmlIco from '../../assets/skills/html-ico.png';
import cssIco from '../../assets/skills/css-ico.png';
import jsIco from '../../assets/skills/js-ico.png';
import phpIco from '../../assets/skills/php-ico.png';
import bootIco from '../../assets/skills/boot-ico.png';
import reactIco from '../../assets/skills/react-ico.png';
import tailIco from '../../assets/skills/tail-ico.png';
import laravelIco from '../../assets/skills/laravel-ico.png';
import mysqlIco from '../../assets/skills/mysql-ico.png';

const Skills = () => {
  return (
    <section id='skills' className='skills'>
        <div className='skills-container'>
            <h2>Skills</h2>
            <ul>
                <li>
                    <img className='skills-ico' src={htmlIco} alt="html"/>
                    <span>HTML</span>
                </li>
                <li>
                    
                    <img className='skills-ico' src={cssIco} alt="css"/>
                    <span>CSS</span>
                </li>
                <li>
                    
                    <img className='skills-ico' src={jsIco} alt="js"/>
                    <span>Javascript</span>
                </li>
                <li>
                    
                    <img className='skills-ico' src={phpIco} alt="php"/>
                    <span>PHP</span>
                </li>
                <li>
                    <img className='skills-ico' src={laravelIco} alt="laravel"/>
                    <span>Laravel</span>

                </li>
                <li>
                    <img className='skills-ico' src={reactIco} alt="react"/>
                    <span>React Js</span>

                </li>
                <li>
                    <img className='skills-ico' src={bootIco} alt="bootstrap"/>
                    <span>Bootstrap</span>

                </li>
                <li>
                    <img className='skills-ico' src={tailIco} alt="tailwind"/>
                    <span>Tailwind CSS</span>

                </li>
                <li>
                    <img className='skills-ico' src={mysqlIco} alt="mysql"/>
                    <span>MySQL</span>

                </li>
            </ul>
        </div>
    </section>
  )
}

export { Skills }
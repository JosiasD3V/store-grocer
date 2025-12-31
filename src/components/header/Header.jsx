import React from 'react'
import './header.css'
import headerIMG from '../../assets/headerimg.png'
import carne from '../../assets/carne.png'
import refrigerantes from '../../assets/refrigerantes.png'
import frutas from '../../assets/frutas.png'
import pao from '../../assets/pao.png'
import allitens from '../../assets/all.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCoffee } from '@fortawesome/free-solid-svg-icons'


export const Header = () => {
  return (
    <>
    <div className='container'>.</div>
    <header>
        <nav>
            <ul>
                <li>
                    Store-grocer
                </li>
                <li>
                    <input type="text" />
                    
                      <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>


                </li>
                <li>
                    <FontAwesomeIcon icon={faCoffee} />
                </li>
            </ul>
        </nav>
    </header>
    <div className='headerIMG'>
        <img src={headerIMG} alt="headerIMG" />
    </div>

    <div className='BuscaProdutos'>
        <nav>
            <ul>
                <li className='liImgs'>
                    <div className='prodIMG'>
                    <img src={allitens} alt="carne" />
                    <p>Todos</p>
                    </div>
                </li>
                <li className='liImgs'>
                    <div className='prodIMG'>
                    <img src={carne} alt="carne" />
                    <p>Açougue</p>
                    </div>
                </li>
                <li className='liImgs'>
                    <div className='prodIMG'>
                    <img src={pao} alt="pao" />
                    <p>Padaria</p>
                    </div>
                </li>
                <li className='liImgs'>
                    <div className='prodIMG'>
                        <img src={frutas} alt="frutas" />
                        <p>Hortfrut  </p>       
                    </div>
                </li>
                <li className='liImgs'>
                     <div className='prodIMG'>
                    <img src={refrigerantes} alt="refrigerantes" />
                    <p>Bebidas</p>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
    </>
  )
}

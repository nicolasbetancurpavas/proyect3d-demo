import React from 'react'
import logo from '../../assets/img/logo.png'
import './desktop.css'
import './mobile.css'
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Context } from '../context';
import { useContext } from 'react';

export const NavBar = () => {
    const { openNav, navMenu } = useContext(Context)
    console.log(navMenu)
    return (
        <div className='navbar'>
            <div className='container__navbar'>
                <div className='navbar__top'>
                    <img className='navbar__img' alt='img-logo' src={logo} />
                    <span className='icon-menu' onClick={openNav}>
                        <DehazeRoundedIcon
                            style={{
                                fontSize: '1.8rem',
                                zIndex: 100,
                                color: '#1f1f22'
                            }}
                        />
                    </span>
                </div>
                <div className={`navigation ${navMenu ? 'open-nav' : null}`}>
                    <span className='close-btn' onClick={openNav}>
                        <CloseRoundedIcon
                            style={{
                                fontSize: '1.8rem',
                            }}
                        />
                    </span>
                    <div className='container__navigation'>
                        <a href='#s' className='navigation__item'>
                            Productos
                        </a>
                        <a href='#s' className='navigation__item'>
                            Proyectos
                        </a>
                        <a href='#s' className='navigation__item'>
                            Tecnologia 3D
                        </a>
                        <a href='#s' className='navigation__item'>
                            Contacto
                        </a>
                        <a href='#s' className='navigation__item'>
                            mas
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

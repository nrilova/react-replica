import React from 'react'
import girl from './../images/landing-page-girl.png'
import {Link} from 'react-router-dom'
import './../App.css'
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

export default function Soundwave() {
    return (
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
        <div className='pagina1'>
            <div className='colum1'>
                <img className='girl' src= {girl} ></img>
            </div>

            <div className='colum2'>
                <h1>
                    Feel The Music            
                </h1>
                <p className='text'>
                    Stream over 20 thousand songs with one click
                </p>
                <Link to="Join" className='buttonlink'>
                    <Button variant="primary">Join Now</Button>
                </Link>
            </div>
        </div>
        </ThemeProvider>
    )
}
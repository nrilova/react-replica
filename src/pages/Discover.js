import React from 'react'
import './../App.css'
import charts from './../images/microphone.svg'
import albums from './../images/albums.svg'
import more from './../images/more.svg'
import covers from './../images/covers.jpg'
import ThemeProvider from 'react-bootstrap/ThemeProvider';



export default function Discover() {
    return (
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
        <div className='pagina2'>
            <div className='colum2-1'>
                <h1>Discover new music</h1>
                <div className='items'>
                    <div className='item1'>
                        <img className='charts' src= {charts} ></img>
                        <p>Charts</p>
                    </div>
                    <div className='item2'>
                        <img className='albums' src= {albums} ></img>
                        <p>Albums</p>
                    </div>
                    <div className='item3'>
                        <img className='more' src= {more} ></img>
                        <p>More</p>
                    </div>
                </div>
                <p className='joining'>By joining you can benefit by listening to the latest albums released.</p>
            </div>
            <div className='colum2-2'>
                <div>
                    <img className='covers' src= {covers} ></img>
                </div>
            </div>
        </div>
        </ThemeProvider>
    )
}
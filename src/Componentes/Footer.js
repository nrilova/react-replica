import './../App.css'
import twitter from './../images/facebook.svg'
import facebook from './../images/twitter.svg'
import {Link} from 'react-router-dom'
import ThemeProvider from 'react-bootstrap/ThemeProvider';


const Footer = () => {
    return(
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
        <div className='footer'>
            <div className="nav-footer">
                <ul>
                    <li><Link to="" className='link'>About Us</Link></li>
                    <li><Link to="" className='link'>Contact</Link></li>
                </ul>
            </div>
            <div className="nav-rrss">
                <img className='facebook' src= {facebook} ></img>
                <Link to="" className='link'>Facebook</Link>
                <img className='twitter' src= {twitter} ></img>
                <Link to="" className='link'>Twitter</Link>

            </div>
            </div>
        </ThemeProvider>
    )
}
export default Footer
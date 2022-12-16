
import logo from './../images/logo.svg'
import { Outlet,Link,} from 'react-router-dom'
import './../App.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider';


const NavBarExample = () => {
    return(
        <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs">
        <>
        <div className='container'>
            <div className='logotipo'>
                <img className='logo' src= {logo} ></img>
                <Link to="/" className='link'>Soundwave</Link>

            </div>
            <div className="nav">
                <ul>
                    <li><Link to="Discover" className='link'>Discover</Link></li>
                    <li><Link to="Join" className='link'>Join</Link></li>
                </ul>
            </div>
            </div>
        <section>
            <Outlet></Outlet>
        </section>
        </>
        </ThemeProvider>
    )
}
export default NavBarExample
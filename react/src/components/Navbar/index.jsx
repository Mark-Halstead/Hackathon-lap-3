import PageLinks from '../PageLinks'
const Navbar = () => {
    return (
        <nav className='navbar'>
          <div className='nav-center'>
            <div className='nav-header'>
              <button type='button' className='nav-toggle' id='nav-toggle'>
                <i className='fas fa-bars'></i>
              </button>
            </div>
    
            <PageLinks parentClass='nav-links' itemClass='nav-link' />
          </div>
        </nav>
    )
}
export default Navbar

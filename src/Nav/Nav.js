import React, { useContext } from 'react'
import '../Sass/Sass.scss'
import { Icon } from '@iconify/react';
import Flip from '../Nav/images/plus_aef861.png'
import { stateContext } from '../stateContext';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Nav = () => {
  const navigate=useNavigate()
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { state: { searchQuary }, dispatch } = useContext(stateContext)
  const seachFun = (e) => {
    dispatch({
      type: 'search',
      payload: e.target.value
    })
  }
  return (
    <div>
      <nav className='navbar'>
        <div>
          <h3>Flipkart</h3>
          <a>Explor<img src={Flip} alt='error' /></a>
        </div>

        <div className='with'> 
          <input type='search'
            onChange={(e) => seachFun(e)}
            placeholder='Search....' />  
          <span><Icon className='ser'style={{color:'blue',position: 'absolute',top: '10px',right: '28px'}} icon="material-symbols:search" /></span>
        </div>

        <div>
          <button className='btn2'>Login</button>
        </div>

        <div>
          <h3>Become a Seller</h3>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <h3 style={{fontWeight:'600',fontSize:'14px'}}>More</h3><span style={{ marginTop: '7px' }}><Icon icon="gridicons:dropdown" /></span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={() => navigate('/fav')}>Favarite</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3>Card</h3><span style={{ marginTop: '7px' }}><Icon icon="material-symbols:shopping-cart" /></span>
        </div>


      </nav>
    </div>
  )
}

export default Nav
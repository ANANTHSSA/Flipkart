import React, { useContext } from 'react'
import { Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import { stateContext } from '../stateContext';
import { CardActionArea } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import img from '../Favpage/images/fa_62673a.png'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Profile from './images/images.jpg'

const Fav = () => {
  const { state: { getFav, card }, dispatch } = useContext(stateContext);
  console.log(card);
  console.log(getFav);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
      <Nav />
      <ul className='fav-product-list'>
        <li>Electronics<Icon icon="material-symbols:arrow-drop-down-rounded" /></li>
        <li>Tv & Appliences<Icon icon="material-symbols:arrow-drop-down-rounded" /></li>
        <li>Men<Icon icon="material-symbols:arrow-drop-down-rounded" /></li>
        <li>Women<Icon icon="material-symbols:arrow-drop-down-rounded" /></li>
        <li>Baby & Kits<Icon icon="material-symbols:arrow-drop-down-rounded" /></li>
        <li>Home & Furnitures<Icon icon="material-symbols:arrow-drop-down-rounded" /></li>
        <li>Sports,Books & More<Icon icon="material-symbols:arrow-drop-down-rounded" /></li>
        <li>Flights</li>
        <li>Offer Zone</li>
      </ul>
      <div className='fav'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='favarite'>
                <div className='fav-img'>
                  <img src={Profile} />
                  <div className='fav-content'>
                    <p>Hello,</p>
                    <h3>Ananthssa S</h3>
                  </div>
                </div>
                <div className='fav-log'>
                  <h4><span><Icon icon="material-symbols:drive-file-move-sharp" /></span><h4 style={{ marginRight: "125px" }}>MY ORDERS</h4><span><Icon icon="material-symbols:arrow-forward-ios-rounded" /></span></h4>
                  <hr></hr>
                  <h4><span><Icon icon="iconamoon:profile-fill" /></span><span style={{ color: "black", marginRight: "110px" }}>ACCOUNT SETTINGS</span></h4>
                  <h6>Profile Information</h6>
                  <h6>Manage Address</h6>
                  <hr></hr>
                  <h5><span style={{ paddingRight: '15px' }}><Icon icon="ant-design:logout-outlined" /></span>Logout</h5>
                </div>
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='wishlist'>
                <h4>My wishlist</h4>
              </div>

              {getFav.flat()?.map((value, index) => {
                return (<div className='col-lg-12 ssa' key={index}>
                  <Card>

                    {/* <CardActionArea> */}
                    <div className='cards' style={{ display: 'flex' }}>
                      <div className='card-img'>
                        <img src={value.image} />
                      </div>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='title'>
                          <h5>{value.head}</h5>
                          <p>{value.sub}</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='star'>
                          <p className='rate'>{value.rating}<Icon className='rate-icon' icon="material-symbols:star-rounded" width="20" height="20" /></p>
                          <p>({value.rate})</p>
                          <img src={img} width="90px" height="auto" alt='' />
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='amount'>
                          <h3>₹{value.originalprice}</h3>
                          <p className='amount1'><del>₹{value.price}</del></p>
                          <h4>{value.offer}% of</h4>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='free'>
                          <h3>Free Delivery</h3>
                        </Typography>
                      </CardContent>
                      <div className='card-del'>
                        <Icon icon="ic:baseline-delete" style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => dispatch({ type: 'UNFAV', payload: value })} />
                      </div>
                    </div>
                    {/* </CardActionArea> */}
                  </Card>
                </div>
                );
              })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Fav 

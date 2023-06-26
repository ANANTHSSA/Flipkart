import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import '../Sass/Sass.scss'
import Button from '@mui/material/Button';
import img from '../CardDetails/images/fa_62673a.png'
import { stateContext } from '../stateContext';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Details = () => {
  const { state: { getDetails }, dispatch } = useContext(stateContext);
  console.log(getDetails);
  const navigate = useNavigate();


  const addcard = (value) => {
    navigate('/addcard');
    dispatch({ type: 'ADD CARD', payload: value })
  }


  const Buy=(value)=>{
    navigate('/buynow');
    dispatch({type:'BUYNOW',payload:value})
  }
  return (
    <>
    <Nav/>
      <div className='details'>
        <div className='container'>
          <div className='row'>
            <div className='details-nav'>

            </div>
            {[getDetails]?.map((value, index) => {
              return <>
                <div className='col-lg-4' key={index}>
                  <div className='details-img'>
                    <img src={value.image} />
                    <Button variant="contained" onClick={() => navigate('/addcard')} className='btn'><Icon icon="jam:thunder-f" style={{ fontSize: '22px' }} />ADD TO CARD</Button>
                    <Button variant="contained" onClick={()=>navigate('/buynow')} className='btn1'><Icon icon="jam:thunder-f" style={{ fontSize: '22px' }} />BUY NOW</Button>
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div className='details-content'>
                    <h3>{value.head}</h3>
                    <div className='amount1'>
                      <h4>{value.rating}<Icon icon="ic:round-star-rate" /></h4>
                      <span>1,42,838 Ratings & 15,987 Reviews</span>
                      <h5><img src={img} style={{ width: '25%' }}></img></h5>
                    </div>
                    <Typography variant="body2" color="text.secondary" className='amount'>
                      <h1>₹{value.originalprice}</h1>
                      <h3 style={{ color: '#cac7c7' }}><del>₹{value.price}</del></h3>
                      <h3 style={{ color: 'green' }}>{value.offer}% of <Icon icon="solar:danger-circle-bold-duotone" /></h3>
                    </Typography>

                    {/* color-content */}
                    {value.images ? (<div className='color' style={{ display: 'flex' }}>
                      <div className='col-lg-4'>
                        <h4>Color</h4>
                      </div>
                      <div className='col-lg-8'>
                        <div className='color-img row'>
                          <img src={value.headimg1}/>
                          <img src={value.headimg2}/>
                          <img src={value.headimg3}/>
                        </div>
                      </div>
                    </div>) : ('')}

                    {/* Highlights */}

                    <div className='highlight' style={{ display: 'flex' }}>
                      <div className='col-lg-4'>
                        <h4>Highlights</h4>
                      </div>
                      <div className='col-lg-8'>
                        <div className='highlight-content row'>
                          <ul style={{lineHeight:'26px',fontSize:'14px'}}>
                            <li>{value.highlights1}</li>
                            <li>{value.highlights2}</li>
                            <li>{value.highlights3}</li>
                            <li>{value.highlights4}</li>
                            <li>{value.highlights5}</li>
                            <li>{value.highlights6}</li>
                            <li>{value.highlights7}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  {/* seller */}
                  <div className='highlight' style={{ display: 'flex' ,marginBottom:'20px'}}>
                      <div className='col-lg-4'>
                        <h4 style={{fontSize:'18px'}}>seller</h4>
                      </div>
                      <div className='col-lg-8'>
                        <div className='highlight-content row'>
                          <ul style={{lineHeight:'26px',fontSize:'14px'}}>
                            <li style={{color:'blue'}}>{value.seller}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
 
                    {/* Specification */}


                    <div className='specific'>
                      <div className='col-lg-12'>
                        <h3>Specification</h3>
                        <hr></hr>
                      </div>
                      <div className='specific-content'>
                        <h4>General</h4>
                        <div className='row'>
                          <div className='col-lg-4 space'>
                            <p>ModelName</p>
                          </div>
                          <div className='col-lg-8'>
                            <p>{value.modelname}</p>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-4 space'>
                            <p>Color</p>
                          </div>
                          <div className='col-lg-8'>
                            <p>{value.color}</p>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-4 space'>
                            <p>Type</p>
                          </div>
                          <div className='col-lg-8'>
                            <p>{value.type}</p>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-4 space'>
                            <p>Package</p>
                          </div>
                          <div className='col-lg-8'>
                            <p>{value.package}</p>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-4 space'>
                            <p>features</p>
                          </div>
                          <div className='col-lg-8'>
                            <p>{value.features}</p>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-4 space'>
                            <p> Design</p>
                          </div>
                          <div className='col-lg-8'>
                            <p>{value.design}</p>
                          </div>
                        </div>
                        <hr></hr>
                        <a href='#'>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            })}
          </div>
        </div>
      </div>
    <Footer/>  
    </>
  )
}

export default Details

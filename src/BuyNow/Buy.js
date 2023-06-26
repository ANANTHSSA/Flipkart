import React, { useContext, useEffect, useState } from 'react'
import '../Sass/Sass.scss'
import { Icon } from '@iconify/react';
import Flip from '../Addcard/images/plus_aef861.png'
import fl from '../Addcard/images/fa_62673a.png'
import Button from '@mui/material/Button';
import { stateContext } from '../stateContext';
const Buy = () => {

const{state:{ getDetails },dispatch}=useContext(stateContext);
console.log(getDetails.qty);

const [qty, setQty] = useState(1)

 const reduceQty = () => {
    // getDetails.qty-=1;
    if(qty > 0) setQty(prev => prev-1)
 }

 const addQty = (qty) => {
    // qty= qty+1;
    setQty(prev => prev+1)
    console.log('add');
 }

//  useEffect(() =>{
// addQty();
// reduceQty()
//  },[qty])
    return (
        <>
        {[getDetails]?.map((value, index) => {
         return <div style={{backgroundColor:"#f1f3f6"}} >
                <div className='buy'>
                    <div className='buy1 container'>
                        <div className='buy3'>
                            <h3>Flipkart</h3><br/>
                            <a>Explor<span>plus</span><img src={Flip} alt='error'/></a>
                        </div>
                    </div>

                </div>

                <div className='BUY'>
                        <div className='BUY1'>
                            <div className='BU1'>
                                <div>                            
                                 <h4><span><Icon icon="mdi:number-1-box-outline" /></span>LOGIN</h4>
                                <h6>Ananthssa s +9539292932</h6>
                                </div>
                                <div className='BU-BTN'>
                                <Button variant="outlined">CHANGE</Button>
                                </div>
                                </div>

                            <div className='BU2'>
                            <div>    
                            <h4><span><Icon icon="mdi:number-2-box-outline" /></span>DELIVERY ADDRESS</h4>
                                <h6>Ananthssa 117,kurumbalaperi,Tamilaa Nadu - 621316</h6>
                            </div>
                            <div className='BU-BTN'>
                            <Button variant="outlined">CHANGE</Button>
                            </div>
                            </div>
                            <div className='BU3A container'>
                            <h4><span><Icon icon="mdi:number-3-box-outline" /></span>ORDER SUMMARY</h4>    
                            </div>
                            <div className='BU3'>
                                <div className='B1'>
                                    <img src={value.image} alt='error'/>
                                    <div className='sa1'>
                                        <button onClick={reduceQty}>-</button>
                                        <input type='text' value={qty}/>
                                        <button onClick={() => addQty(value.qty)}>+</button>
                                    </div>
                                </div>

                                <div className='B2'>
                                    <h3>{value.head}</h3>
                                    <p>{value.sub}</p>

                                    <p>Seller:{value.seller} Online<span><img src={fl} alt='error'/></span></p>

                                    <h4><del>₹{value.originalprice}</del>₹{Math.round(value.originalprice * (100 - value.offer)/100)}<span style={{fontWeight:'700', paddingLeft:10}}> {value.offer}%Off 2offers applied <Icon icon="solar:danger-circle-bold-duotone" /></span></h4>
                                    <div className='SA1'>
                                        <h5>REMOVE</h5>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='BU4'>
                                <h6>Order confirmation email will be sent to ananth@gmail.com</h6>
                                <button>Submit</button>
                            </div>

                        </div>
                    <div className='BUY2' style={{backgroundColor:"#fff"}}>
                        <div className='BUY2A'>
                        <h2>PRICE DETAILS</h2><hr/>

                        <h6><span>Price (1 item)</span><span> ₹{value.originalprice * qty}</span></h6>
                        <h6><span>Discount</span><span className='sp'>-{Math.round(value.originalprice * value.offer/100) * qty}</span></h6>
                        <h6><span>Delivery Charges</span><span className='sp'> Free</span></h6>
                        <h3><span>Total Amount</span><span className='sp'>₹{Math.round(value.originalprice * (100 - value.offer)/100) * qty}</span></h3>
                     <hr/>
                        </div>
                        <div className='BUY2-content'>
                    <Icon icon="mingcute:safety-certificate-fill" style={{marginTop:'10px'}} />
                    <div className='BUY3-content'>
                        <p>Safe and Secure Payments.Easy returns.100%<br></br>Authentic Products</p>
                    </div>
                    </div>
                    </div>
                </div>
        </div>
    })}
    </>
      )
    }
export default Buy





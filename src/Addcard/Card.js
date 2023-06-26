import React, { useContext, useState } from 'react'
import '../Sass/Sass.scss'
import { Icon } from '@iconify/react';
import Flip from '../Addcard/images/plus_aef861.png'
import ps from '../Addcard/images/-original-imagg5jscr4hcuqc.webp'
import fl from '../Addcard/images/fa_62673a.png'
import { stateContext } from '../stateContext';
const Card = () => {
    const{state:{ getDetails },dispatch}=useContext(stateContext);
    console.log(getDetails);
    
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
    console.log(getDetails)
    
    return (
        <>
        {[getDetails]?.map((value, index) => {
        return <div style={{backgroundColor:"#f1f3f6"}} >
                <div className='sec' >
                    <div className='sec1'>
                        <div className='sec3'>
                            <h3>Flipkart</h3><br/>
                            <a>Explor<span>plus</span><img src={Flip} alt='error'/></a>
                        </div>

                        <div className='sec4'>
                                <input type='search' placeholder='Enter password'/>
                                <span><Icon className='ser' icon="material-symbols:search" /></span> 
                        </div>
                        
                    </div>

                    <div className='sec2'>
                                <button className='btn2'>Login</button>
                    </div>

                </div>

                <div className='SEC'>
                        <div className='SEC1'>
                            <div className='SE1'>
                                <h3>Flipkart</h3>
                                <h3>Grocery</h3>
                            </div>

                            <div className='SE2'>
                                <p>From Saved Addresses</p>
                                <button>Enter Delivery Pincode</button>
                            </div>

                            <div className='SE3 col-lg-12'>
                                <div className='S1'>
                                    <img src={value.image} alt='error'/>
                                    <div className='sa1'>
                                        <button onClick={reduceQty}>-</button>
                                        <input type='text' value={qty}></input>
                                        <button  onClick={() => addQty(value.qty)}>+</button>
                                    </div>
                                </div>

                                <div className='S2 col-lg-8'>
                                    <p>{value.sub} 1.7 Kg, With MS Office</p>
                                    <h3>{value.head}</h3>

                                    <p>Seller:{value.seller} Online<span><img src={fl} alt='error'/></span></p>

                                    <h4><del>₹{value.originalprice}</del>₹{Math.round(value.originalprice * (100 - value.offer)/100)}<span style={{fontWeight:'700', paddingLeft:10}}> {value.offer}%Off applied <Icon icon="solar:danger-circle-bold-duotone" /></span></h4>
                                    <div className='SA1'>
                                        <h5>SAVE FOR LATER</h5>
                                        <h5>REMOVE</h5>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='SE4'>
                                <button>PLACE ORDER</button>
                            </div>

                        </div>
                    <div className='SEC2' style={{backgroundColor:"#fff"}}>
                        <div className='SEC2A'>
                        <h2>PRICE DETAILS</h2><hr/>

                        <h6><span>Price (1 item)</span><span> ₹{value.originalprice * qty}</span></h6>
                        <h6><span>Discount</span><span className='sp'>-{Math.round(value.originalprice * value.offer/100) * qty}</span></h6>
                        <h6><span>Delivery Charges</span><span className='sp'> Free</span></h6>
                        <h3><span>Total Amount</span><span className='sp'>₹{Math.round(value.originalprice * (100 - value.offer)/100) * qty}</span></h3>
                        </div>
                        <div className='SEC2-content'>
                        <Icon icon="mingcute:safety-certificate-fill" style={{marginTop:'10px'}} />
                    <div className='SEC3-content'>
                        <p>Safe and Secure Payments.Easy returns.100%<br></br>Authentic Products</p>
                    </div>
                    </div>
                    </div>
                </div>
        </div>
        })}
        hi
        </>
      )
    }
export default Card





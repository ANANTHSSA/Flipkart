import React, { useContext, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import img from './image/fa_62673a.png';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useNavigate } from 'react-router-dom';
import { stateContext } from '../stateContext';
// import { AlignVerticalBottom } from '@mui/icons-material';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const options = [500, 1500, 2500, 3500, 5000];

function valuetext(value) {
  return `${value}°C`;
}
const Headphones = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const { state: { brand, card, checked, checked1,checked2,checked3,checked4,checked5,checked6,checked7,checked8,searchQuary}, dispatch } = useContext(stateContext);
  // const { state: { brand1, checked1}, dispatch } = useContext(stateContext);
  const navigate = useNavigate();
  console.log(card);

  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [value, setValue] = React.useState([]);
  console.log(min, max);

  const onOptionChangeHandler = (event) => {
    setMin(event.target.value/ 5000 * 100)
  }
  const onOptionChangeHandler2 = (event) => {
    setMax(event.target.value /5000 * 100)
   
  }


  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  useEffect(() =>{
    setValue([min,max]);
  },[min, max])

  const details = (value) => {
    navigate('/details');
    dispatch({ type: 'DETAILS', payload: value })
  }
  console.log(details);

  const getFav = (value) => {
    dispatch({ type: 'FAV', payload: value })
  }

 

  const transformedProduct = () => {
    let sortedProduct = card;

    
    if(min && max){
      sortedProduct = sortedProduct.filter(e => min*50 <= +e.originalprice && +e.originalprice <= max*50)
     
      return sortedProduct
    }

    if(brand === 'AKG' && checked){
      sortedProduct = sortedProduct.filter(e => e.head.toLowerCase().includes(brand.toLowerCase()))
      return sortedProduct;
    }
    
    if(brand === 'boat' && checked1){
      sortedProduct = sortedProduct.filter(e => e.head.toLowerCase().includes(brand.toLowerCase()))
      return sortedProduct
    }

    if(brand === 'Aroma' && checked2){
      sortedProduct = sortedProduct.filter(e => e.head.toLowerCase().includes(brand.toLowerCase()))
      return sortedProduct
    }

    if(brand === 'Logitech' && checked3){
      sortedProduct = sortedProduct.filter(e => e.head.toLowerCase().includes(brand.toLowerCase()))
      return sortedProduct
    }

    if(brand === 'Mivi' && checked4){
      sortedProduct = sortedProduct.filter(e => e.head.toLowerCase().includes(brand.toLowerCase()))
      return sortedProduct
      console.log(brand);
      console.log(checked4);
    }
    
    if(brand === '4' && checked5){
      sortedProduct = sortedProduct.filter(e => e.rating >='4')
      console.log(brand);
      console.log(checked5);
      return sortedProduct
    }
    

    if(brand === '3' && checked6){
      sortedProduct = sortedProduct.filter(e => e.rating >='3' && e.rating < '4')
      return sortedProduct
    }

    if(brand === '2' && checked7){
      sortedProduct = sortedProduct.filter(e => e.rating >='2' && e.rating < '3') 
      return sortedProduct
    }

    if(brand === '1' && checked8){
      sortedProduct = sortedProduct.filter(e => e.rating >='1' && e.rating < '2')
      return sortedProduct
    }
    return sortedProduct;

  }


  return (
    <>
    <Nav/>
      <div className='slide-2'>
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
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2'>
              <div className='product-range'>

                <div className='product-fil'>
                  <h1>Fliter</h1>
                  <h3 className='clr-btn'>CLEAR ALL</h3>

                </div>
                {/* <div className='akg'>
                 <button><Icon className='akg-icon' icon="uim:multiply" />AKG</button>
             </div> */}
                <div className='product-bot'>
                </div>
                <div className='cate'>
                  <h3>CATEGORIES</h3>
                  <h4>Audio & Video</h4>
                  <p>Headset</p>
                </div>
                <div className='product-bot'>
                </div>
                <Box sx={{ width: 190 }}>
                  {/* <Slider
        getAriaLabel={() => 'Temperature range'}
        // value={value}
        // onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      /> */}
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    // onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
                <div className='select'>

                  <div>
                    <select onChange={onOptionChangeHandler}>

                      <option>Min</option>
                      {options.map((option, index) => {
                        return <option key={index} >
                          {option}
                        </option>
                      })}
                    </select>
                  </div>
                  <div className='to'>
                    <p>to</p>
                  </div>

                  <div>
                  <select onChange={onOptionChangeHandler2}>

<option>Max</option>
{options.map((option,index) => {
  return <option key={index} >
    {option}
  </option>
})}
</select>
                  </div>
                  <div className='product-bot'>
                  </div>


                </div>
                <div className='checked'>
                  <h4>BRAND</h4>
                  <input type="checkbox"
                    checked={checked}
                    onChange={() => dispatch({
                      type: 'FILTER_BRAND',
                      payload :{ name : 'AKG', bool : true}
                    })} id="headphone1" name="headphone1" value="headphone"></input>
                  <label for="headphone1"> AKG</label><br></br>
                  <input type="checkbox" 
                   checked={checked1}
                   onChange={() => dispatch({
                     type: 'FILTER_BRAND1',
                     payload :{ name : 'boat', bool : true}
                   })}
                   id="headphone2" name="headphone2" value="headphone"></input>
                  <label for="headphone2"> boAt</label><br></br>
                  <input type="checkbox"
                  checked={checked2}
                    onChange={() => dispatch({
                      type: 'FILTER_BRAND2',
                      payload :{ name : 'Aroma', bool : true}
                    })}
                     id="headphone3" name="headphone3" value="headphone"></input>
                  <label for="headphone3"> Aroma</label><br></br>
                  <input type="checkbox"
                  checked={checked3}
                    onChange={() => dispatch({
                      type: 'FILTER_BRAND3',
                      payload :{ name : 'Logitech', bool : true}
                    })} id="headphone4" name="headphone4" value="headphone"></input>
                  <label for="headphone4"> Logitech</label><br></br>
                  <input type="checkbox"
                  checked={checked4}
                    onChange={() => dispatch({
                      type: 'FILTER_BRAND4',
                      payload :{ name : 'Mivi', bool : true}
                    })} id="headphone5" name="headphone5" value="headphone"></input>
                  <label for="headphone5"> Mivi</label>
                </div>
                <br></br>
                <hr></hr>

                <div className='checked'>
                  <h4>CUSTOMER RATINGS</h4>
                  <input type="checkbox"
                  
                  checked={checked5}
                    onChange={() => dispatch({
                      type: 'FILTER_BRAND5',
                      payload :{ name : '4', bool : true}
                    })}
                     id="headphone6" name="headphone6" value="headphone"></input>
                  <label for="headphone6"> 4<Icon icon="ic:round-star-rate" /> & above</label><br></br>
                  <input type="checkbox"
                  
                  checked={checked6}
                    onChange={() => dispatch({
                      type: 'FILTER_BRAND6',
                      payload :{ name : '3', bool : true}
                    })}
                  id="headphone7" name="headphone7" value="headphone"></input>
                  <label for="headphone7"> 3<Icon icon="ic:round-star-rate" /> & above</label><br></br>
                  <input type="checkbox"
                  checked={checked7}
                    onChange={() => dispatch({
                      type: 'FILTER_BRAND7',
                      payload :{ name : '2', bool : true}
                    })}
                   id="headphone8" name="headphone8" value="headphone"></input>
                  <label for="headphone8"> 2<Icon icon="ic:round-star-rate" /> & above</label><br></br>
                  <input type="checkbox"
                  checked={checked8}
                    onChange={() => dispatch({
                      type: 'FILTER_BRAND8',
                      payload :{ name : '1', bool : true}
                    })}
                   id="headphone9" name="headphone9" value="headphone"></input>
                  <label for="headphone9"> 1<Icon icon="ic:round-star-rate" /> & above</label><br></br>
                </div>
                <br></br>
                <hr></hr>
              </div>
            </div>
            <div className='col-lg-10 '>
              <div className='product'>

                {/* <h3><span>Home <Icon icon="material-symbols:arrow-forward-ios-rounded" width="15" height="16" /></span>Audio & video</h3> */}
                {/* <p className='para'>DIZO Audio & Video ,Samsung Audio & Video ,FD1 Audio & Video ,Bose Audio & Video ,Infinity Audio & Video ,HOPPUP Audio & Video ,Sennheiser Audio & Video ,Mi Audio & Video ,Syska Audio & Video ,Marshall Audio & Video</p> */}

                <h2 className='product-head'>Monitor Headphones<span>(Showing 1 - 19 products of 19 products)</span></h2>
                <div className='list'>
                  <ul>
                    <li>Sort By</li>
                    <li>Popularity</li>
                    <li>price Low-to-high</li>
                    <li>price high-to-low</li>
                  </ul>
                  <div className='product-bott'>
                  </div>
                </div>
                <div className='row1'>
                  {transformedProduct()
                  ?.filter(e => e.head.toLowerCase().includes(searchQuary))
                    ?.map((value, index) => {
                      return (<div className='col-lg-3' key={index}>
                        <Card sx={{ maxWidth: 370 }}>
                          <CardActionArea>
                            <div className='card-add'>
                              <button>AD</button>
                             
                                
                     <Checkbox {...label} checked={value.isFav} onChange={() => getFav(value)} icon={<FavoriteBorder/>} checkedIcon={<Favorite color='error'/>}/>
                           
                            </div>
                            <div className='cards' onClick={() => details(value)}>
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
                                  <h4>{value.offer}%off</h4>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='free'>
                                  <h3>Free Delivery</h3>
                                </Typography>
                              </CardContent>
                            </div>
                          </CardActionArea>
                        </Card>
                      </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Headphones
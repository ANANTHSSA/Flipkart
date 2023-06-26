import React, { useContext } from 'react'
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import { stateContext } from './stateContext';
import '../../Sass/Sass.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Offer from '../Home/images/offer.jpg'
import { useNavigate } from 'react-router-dom';
import { stateContext } from '../../stateContext';
import Footer from '../../Footer/Footer';
// import Button from '@mui/material/Button';

export const Home = () => {
  const Navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const electronics = [{
    id: 1,
    img: 'https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70',
    productName: 'Printers',
    price: 'From ₹ 3999',
    brand: 'HP',
    routingName: 'printer'
  },
  {
    id: 2,
    img: 'https://rukminim1.flixcart.com/image/200/200/kxaq7ww0/headphone/b/s/x/gaming-headphones-with-adjustable-mic-deep-bass-matlek-original-imag9s5kputhy6uj.jpeg?q=70',
    productName: 'Top Mirrorless Cameras',
    price: 'Shop Now',
    brand: 'Caron,Sony,Fujifilm',
    routingName: 'headphone'
  },
  {
    id: 3,
    img: 'https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70',
    productName: 'Best Of Shavers',
    price: 'From ₹ 1,649',
    brand: 'Philips & Hevells',
    routingName:'shaver'
  },
  {
    id: 4,
    img: 'https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/power-bank/b/p/m/power-bank-3-pd-22-5w-10000-rtx2108-realme-original-imagg7jckgt9zgag.jpeg?q=70',
    productName: 'Premium Power Bank',
    price: 'Shop Now',
    brand: 'Mi,Realme&Moto',
    routingName:'powerbank'
  },
  {
    id: 5,
    img: 'https://rukminim1.flixcart.com/image/200/200/kyag87k0/computer/7/r/u/raider-ge66-12ugs-gaming-laptop-msi-original-imagakb9zw7gqzcm.jpeg?q=70',
    productName: '12th Gen Laptop',
    price: 'From ₹ 47,990',
    brand: 'High Performs Laptops',
    routingName:'laptop'
  },
  {
    id: 6,
    img: 'https://rukminim1.flixcart.com/image/200/200/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70',
    productName: 'Monitors',
    price: 'From ₹ 7949',
    brand: 'Lenovo',
    routingName:'monitor'
  },
  {
    id: 7,
    img: 'https://rukminim1.flixcart.com/image/200/200/xif0q/monitor/z/l/6/-original-imagze3c9aggznc9.jpeg?q=70',
    productName: 'Moni tors',
    price: 'From ₹ 6599',
    brand: 'acer',
    
  },
  {
    id: 8,
    img: 'https://rukminim1.flixcart.com/image/200/200/l3khsi80/projector/z/h/4/-original-imagenqrzfcgwqk7.jpeg?q=70',
    productName: 'Projectors',
    price: 'From ₹9999',
    brand: 'ZEBRONICS',
  },
  ]
  const beauty = [{
    id: 9,
    img: 'https://rukminim1.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70',
    productName: 'Top Selling Stationary',
    price: 'From ₹ 49',
    brand: 'Pens,Notebooks&More',
    routingName:'bookmeterials'
  },
  {
    id: 10,
    img: 'https://rukminim1.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70',
    productName: 'Non-Geared-Cycle',
    price: 'Upto  40% Off',
    brand: 'Hercules,Hero&More',
  },
  {
    id: 11,
    img: 'https://rukminim1.flixcart.com/image/200/200/kql8sy80/lipstick/7/m/y/21-sara-s-favorite-sensational-liquid-matte-pack-of-3-touch-of-original-imag4kgnbmynydnw.jpeg?q=70',
    productName: 'Make up Essentials',
    price: 'Upto 60 % Off',
    brand: 'Lakme & Swiss Beauty & More',
  },
  {
    id: 12,
    img: 'https://rukminim1.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70',
    productName: 'Tricycles & Redeons',
    price: 'Upto 70% Off',
    brand: 'FFifurines,Battle Toys & More',
  },
  {
    id: 13,
    img: 'https://rukminim1.flixcart.com/image/200/200/xif0q/musical-keyboard/g/p/p/37-0-45-37-keys-beston-original-imagheyfjcy32gwq.jpeg?q=70',
    productName: 'Musical Keyboards & more',
    price: 'Upto  70% Off',
    brand: 'Beston,Redbox & more',
  },
  {
    id: 14,
    img: 'https://rukminim1.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70',
    productName: 'Gym Essentials',
    price: 'From ₹139',
    brand: 'Shop Now',
  },
  {
    id: 15,
    img: 'https://rukminim1.flixcart.com/image/200/200/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=70',
    productName: 'Food Spreads',
    price: 'Upto  75% Off',
    brand: 'MyFitness,Alpino & more',
  },
  {
    id: 16,
    img: 'https://rukminim1.flixcart.com/image/200/200/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70',
    productName: 'String Intruments',
    price: 'Upto  70% Off',
    brand: 'Guitars,Ukuleles & more',
  },
  ]
  const HomeEssential = [{
    id: 17,
    img: 'https://rukminim1.flixcart.com/image/200/200/krtjgcw0/showpiece-figurine/q/8/d/sg-royalbox-original-imag5gy2rxubzkgq.jpeg?q=70',
    productName: 'Showpieces',
    price: 'Upto 80% Off',
    brand: 'Big Discounts',
  },
  {
    id: 18,
    img: 'https://rukminim1.flixcart.com/image/200/200/ks4yz680/sticker/d/g/t/wall-stickers-wallpaper-home-decoration-whale-and-shaded-frames-original-imag5rvjdvrjdzgc.jpeg?q=70',
    productName: 'Stickers & Wallpapers',
    price: 'Upto 80% Off',
    brand: 'Big Discounts',
  },
  {
    id: 19,
    img: 'https://rukminim1.flixcart.com/image/200/200/j5bceq80/diya/s/t/g/etl2042-etrendz-original-imaecayyx9nedubp.jpeg?q=70',
    productName: 'Diyas,Candles & Holders',
    price: 'Upto 80% Off',
    brand: 'Big Discounts',
  },
  {
    id: 20,
    img: 'https://rukminim1.flixcart.com/image/200/200/kj36ky80-0/table-cover/a/s/2/circles-1-tc-circles-maroon-weavers-villa-original-imafyqmaamqrzyhb.jpeg?q=70',
    productName: 'Table Covers',
    price: 'From ₹99',
    brand: 'Best Selling Range',
  },
  {
    id: 21,
    img: 'https://rukminim1.flixcart.com/image/200/200/krs40i80/appliance-cover/i/r/b/exp-ac-44-exopick-original-imag5hh8azrpx5gx.jpeg?q=70',
    productName: 'Appliance Covers',
    price: 'From ₹69',
    brand: 'Best Selling Range',
  },
  {
    id: 22,
    img: 'https://rukminim1.flixcart.com/image/200/200/jvmpci80/bedsheet/d/4/s/pure-cotton-printed-flat-double-bedsheet-with-2-pillow-cover-original-imaessyzwzwyhfdm.jpeg?q=70',
    productName: 'Bed Covers',
    price: 'From ₹199',
    brand: 'Trendy Collections',
  },
  {
    id: 23,
    img: 'https://rukminim1.flixcart.com/image/200/200/kgv5x8w0/slipcover/v/f/v/sfc-29-onterio-fab-original-imafxyen34zmpde3.jpeg?q=70',
    productName: 'Sofa Covers',
    price: 'From ₹149',
    brand: 'Best Selling Range',
  },
  {
    id: 24,
    img: 'https://rukminim1.flixcart.com/image/200/200/power-hand-tool-kit/v/v/g/gsb-500-re-kit-bosch-original-imaeg63dbybtqzfy.jpeg?q=70',
    productName: 'Power and Hand Tool Kit',
    price: 'From ₹399',
    brand: 'Best Selling',
  },
  ]

  const { state: { searchQuary }, dispatch } = useContext(stateContext)

  return (
    <>
      <div className='home'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2'>
              <div className='product'>
                <h2>Best Of Electronics</h2>
                <Button variant="contained">Viewall</Button>
                <div className='product-img'>

                </div>
              </div>
            </div>
            <div className='col-lg-10'>
              <div className='r-row'>
                <Carousel
                  responsive={responsive}
                >
                  {electronics
                    ?.filter(e => e.productName.toLowerCase().includes(searchQuary))
                    ?.map((value, index) => {
                      return <Card onClick={() => Navigate('/' + value.routingName)}>
                        <CardActionArea>
                          <CardMedia />
                          <img src={value.img}/>
                          <CardContent>
                            <Typography>
                              <h4>{value.productName}</h4>
                            </Typography>
                            <Typography>
                              <h3>{value.price}</h3>
                            </Typography>
                            <Typography>
                              <p style={{ fontSize: '12px' }}>{value.brand}</p>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>

                    })}
                </Carousel>
              </div>
            </div>
            {/* <div className='col-lg-2' style={{padding:'0px 10px 0 6px'}}>
        <img src={Offer} style={{width:'100%'}}/>
      </div> */}



            {/* beauty product */}
            <div className='col-lg-2'>
              <div className='beauty'>
                <h2>Beauty,Food,<br></br>Toys & more</h2>
                <Button variant="contained">Viewall</Button>
                <div className='beauty-img'>

                </div>
              </div>
            </div>
            <div className='col-lg-10'>
              <div className='r-row'>
                <Carousel responsive={responsive}>
                  {beauty
                   ?.filter(e => e.productName.toLowerCase().includes(searchQuary))
                   ?.map((value, index) => {
                    return <Card onClick={() => Navigate('/' + value.routingName)}>
                      <CardActionArea>
                        <CardMedia />
                        <img src={value.img} />
                        <CardContent>
                          <Typography>
                            <h4>{value.productName}</h4>
                          </Typography>
                          <Typography>
                            <h3>{value.price}</h3>
                          </Typography>
                          <Typography>
                            <p style={{ fontSize: '12px' }}>{value.brand}</p>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  })}
                </Carousel>
              </div>
            </div>

            {/* Home Essentials product */}
            <div className='col-lg-2'>
              <div className='homeessential'>
                <h2>Home & Kitchen Essentials</h2>
                <Button variant="contained">Viewall</Button>
                <div className='homeessential-img'>

                </div>
              </div>
            </div>
            <div className='col-lg-10'>
              <div className='r-row'>
                <Carousel responsive={responsive}>
                  {HomeEssential
                   ?.filter(e => e.productName.toLowerCase().includes(searchQuary))
                   ?.map((value, index) => {
                    return <Card>
                      <CardActionArea>
                        <CardMedia />
                        <img src={value.img} />
                        <CardContent>
                          <Typography>
                            <h4>{value.productName}</h4>
                          </Typography>
                          <Typography>
                            <h3>{value.price}</h3>
                          </Typography>
                          <Typography>
                            <p style={{ fontSize: '12px' }}>{value.brand}</p>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}



export default Home

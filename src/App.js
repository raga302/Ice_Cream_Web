
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faXmark, faHouse, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import ice_cream from './images/icecreambg.jpg'
import ice_cream1 from './images/icecreambg1.jpg'
import ice_cream2 from './images/icecreambg2.jpg'



import pngIcecream4 from './images/pngicecream4.png'
import pngIcecream8 from './images/pngicecream8.png'
import pngIcecream9 from './images/pngicecream9.png'



// Products Images
import chocoFudge from './images/Choco Fudge.png'
import American_Nuts from './images/American Nuts.png'
import Gourmet_Natural_Tub_Falooda from './images/Gourmet Natural Tub_Falooda.png'
import Choco_Crackle_Flingo from './images/Choco Crackle Flingo.png'
import Gourmet_Cups from './images/Gourmet_cup.png';
import No_Sugar_Ice_Cream_Cups from './images/No Sugar - Ice Cream.png';
import Cup_Treat from './images/Cup Treats.png';
import Flingo_Ice_Cream_Cone from './images/Choco Crackle Flingo.png';
import Ice_Trooper_Ice_Cream from './images/ice_topper.png';
import Novelties from './images/novelties.png';
import Shrikhand from './images/shrikand.png';
import Dollies from './images/Dollies.png';
import Badabite_Ice_Cream_Candy from './images/Choco Fudge.png';
import Consumer_Bulk_Packs from './images/Consumer Bulk Packs .png';
import party_Packs from './images/Party Pack.png';
import Ice_Cream_Cakes from './images/Chocolate Oveload.png';



// gif
import gif1 from './gif/gif1.gif'
import gif2 from './gif/gif2.gif'
import gif3 from './gif/gif3.gif'
import gif4 from './gif/gif4.gif'

import home_cafe from './images/home_cafe.abea6370.jpg'
import homeScoopShop from './images/homeScoopShop.b910d789.jpg'
import logo from './images/logo.svg'

import couple_Video from './videos/couple.mp4';
import couple_Video2 from './videos/couple2.mp4'

function App() {


  const navbar_Div = useRef()
  const image_slider_section = useRef()

  const show_Menu_Div = () => {
    navbar_Div.current.style.left = "0rem"

  };

  const hide_Menu_Div = () => {
    navbar_Div.current.style.left = "-150rem"

  };



  const nextClickHandler = () => {
    let width = image_slider_section.current.clientWidth;
    image_slider_section.current.scrollLeft = image_slider_section.current.scrollLeft + width

  }

  const prevClickHandler = () => {
    let width = image_slider_section.current.clientWidth;
    image_slider_section.current.scrollLeft = image_slider_section.current.scrollLeft - width

  }


  const obj = [
    {
      title: "Gourmet Cups",
      image: Gourmet_Cups
    },
    {
      title: "Ice Trooper Ice Cream",
      image: Ice_Trooper_Ice_Cream
    },
    {
      title: "No Sugar Ice Cream Cups",
      image: No_Sugar_Ice_Cream_Cups
    },
    {
      title: "Flingo Ice Cream Cone",
      image: Flingo_Ice_Cream_Cone
    },
    {
      title: "Gourmet Cup",
      image: Cup_Treat
    },
    {
      title: "Novelties",
      image: Novelties
    },
    {
      title: "Shrikhand",
      image: Shrikhand
    },
    {
      title: "Dollies",
      image: Dollies
    },
    {
      title: "Badabite Ice Cream Candy",
      image:  Badabite_Ice_Cream_Candy
    },
    
  ]
  const obj2 = [
    {
      title: "Consumer Bulk Packs",
      image: Consumer_Bulk_Packs
    },
    {
      title: "Gourmet Natural Tubs",
      image: Gourmet_Natural_Tub_Falooda
    },
    {
      title: "Ice Cream Cakes",
      image: Ice_Cream_Cakes
    },
    {
      title: "Party Packs",
      image: party_Packs
    },
    {
      title: "Gourmet Cup",
      image: Cup_Treat
    },
    {
      title: "Novelties",
      image: Novelties
    },
    {
      title: "Party Packs",
      image: pngIcecream4
    },
    {
      title: "Gourmet Cup",
      image: pngIcecream8
    },
    {
      title: "Novelties",
      image: pngIcecream9
    },
  ]

 

  return (
    <>


      <div className=' container-fluid container-fluid-nav p-1 '>
        <div className='container'>
          <div className='row'>

            <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 col-xs-1 p-0 menu-Div border d-flex justify-content-center'>
              <h1 className='  menu_logo w-100 h-100 d-flex justify-content-center align-items-center' onClick={show_Menu_Div}><FontAwesomeIcon icon={faBars} /></h1>
            </div>

            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 col-xs-6 border'>
              <h1 className=' brand w-100 h-100 d-flex justify-content-center align-items-center text-light'>Ice-Cream World</h1>
            </div>

            <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5 p-0 about_user_div border text-end d-flex justify-content-end'>
              <ul className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 col-xs-6 p-0  h-100  d-flex justify-content-center align-items-center'>
                <li className=''><a href='#' className=''>About-Us</a></li>
              </ul>
              <h1 className='border col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 col-xs-6 d-flex justify-content-center align-items-center  h-100'><FontAwesomeIcon icon={faUser} /></h1>
            </div>

          </div>
        </div>
      </div>







      <div className=' navbar_Div p-0 d-flex justify-content-center align-items-center' ref={navbar_Div}>
        <div className='container p-0'>
          <div className='row m-0'>

            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-0 mini col-xs-12 '>
              <div className=' d-flex justify-content-center flex-column border border-warning'>

                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 '>
                  <h1 className='px-4' onClick={hide_Menu_Div}><FontAwesomeIcon icon={faXmark} /></h1>

                </div>

                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12  d-flex  align-items-center justify-content-center border'>

                  <li>Home</li>
                </div>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex  align-items-center justify-content-center border w-100'>

                  <li>Top-Selling</li>
                </div>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex  align-items-center justify-content-center border w-100'>

                  <li>Contact</li>
                </div>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex  align-items-center justify-content-center border w-100'>

                  <li>About</li>
                </div>





              </div>
            </div>



          </div>
        </div>
      </div>

      <div className='container-fluid container-fluid-img p-0 border '>
        <div className='container border h-100'>
          <div className='row  h-100'>

            <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 col-xs-1 border d-flex align-items-center justify-content-center'>
              <button className='py-3   w-100'><h1 onClick={prevClickHandler} className='w-100'><FontAwesomeIcon icon={faCaretLeft} /></h1></button>
            </div>

            <div className='col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 col-xs-10 p-0  d-flex  image_Box' ref={image_slider_section}>

              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 '>
                <img src={ice_cream} />
              </div>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 '>
                <img src={home_cafe} />
              </div>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 '>
                <img src={ice_cream1} />
              </div>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12'>
                <img src={ice_cream2} />
              </div>
            

            </div>

            <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 col-xs-1 border d-flex  align-items-center justify-content-center'>
              <button className='py-3   w-100'><h1 onClick={nextClickHandler}><FontAwesomeIcon icon={faCaretRight} /></h1></button>
            </div>
    
          </div>
        </div>
      </div>


      <div className='container-fluid product_container_fluid mt-5 mb-5'>
        <div className='container'>
          <div className='row border d-flex align-items-center justify-content-around product_box_parent' >
            <h1 className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 products_heading col-12 col-xs-12 text-center '><span>Delicious Ice-Cream Flavoures</span></h1>
            

            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-5 col-5 col-xs-5 mt-5  p-0 border d-flex  align-items-center justify-content-center flex-column  product-Box rounded'>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex  align-items-center justify-content-center border product-Box-mini  border-success rounded p-0'>
                <img src={chocoFudge} className='m-0' />
              </div>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 description_Box p-0  d-flex  align-items-center justify-content-around border w-100'>
                <h2 className='col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 col-xs-10 ps-1'>Chocalate Ice-Cream</h2>
                <h2 className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 col-xs-2  text-end  '>799/-</h2>
              </div>
              <h3 className=' w-100 text-center py-2'>Badabite Ice Cream Candy</h3>

            </div>

            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-5 col-5 col-xs-5 mt-5 p-0 border d-flex  align-items-center justify-content-center flex-column  product-Box rounded'>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex  align-items-center justify-content-center border product-Box-mini  border-success rounded p-0'>
                <img src={American_Nuts} className='m-0' />
              </div>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 description_Box  p-0 d-flex  align-items-center justify-content-between border w-100'>
                <h2 className='col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 col-xs-10 '>American Nuts</h2>
                <h2 className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 col-xs-2  text-end  '>799/-</h2>
              </div>
              <h3 className=' w-100 text-center py-2'>Flingo Ice-Cream Cone</h3>

            </div>

          </div>
        </div>
      </div>



      <div className='container-fluid mt-5 mb-5'>
        <div className='container'>
          <div className='row border d-flex align-items-center justify-content-around product_box_parent ' >

            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-5 col-5 col-xs-5 p-0 border d-flex  align-items-center justify-content-center flex-column  product-Box '>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex  align-items-center justify-content-center border product-Box-mini  border-success rounded p-0'>
                <img src={Gourmet_Natural_Tub_Falooda} className='m-0' />
              </div>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 description_Box  p-0 d-flex  align-items-center justify-content-between border w-100'>
                <h2 className='col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 col-xs-10  '>Falooda</h2>
                <h2 className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 col-xs-2 text-end  '>799/-</h2>
              </div>
              <h3 className=' w-100 text-center py-2'>Gourmet Natural Tabs</h3>

            </div>


            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-5 col-5 col-xs-5 p-0 m-1 border d-flex  align-items-center justify-content-center flex-column  product-Box '>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex  align-items-center justify-content-center border product-Box-mini  border-success rounded p-0'>
                <img src={Choco_Crackle_Flingo} className='m-0' />
              </div>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 description_Box  p-0 d-flex  align-items-center justify-content-between border w-100'>
                <h2 className='col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 col-xs-10  '>Choco Crackle Flingo</h2>
                <h2 className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 col-xs-2 text-end  '>799/-</h2>
              </div>
              <h3 className=' w-100 text-center py-2'>Flingo Ice-Cream Cone</h3>

            </div>

          </div>
        </div>
      </div>



      <div className='container-fluid video_image_container mt-5 p-0'>
        <div className='container'>
          <div className='row'>
        
        <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 text-center'>
          <h1 className=' mb-3 py-2 '>You Want Happy Mood ?  Eat Icecream</h1>
        </div>

        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 col-xs-6'>
          <video controls autoPlay muted loop>
            <source src={couple_Video}  type="video/mp4"></source>
          </video>
        </div>

        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 col-xs-6'>
        <video controls autoPlay muted loop>
            <source src={couple_Video2}  type="video/mp4"></source>
          </video>
        </div>

          </div>
        </div>
      </div>



      <div className='container-fluid mt-5 mb-5'>
        <div className='container'>
          <div className='row para1  d-flex align-items-center justify-content-between ' >

            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12  p-0  d-flex  align-items-center justify-content-center flex-column  '>
            <h1 className='  w-100 text-center py-2 '>Ice Creams that are <br/>
      lip-smackingly delicious!</h1>
            </div>

            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6   p-0  d-flex  align-items-center justify-content-center flex-row  '>
            <img src={gif1} alt='loading...'/>
            <h4 className='border border-danger w-100 text-center py-1 '>No Compromise<br/>On Quality</h4>
            </div>
            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6  p-0  d-flex  align-items-center justify-content-center flex-row  '>
            <img src={gif2} alt='loading...'/>
            <h4 className='border border-danger w-100 text-center py-1 '>Creative and<br/>Innovative</h4>
            </div>
            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6 mt-2  p-0  d-flex  align-items-center justify-content-center flex-row  '>
            <img src={gif3} alt='loading...'/>
            <h4 className='border border-danger w-100 text-center py-1 '>Naturally<br/>Pure</h4>
            </div>
            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6 mt-2  p-0  d-flex  align-items-center justify-content-center flex-row  '>
            <img src={gif4} alt='loading...'/>
            <h4 className='border border-danger w-100 text-center py-1 '>Made with<br/>Care</h4>
            </div>

          </div>
        </div>
      </div>



      <div className='container-fluid mt-5 mb-5'>
        <div className='container'>
          <div className='row para2  ' >

            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12  p-0 d-flex  align-items-center justify-content-center flex-column  para2_first_div'>
            <h1 className=' w-100 text-center py-3 '>Unlock a World<br/>
      Full of Happiness</h1>
            </div>

            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12  p-0 d-flex  align-items-center justify-content-start flex-column  para2_second_div'>
            <img src={Choco_Crackle_Flingo} className='m-0' />
            <img src={American_Nuts} className='m-0' />
            <img src={chocoFudge} className='m-0' />
            <img src={Gourmet_Natural_Tub_Falooda} className='m-0' />
            </div>
            
           

          </div>
        </div>
      </div>


      <div className='container-fluid mt-5 mb-5'>
        <div className='container'>
          <div className='row   border ' >

            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12  p-0 border d-flex  align-items-center justify-content-center flex-row  marquee_div'>

              <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 col-xs-3  p-3'>
                  <button>Impulse</button>
              </div>

              <div className='col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9 col-9 col-xs-9  d-flex  h-100'>
                <marquee behavior="scroll" direction="left" scrollamount="5" loop={true} className='marquee_control' >
                  <div className='w-100 h-100 d-flex  align-items-center justify-content-center flex-row'>
                {
                  obj.map((e)=>(
                    <div className=' h-100 d-flex flex-column  text-center'>
                      <div className='  p-3'>

                        <h5 >{e.title}</h5>
                      </div>
                      <div className='marquee_img_div  d-flex  align-items-center justify-content-center'>

                      <img src={e.image}/>
                      </div>
                        
                      </div>    
                  ))
              
                }
                </div>
                </marquee> 
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className='container-fluid mt-5 mb-5'>
        <div className='container'>
          <div className='row   border ' >

            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12  p-0 border d-flex  align-items-center justify-content-center flex-row  marquee_div'>

              <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 col-xs-3  p-3'>
                  <button className='takehome_Btn'>Home</button>
              </div>

              <div className='col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9 col-9 col-xs-9  d-flex  h-100'>
                <marquee behavior="scroll" direction="right" scrollamount="5" loop={true} className='marquee_control' >
                  <div className='w-100 h-100 d-flex  align-items-center justify-content-center flex-row'>
                {
                  obj2.map((e)=>(
                    <div className=' h-100 d-flex flex-column  text-center'>
                      <div className='  p-3'>

                        <h5 >{e.title}</h5>
                      </div>
                      <div className='marquee_img_div  d-flex  align-items-center justify-content-center'>

                      <img src={e.image}/>
                      </div>
                        
                      </div>    
                  ))
                    
                  
                      
                }
                </div>
                </marquee> 
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='container-fluid cafe_image_container mt-5 p-0'>
        <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12'>
          <img src={home_cafe}/>
        </div>
      </div>
      <div className='container-fluid cafe_image_container mt-0 p-0'>
        <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12'>
          <img src={homeScoopShop}/>
        </div>
      </div>




    </>
  );
}

export default App;

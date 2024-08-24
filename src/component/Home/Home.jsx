import React from 'react'
import Header from './Header';
import './Home.css'
import prideimg from './../../images/1.png'
import ingrimg from './../../images/ingri.png'
import prof1 from './../../images/6.jpg'
import prof2 from './../../images/4.jpg'


import data from './../../Data';
import {Carousel} from 'react-bootstrap'
export default function Home() {
  const dataitem = data.map((item)=>{
    return(
      <div className="col-md-4">
    <div className="box">
    <img src= {item.img} />
     <h5>   {item.title}</h5>
     <span>{item.time}</span>
        <h6>{item.price}</h6>
    </div>
    <button><a href="#">Order Now</a></button>
      </div>
    )
  })
  return (
  <>
   <Header id="header"/>
   <section id='number' className='number'>
    <div className="container">
<div className="row">
  <div className="col-md-3">
    <h2>1287+</h2>
    <h6>Savings</h6>
  </div>
  <div className="col-md-3">
    <h2>5786+</h2>
    <h6>Photos</h6>
  </div><div className="col-md-3">
    <h2>1440+</h2>
    <h6>Rockets</h6>
  </div><div className="col-md-3">
    <h2>7110+</h2>
    <h6>Globes</h6>
  </div>
</div>
    </div>
   </section>

   <section id='pride' className='pride'>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
 <img src={prideimg} title='prideimg' />
        </div>
        <div className="col-md-6">
          <h2>We pride ourselves on making real food from the best ingredients.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
          <button><a href="#">Learn More</a></button>
          </div>
      </div>
    </div>
   </section>

   {/* ingrident */}

  <section id='ingridents' className='ingridents'>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
            <h2>We make everything by hand with the best possible ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul>
              <li>Etiam sed dolor ac diam volutpat.</li>
              <li>Erat volutpat aliquet imperdiet.</li>
              <li>purus a odio finibus bibendum.</li>
            </ul>
            <button><a href="#">Learn More</a></button>
        </div>
        <div className="col-md-6">
          <img src={ingrimg} title='ingrimg'/>
        </div>
      </div>
    </div>
  </section>
  <section className='paralex'>
    <div className="container">
      <div className="row">
      <div className="col-lg-12 col-md-12">
        <h2>When a man's stomach is full it makes no
        <br/>difference whether he is rich or poor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
        finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
        <a href="#">Watch Our Story</a>
      </div>
  </div>
  </div>
  </section>
  {/* blogs */}
  <section id='blogs' className='blogs'>
<div className="conatiner">
  <div className="row">
    <div className="col-lg-12 col-md-12">
      <h2>Explore Our Foods</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
    </div>
    </div>
    <div className="row">
      {dataitem}
    </div>
    </div>
  </section>
  <section id='slider' className='slider'>
 <div className="container">
  <div className="row">
    <div className="col-lg-12 col-md-12">
      <h2>Testimonial</h2>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 col-md-12">
    <Carousel>
  <Carousel.Item>
    <img src={prof1} />
    <Carousel.Caption>
    
      <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
      <span class="author">Johnthan Doe - UX Designer</span>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src={prof2} />

    <Carousel.Caption>
      <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
      <span class="author">Johnthan Doe - UX Designer</span>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
    </div>
  </div>
 </div>
  </section>
  <section className='Frequently'>
    <div className="container">
      <div className="row">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
<div className="item">
  <h5>~ Is Foodera Bread really baked fresh each day?</h5>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
</div>
<div className="item">
  <h5>~ Can I order your products online?</h5>
  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
</div>
        </div>
        <div className="col-md-6">
<div className="item">
  <h5>~ Do you bake breads containing animal fats or products?</h5>
  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
</div>
<div className="item">
  <h5>~ When are you opening a shop near me?</h5>
  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
</div>
</div>
      </div>
    </div>
  </section>
  <section className='parllax'>
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
<h4>Baked fresh daily by bakers with passion.</h4>
        </div>
        <div className="col-md-4">
          <button><a href="#">Learn More</a></button>
        </div>
      </div>
    </div>
  
  </section>
  <section className='harry'>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h2>Hurry up! Subscribe our newsletter<br/>
          and get 25% Off</h2>
          <p>Limited time offer for this month. No credit card required.</p>
          <form className='intro'>
            <div className="row">
              <div className="col-md-8">
                <input type="email" placeholder='Enter Your e-mail' />
           
              </div>
              <div className="col-md-4">
                <button>Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>

  )
}

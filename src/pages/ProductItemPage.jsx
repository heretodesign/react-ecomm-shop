import React from 'react';
import { Link } from "react-router-dom"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import img1 from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg'
import img2 from '../assets/maksim-larin-Ai356rggKvw-unsplash.jpg'
import img3 from '../assets/maksim-larin-NOpsC3nWTzY-unsplash.jpg'
import img4 from '../assets/maksim-larin-1vy2QcZd5FU-unsplash.jpg'

const ProductItemPage = () => {
    return (
        <>
          <section className="section is-paddingless-horizontal">
            <div className="container-fluid grid is-large">
              <div className="firstsection">
                <div className="content">
                  <div class="columns">
                    <div className="column">
                        
                        <div className="columns">
                          <div className="column">
                            <div class="card card-shadow">
                              <div class="card-image">
                                  <img src={img3} alt="Placeholder image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-half">
                            <div class="card">
                              <div class="card-image">
                                  <img src={img2} alt="Placeholder image" />
                              </div>
                              <div class="card-content">
                                <div class="media">
                                  <div class="media-content">
                                    <p class="title is-5 has-text-centered" style={colorStyle}>Aerial Zoom</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div class="card">
                              <div class="card-image">
                                  <img src={img4} alt="Placeholder image" />
                              </div>
                              <div class="card-content">
                                <div class="media">
                                  <div class="media-content">
                                    <p class="title is-5 has-text-centered" style={colorStyle}>Aerial View</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="column is-half">
                        <div className="content marketproduct" id="contentSide">
                          <div className="control">
                            <Link to="/contact-us" className="button is-info is-small" style={bkStyle}>New Arrival</Link>
                          </div>
                          <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Who are our partners and clients</h3>
                          <p className="subtitle has-text-left is-2" style={colorStyle}>AIRFORCE KINGBROWN </p>

                          <p className="has-text-left" style={paragraphStyle}>
                            Elevate your game with the force of OG hoops. From leather that's smoother than backboard glass to the aggressive stance that says "bring it on", it's everything you know best: crisp overlays, 
                            bold accents and the perfect amount of flash to make you shine. Its padded, mid-cut collar with the classic strap closure offers heritage styling and added support. Perforations keep you cool as you heat up the streets. It never left, but the Nike Air Force 1 Mid '07 is back.                          </p>
                          <br />
                          <br />
                          <p className="has-text-left is-underlined" style={paragraphStyle}>
                            Sizing Guide 
                          </p>
                          <div className="control">
                            <Link to="/contact-us" className="button is-info is-medium is-fullwidth" style={bkStyle}>Add to Cart</Link>
                          </div>
                          <p className="has-text-left" style={paragraphStyle}>
                            FREE Shipping on this item! 
                          </p>
                          <br /><br />
                          <p className="has-text-left" style={paragraphStyle}>
                            Product Details
                          </p>
                          <p className="has-text-left" style={paragraphStyle}>
                            As we continue to evolve and widen our reach within the southern hemisphere. Our growing clients base are in these following industry sectors. 
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section is-paddingless-horizontal">
            <div className="container-fluid grid is-large">
              <div className="content">
                <div class="columns">
                  <div className="column">
                    <img src={img4} alt="Placeholder image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section is-paddingless-horizontal">
            <div className="container-fluid grid is-large">
              <div className="content">
                <div class="columns">
                  <div className="column">
                    <img src={img1} alt="Placeholder image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section is-paddingless-horizontal">
            <div className="container-fluid grid is-large">
              <div className="content">
                <div class="columns">
                  <div className="column">
                    <img src={img2} alt="Placeholder image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#003468',
  marginBottom: '1px'
}

const colorStyle = {
  color: '#003468'
}

const bkStyle = {
  background: '#003468',
  color: 'white'
}

const outlinedStyle = {
  borderColor: '#003468',
  color: '#003468'
}

export default ProductItemPage;

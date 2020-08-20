import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import img from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg'

const Section = styled.section`
	background-image: url(${img});
	background-position: center center;
	background-repeat:  no-repeat;
	background-size:  cover;
	position: relative;
	// height: 100vh;
`
const TopDiv = styled.p`
	font-size: 13px;
  padding: 10px;
  text-align: center;
  line-height: 16px;
  background: #FFF3;
  color: #fff;
  width: 100%;
`
const Div = styled.div`
	width: 450px; 
	padding: 14px;

	@media (max-width: 768px) { 
		width: 450px; 
		padding: 10px;
	}
`
const bkStyle = {
  background: 'transparent',
  color: 'white'
}

const Paragraph = styled.p`
  /* ... */
`
const LinkButton = styled.button`
	background: #fba502;
  color: white;
`

const Landing = () => {
	return (
		<>
			<Section className="hero is-primary is-medium">
        <div className="is-paddingless-horizontal topNav">
					<div className="container-fluid grid">
						<div className="devsection">
								<TopDiv className="subtitl is-5 has-text-centered isdata">
									<strong className="has-text-white">MERDEKA DAY SPECIAL</strong>: – GET ADDITIONAL 25% OFF* WHEN YOU PURCHASE MIN. 2 ITEMS*. USE CODE: MERDEKA25
								</TopDiv>
						</div>
					</div>
        </div>
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand" id="logoStyle">
                <a className="navbar-item" href="/">
                  <strong className="has-text-white is-2">ASEN SHOP</strong>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <Link 
										to="/" 
										className="navbar-item has-text-small" 
										style={bkStyle}>
                      Home
                  </Link>
                  <Link 
										to="/" 
										className="navbar-item has-text-small" 
										style={bkStyle}>
										Solutions
                  </Link>
                  <Link 
										to="/about-us" 
										className="navbar-item has-text-small" 
										style={bkStyle}>
										About Us
                  </Link>
                  <Link 
										to="/" 
										className="navbar-item has-text-small" 
										style={bkStyle}>
										Logistics Knowledge
                  </Link>
                  <Link 
										to="/careers-at-srp" 
										className="navbar-item has-text-small" 
										style={bkStyle}>
										Careers
                  </Link>
                  <span className="navbar-item">
                    <Link 
											to="/contact-us" 
											className="navbar-item is-black button has-text-small contactBtn" 
											>
											Contact Us
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
          <div className="firstsection">
              <div className="content">
                <div className="columns">
                  <div className="column is-half">
                    <p className="subtitle has-text-left is-1" style={colorStyle}>
                      <strong>Seth Resources</strong> <span style={spanColor}>Petroleum</span> – Specializing in Petroleum Transportation
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-half">
                    <p className="has-text-left"> We are your co-pilot:
                        from remote regions to cities and beyond borders, with our fleet of delivery fuel tankers & vehicles,
                        SPR offers comfortable, realiable solutions to ensure that your petroleum delivery are made on time, every time. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="content" id="landingForm">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <a className="button is-medium has-test-small is-fullwidth" id="landBtn">Talk to sales</a>
                  </div>
                </div>
              </div>
						</div>
          </div>
        </div>
      </Section>
    </>
	);
}

const colorStyle = {
  color: '#fff',
  fontSize: '2.8rem',
  fontWeight: 'bolder'
}

const spanColor = {
  color: '#fba502'
}

export default Landing;

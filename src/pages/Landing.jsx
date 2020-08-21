import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import img from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg'
import Summer from '../components/Summer'
import Featured from '../components/Featured'
import Special from '../components/Special'

const Section = styled.section`
	background-image: url(${img});
	background-position: center center;
	background-repeat:  no-repeat;
	background-size:  cover;
	position: relative;
	height: 100vh;
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

	&:hover: {
		background: #FFF3;
	}

	@media (max-width: 768px) { 
		width: 450px; 
		padding: 10px;
	}
`
const bkStyle = {
  background: 'transparent',
  color: 'white'
}

const TextSpan = styled.span`
  color: #fba502;
`
const ColorPara = styled.p`
  color: #fff;
  font-size: 2.8rem;
  font-weight: bolder;
`

const TextPara = styled.p`
  color: #fff;
  font-size: 1.4rem;
`

const MainBtn = styled.button`
  color: #fff;
  background: transparent;

  &:hover {
    background-color: black;
    color: white;
  }
`

const ContactBtn = {
  color: '#fff',
  background: 'transparent',

  '&:hover': {
    backgroundColor: 'black',
    color: 'white'
  }
}

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
                  <strong className="has-text-white is-2">A'SNEAKER HUB</strong>
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
                      className="navbar-item is-transparent button has-text-small contactBtn" 
                      style={ContactBtn}
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
                    <ColorPara className="subtitle is-uppercase has-text-left is-1">
                      <strong>The Next</strong> <TextSpan>Generation</TextSpan> – Sneakers
                    </ColorPara>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-half">
                    <TextPara className="has-text-left"> 
                      Glide your way through life, walk faster in a clear path, let sneaker hub summon you next big step. 
                    </TextPara>
                  </div>
                </div>
              </div>
              <div className="content" id="landingForm">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <MainBtn className="button is-medium has-test-small is-fullwidth" id="landBtn">Talk to sales</MainBtn>
                  </div>
                </div>
              </div>
						</div>
          </div>
        </div>
      </Section>
      <Summer />
      <Featured />
      <Special />
    </>
	);
}

export default Landing;

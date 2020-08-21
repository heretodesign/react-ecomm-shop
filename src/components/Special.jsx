import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import styled from 'styled-components'
import img from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg'

const Section = styled.section`
  padding: 0px 0px;
  background: #003468;
  color: #011240;
`

const ImgDiv = styled.div`
  background-image: url(${img});
  background-position: center center;
	background-repeat:  no-repeat;
	background-size:  cover;
  position: relative;
  padding-top: 500px;
  padding-bottom: 70px;
`

const ColorStyle = styled.p`
  color: #9aa8bd;
`

const ParentDiv = styled.div`
  margin-top: 80px;
  margin-left: 70px;
  margin-right: 50px;
`

const ParagraphStyle = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0px;
`

const H4 = styled.p`
  margin-top: 10px;
  color: #fba502;
`

const iStyle = {
  paddingBottom: '120px',
  paddingTop: '20px',
}

const Special = () => {
  return (
    <>
      <Section className="section is-paddingless-horizontal">
        <div className="content" >
          <div class="columns" >
            <div class="column is-two-thirds" style={iStyle}>

              <ImgDiv className="content" id="contentSide">
                <ColorStyle className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Our Pioneers Message</ColorStyle>
                <ParagraphStyle className="has-text-left">
                  Our vision has always been and is to resource and supply sufficient oil and petroleum resources to enable our partners and clients throughout the region to function in a time to great stress and uncertainty. 
                  During the global pandemic season, we've further reiterated our ambition to scale our business and acquire more clients, and therefore create job opportunities for the right talent to join our growing SRP family.  
                </ParagraphStyle>
                <br />
                <ParagraphStyle className="has-text-left">
                  Brian, Tirelo && Keabetswe
                </ParagraphStyle>
                <H4 className="subtitle is-6 has-text-left has-text-weight-semibold">
                  The Founding Team
                </H4>
              </ImgDiv>
            </div>
            <div class="column is-one-third" id="founderImg"  style={iStyle}>
              <img className="content" src={img} height="100%" width="100%" id="imgCover" alt="office" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Special;

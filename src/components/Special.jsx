import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import styled from 'styled-components'
import img from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg'

const Section = styled.section`
  padding: 0px 0px;
  background: #fff;
  color: #011240;
`

const ColorPara = styled.p`
  color: #fff;
  font-size: 2.8rem;
  font-weight: bolder;
`

const ImgDiv = styled.div`
  background-image: url(${img});
  background-position: center center;
	background-repeat:  no-repeat;
	background-size:  cover;
  position: relative;
  padding-top: 100px;
  padding-bottom: 70px;
`

const ColorStyle = styled.p`
  color: #9aa8bd;
`

const ContentDiv = styled.div`
  margin-top: 10px;
  margin-left: 0px;
  margin-right: 0px;
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
const H3 = styled.p`
  margin-top: 10px;
  font-size: 1.4rem;
  color: #fba502;
`
const TextSpan = styled.span`
  color: #fba502;
`

const Special = () => {
  return (
    <>
      <Section className="section is-paddingless-horizontal">
        <div className="content" >
          <div class="columns" >
            <div class="column is-two-thirds">

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
            <div class="column is-one-third" id="founderImg">
              <ColorPara className="subtitle is-uppercase has-text-left is-1">
                <strong>The Next</strong> <TextSpan>Generation</TextSpan> – Sneakers
              </ColorPara>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Special;

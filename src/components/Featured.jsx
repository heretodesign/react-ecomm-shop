import React from 'react';
import styled from 'styled-components'
import img from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg'

const ImgDiv = styled.div`
  background-image: url(${img});
  background-position: center center;
	background-repeat:  no-repeat;
	background-size:  cover;
  position: relative;
  padding-top: 500px;
  padding-bottom: 70px;
`

const ParagraphStyle = styled.p`
  font-size: 1.2rem;
  color: #fff;
  padding-top: 100px;
`

const Div = styled.div`
  padding-left: 20px;
  padding-top: 100px;

`

const MainBtn = styled.button`
  color: #fff;
  background: transparent;

  &:hover {
    background-color: black;
    color: white;
  }
`

const Featured = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal">
        <div className="container-fluid grid is-large">
          <div className="firstsection">
            <div className="content">
              <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">
                More new
              </p>
            </div>
            <div className="content">
              <div class="columns">
                <div class="column">
                  <ImgDiv className="content">
                    <Div>
                      <div class="columns">
                        <div className="column is-one-quarter">
                          <MainBtn className="button is-small has-test-small is-fullwidth" id="landBtn">Kids</MainBtn>
                        </div>
                      </div>
                    </Div>
                  </ImgDiv>
                </div>
                <div class="column">
                  <ImgDiv className="content">
                    <Div>
                      <div class="columns">
                        <div className="column is-one-quarter">
                          <MainBtn className="button is-small has-test-small is-fullwidth">Men</MainBtn>
                        </div>
                      </div>
                    </Div>
                  </ImgDiv>
                </div>
                <div class="column">
                  <ImgDiv className="content">
                    <Div>
                      <div class="columns">
                        <div className="column is-one-quarter">
                          <MainBtn className="button is-small has-test-small is-fullwidth">Women</MainBtn>
                        </div>
                      </div>
                    </Div>
                  </ImgDiv>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
import React from 'react';
import CountUp from 'react-countup'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import './CovidCardStyle.css'

export const CovidCard = ({ data: {confirmed, deaths, recovered, lastUpdate} }) => (

  <div className='container'>


    <MDBCard className='border border-primary mr-3 mt-3 ' style={{ maxWidth: "22 rem" }}>
      <MDBCardBody className='primary-color'>
        <MDBCardTitle className='text-white font-weight-bold'>COVID-19</MDBCardTitle>
        <MDBCardText className = 'text-white'>Updated: {new Date(lastUpdate).toLocaleTimeString('kr-US')} </MDBCardText>
      </MDBCardBody>
    </MDBCard>

    <MDBCard className='border border-primary mr-3 mt-3 ' style={{ maxWidth: "22 rem" }}>
      <MDBCardBody className='primary-color-dark'>
        <MDBCardTitle className='text-white font-weight-bold'>
        <CountUp start = {0} end = {confirmed.value} duration = {2.75} separator = ',' ></CountUp>
        </MDBCardTitle>
        <MDBCardTitle className='text-white font-weight-bold'>CONFIRMED</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>

    <MDBCard className='border border-success mr-3 mt-3 ' style={{ maxWidth: "22 rem", border: '5px solid green' }}>
      <MDBCardBody className='success-color-dark'>
        <MDBCardTitle className='text-white font-weight-bold'>
        <CountUp start = {0} end = {recovered.value} duration = {2.75} separator = ',' ></CountUp>
        </MDBCardTitle>
        <MDBCardTitle className='text-white font-weight-bold'>RECOVERED</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>


    <MDBCard className='border border-danger mr-3 mt-3 ' style={{ maxWidth: "22 rem" }}>
      <MDBCardBody className='danger-color-dark'>
        <MDBCardTitle className='text-white font-weight-bold'>
        <CountUp start = {0} end = {deaths.value} duration = {2.75} separator = ',' ></CountUp>
        </MDBCardTitle>
        <MDBCardTitle className='text-white font-weight-bold'>DECEASED</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  </div>
)

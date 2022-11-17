import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import style from 'styled-components';
import {StateCard} from '../../Data/DashboardData.jsx';
import {ExampleOne, ExampleTwo, ExampleThree, ExampleFour } from '../../Data/DashBoardChart.jsx'
import {LongTextSnackbar, TitlebarBelowImageList} from '../../Data/DashTable.jsx'
function Section2() {

  const Section1 = style.div`
    background-color: #fff;
    shadow: #fff;
    color: black;
    `
    const SectionTwo = style.div`
      background-color: #F7F7F7;
    `
    const SectionThree = style.div`
    background-color:#F7F7F7;
    `
    const AdditionalChart = style.div`
    background-color:#F7F7F7;
    `
  return (
    <div>
      <Section1 className='d-none d-lg-flex align-items-center justify-content-between p-2 px-3'>
          <div><span className='fw-bold'>Dashborad</span></div>
          <div className='d-flex'>
            <div>Home<KeyboardDoubleArrowRightIcon /></div>
            <div>Dashboard <KeyboardDoubleArrowRightIcon /></div>
            <div>All-User </div>
          </div>
      </Section1>
      <SectionTwo>
        <div className='row justify-content-around py-3 pt-4 g-0'>
        {StateCard.map((value, key)=>{
          
          return(
            
            <>
              <div key={key} className="stAte m-2 rounded-1 d-flex justify-content-between p-3">
                <div>
                  
                  <h3 className='grayColor'>{value.Number}</h3>
                  <div className=''> 
                    <p className='black'><b> pending user</b></p>
                  </div>
                </div>
                <div>
                  <div className="p-2 rounded text-primary iconBack">
                    {value.Icon}
                  </div>
                </div>
              </div>
            </>
          )
        })}
        </div>
        <div>
          <div className='row justify-content-center g-0 pb-4'>
            <div className='cartOne col-11 col-lg-5 mx-2 p-3 rounded'>
              <div>
              <h3 className='fw-bold h5 grayColor'>Line Chart</h3>
              </div>
                <ExampleOne />
              <div></div>  
            </div>
            <div className='col-11 col-lg-6 mx-2 p-3 cartOne rounded'>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='pb-4'>
                  <h3 className='fw-bold h5 grayColor'>Tree Map</h3>
                </div> 
              </div>  
              <ExampleThree />
            </div>
          </div>
        </div>
      </SectionTwo>
      <AdditionalChart>
      <div>
          <div className='row justify-content-center g-0 pb-4'>
            <div className='cartOne col-11 col-lg-6 mx-2 p-3 rounded'>
              <div>
              <h3 className='fw-bold h5 grayColor'>Pie Chart</h3>
              </div>
              <ExampleTwo />

              <div></div>  
            </div>
            <div className='col-11 col-lg-5 mx-2 p-3 cartOne rounded example'>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='pb-4'>
                  <h3 className='fw-bold h5 grayColor'>Radar Chart</h3>
                </div> 
              </div>  
                <ExampleFour />
            </div>
          </div>
        </div>
      </AdditionalChart>
      <SectionThree>
        <div className='row justify-content-center g-0'>
          <div className='col-11 col-lg-6 m-2 cartOne1 p-3 rounded-2 pt-5'>
            <LongTextSnackbar />
          </div>
          <div className='col-11 col-lg-5 m-2 cartOne1 p-3 rounded-2'>
            <div className="d-flex justify-content-between align-items-center overflow-auto"><h4 className='fw-bold grayColor h5 pb-3'>Images List</h4></div>
            
            <TitlebarBelowImageList className=""/>
          </div>
        </div>
      </SectionThree>

    </div>
  )
}

export default Section2;
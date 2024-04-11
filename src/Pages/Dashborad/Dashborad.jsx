import React, { useEffect } from 'react'
import "./dashborad.css"
import { FaRegUser } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { FiUserCheck } from "react-icons/fi";
import { GrNote } from "react-icons/gr";
import BarChart from '../Charts/BarChart';
import TableWithImg from '../../Component/Common/TableWithImg';


const Dashborad = () => {

    useEffect(()=>{
        // const fetchData = async()=>{

        //     await fetch ("https://fakestoreapi.com/products").then((res)=>res.json()
        // .then((json)=>console.log(json)))

        // }
        // fetchData()


    },[])

  return (
    <div className='dashborad_section '>
        <div className='d-flex gap-3 flex-wrap justify-content-between'>
        <div className='d-flex align-items-center gap-3 dash_card  '>
            <div className='icon_bg4 d-flex align-items-center justify-content-center'>
                <img src='/icons/dash1.svg' className=''/>
            </div>
            <div className='d-flex flex-column gap-2'>
                <b><span>$307144</span></b>
                <div>Total Purchase Due jdjd</div>
            </div>
        </div>
        <div className='d-flex align-items-center gap-3 dash_card'>
            <div className='icon_bg1 d-flex align-items-center justify-content-center'>
                <img src='/icons/dash4.svg' className=''/>
            </div>
            <div className='d-flex flex-column gap-2'>
                <b><span>$100144</span></b>
                <div>Total Purchase Due</div>
            </div>
        </div>
        <div className='d-flex align-items-center gap-3 dash_card'>
            <div className='icon_bg2 d-flex align-items-center justify-content-center'>
                <img src='/icons/dash2.svg' className=''/>
            </div>
            <div className='d-flex flex-column gap-2'>
                <b><span>$30004</span></b>
                <div>Total Sales Due</div>
            </div>
        </div>
        <div className='d-flex align-items-center gap-3 dash_card'>
            <div className='icon_bg3 d-flex align-items-center justify-content-center'>
                <img src='/icons/dash3.svg' className=''/>
            </div>
            <div className='d-flex flex-column gap-2'>
                <b><span>$63544</span></b>
                <div>Total Sale Amount</div>
            </div>
        </div>
        </div>

        <div className='d-flex gap-3 flex-wrap  justify-content-between'>
        <div className='d-flex align-items-center gap-3 dash_card_bck justify-content-between'>
            
            <div className='d-flex flex-column gap-2'>
                <b><span>$100</span></b>
                <div>Total Purchase Due</div>
            </div>
            <div className=' d-flex align-items-center  justify-content-center '>
            <FaRegUser  size={30} />
            </div>
        </div>
        <div className='d-flex align-items-center gap-3 dash_card_bck justify-content-between' style={{background:"#00cfe8"}}>
           
            <div className='d-flex flex-column gap-2'>
                <b><span>$200</span></b>
                <div>Total Purchase Due</div>
            </div>
            <div className=' d-flex align-items-center justify-content-center '>
                <FiUserCheck size={30} />
            </div>
        </div>
        <div className='d-flex align-items-center gap-3 dash_card_bck justify-content-between' style={{background:"#1b2850"}}>
            <div className='d-flex flex-column gap-2'>
                <b><span>$100</span></b>
                <div>Total Sales Due</div>
            </div>
            <div className=' d-flex align-items-center justify-content-center '>
            <GrNotes size={30}/>
            </div>
        </div>
        <div className='d-flex align-items-center gap-3 dash_card_bck justify-content-between'style={{background:"#28c76f"}}>
            
            <div className='d-flex flex-column gap-2'>
                <b><span>$300</span></b>
                <div>Total Sale Amount</div>
            </div>
            <div className=' d-flex align-items-center justify-content-center'>
            <GrNote size={30} />
            </div>
        </div>
        </div>
        <div className='d-flex justify-content-between gap-3 mt-4'>
        <div className='chart w-50 '>
            <BarChart/>

        </div>
        <div className='w-50'>
            <TableWithImg/>
        </div>
        </div>
      
    </div> 
  )
}

export default Dashborad

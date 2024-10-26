import React from 'react'
import '../style/past_item_info.scss'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const past_item_info = () => {
  return (
    <>
    <div className="item-info-heading">
        <Link to="/pastissuedhistory"> <IoMdArrowRoundBack /></Link>
        <h1> Faculty Information </h1>
      </div>
      <div className="item-info-wrapper">
      <div className="item-info-container">
      <div className="input-group">
        <div className="input-row">
          <label>Faculty Name : </label>
          <input type="text" value='MS Dhoni' readOnly />
        </div>
        <div className="input-row">
          <label>Faculty Enrollment No. : </label>
          <input type="text" value='BTCSE123456' readOnly/>
        </div>
        <div className="input-row">
          <label>Faculty Contact No. : </label>
          <input type="number" value='164598745' readOnly/>
        </div>
        <div className="input-row">
          <label>Faculty Email : </label>
          <input type="email" value='faculty@gmail.com' readOnly/>
        </div>
        <div className="input-row">
          <label>Faculty Branch Name : </label>
          <input type="text" value='Btech (CSE)' readOnly/>
        </div>
        <div className="input-row">
          <label>Faculty Department Name : </label>
          <input type="text" value='Btech (CSE)' readOnly/>
        </div>
        <div className="input-row">
          <label>Faculty Institute Name : </label>
          <input type="text" value='Shri Vaishnav Institute Of Information Technology'readOnly/>
        </div>
        <div className="input-row">
          <label>Issue Date : </label>
          <input type="date" value='10/10/2021' readOnly/>
        </div>
        <div className="input-row">
          <label>Return Date : </label>
          <input type="date" value='10/10/2021' readOnly/>
        </div>
        <div className="input-row">
          <label>Time Stamp : </label>
          <input type="text" value='02:11Am'readOnly/>
        </div>
        <div className="input-row">
          <label>Item Name : </label>
          <input type="text" value='Laptop' readOnly />
        </div>
        <div className="input-row">
          <label>Item Company Name : </label>
          <input type="text" value='Dell' readOnly/>
        </div>
        
        <div className="input-row">
          <label>SVVV Code No. : </label>
          <input type="text" value='2024SVVVCSE101' readOnly/>
        </div>
        <div className="input-row">
          <label>Serial No. : </label>
          <input type="text" value='202020' readOnly/>
        </div>
        <div className="input-row">
          <label>Remark : </label>
          <input type="text" value='valid' readOnly/>
        </div>
      </div>
    </div>
      </div>
    </>
  )
}

export default past_item_info

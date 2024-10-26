import React, { useState } from 'react'
import '../style/issued_item_count.scss'
import { useNavigate } from "react-router-dom";

const issued_item_count = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      sNo: 1,
      facultyName: "ABC Corp",
      itemSerialNo: "ABC123",
      svvvEncodedNo: "SVVV001",
    },
    {
      sNo: 2,
      facultyName: "XYZ Inc",
      itemSerialNo: "XYZ456",
      svvvEncodedNo: "SVVV002",
    },
    {
      sNo: 3,
      facultyName: "PQR Ltd",
      itemSerialNo: "PQR789",
      svvvEncodedNo: "SVVV003",
    },
    {
      sNo: 4,
      facultyName: "LMN Co",
      itemSerialNo: "LMN012",
      svvvEncodedNo: "SVVV004",
    },
    {
      sNo: 5,
      facultyName: "STU LLC",
      itemSerialNo: "STU345",
      svvvEncodedNo: "SVVV005",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Filter the data based on search query
    const filteredData = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    // Update the data with filtered results
    setData(filteredData);
  };

  return (
    <>
    <div className="heading">
        <h1>Issued Item Count</h1>
      </div>
      <div className="search-download-btn-container">
        <div className="search-field">
          <input 
            type="text" 
            placeholder="Search" 
            name="text" 
            className="input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        <button className="download-btn">Download</button>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Faculty Name</th>
              <th>Item Serial No.</th>
              <th>SVVV Encoded No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.sNo}>
                <td>{item.sNo}</td>
                <td>{item.facultyName}</td>
                <td>{item.itemSerialNo}</td>
                <td>{item.svvvEncodedNo}</td>
                <td>
                  <button onClick={() => navigate("/issuediteminfo")}>
                    More Info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default issued_item_count;

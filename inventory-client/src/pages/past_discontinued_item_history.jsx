import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../style/past_discontinued_item_history.scss'

const PastDiscontinuedItemHistory = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState([
    {
      sNo: 1,
      item: "Widget A",
      itemCompanyName: "ABC Corp",
      itemSerialNo: "ABC123",
      svvvEncodedNo: "SVVV001",
      itemdeletedate: "2024-04-08",
    },
    {
      sNo: 2,
      item: "Widget B",
      itemCompanyName: "XYZ Inc",
      itemSerialNo: "XYZ456",
      svvvEncodedNo: "SVVV002",
      itemdeletedate: "2024-04-08",
    },
    {
      sNo: 3,
      item: "Widget C",
      itemCompanyName: "PQR Ltd",
      itemSerialNo: "PQR789",
      svvvEncodedNo: "SVVV003",
      itemdeletedate: "2024-04-08",
    },
    {
      sNo: 4,
      item: "Widget D",
      itemCompanyName: "LMN Co",
      itemSerialNo: "LMN012",
      svvvEncodedNo: "SVVV004",
      itemdeletedate: "2024-04-08",
    },
    {
      sNo: 5,
      item: "Widget E",
      itemCompanyName: "STU LLC",
      itemSerialNo: "STU345",
      svvvEncodedNo: "SVVV005",
      itemdeletedate: "2024-04-08",
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
        <h1>Past Discontinued Item History</h1>
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
        <button className="download-btn">Download Excel</button>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Item Name</th>
              <th>Item Company Name</th>
              <th>Item Serial No.</th>
              <th>SVVV Encoded No.</th>
              <th>Item Delete Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.sNo}>
                <td>{item.sNo}</td>
                <td>{item.item}</td>
                <td>{item.itemCompanyName}</td>
                <td>{item.itemSerialNo}</td>
                <td>{item.svvvEncodedNo}</td>
                <td>{item.itemdeletedate}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate("/pastitemhistory");
                    }}
                  >
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

export default PastDiscontinuedItemHistory

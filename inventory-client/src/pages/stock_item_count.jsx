import React, { useState } from "react";
import "../style/stock_item_count.scss";
import { useNavigate } from "react-router-dom";

const stock_item_count = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      sNo: 1,
      item: "Widget A",
      itemCompanyName: "ABC Corp",
      itemSerialNo: "ABC123",
      svvvEncodedNo: "SVVV001",
    },
    {
      sNo: 2,
      item: "Widget B",
      itemCompanyName: "XYZ Inc",
      itemSerialNo: "XYZ456",
      svvvEncodedNo: "SVVV002",
    },
    {
      sNo: 3,
      item: "Widget C",
      itemCompanyName: "PQR Ltd",
      itemSerialNo: "PQR789",
      svvvEncodedNo: "SVVV003",
    },
    {
      sNo: 4,
      item: "Widget D",
      itemCompanyName: "LMN Co",
      itemSerialNo: "LMN012",
      svvvEncodedNo: "SVVV004",
    },
    {
      sNo: 5,
      item: "Widget E",
      itemCompanyName: "STU LLC",
      itemSerialNo: "STU345",
      svvvEncodedNo: "SVVV005",
    },
    // Add more data here
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteDate, setDeleteDate] = useState("");

  const handleDelete = () => {
    setData(data.filter((item) => item !== selectedItem));
    setSelectedItem(null);
    setShowDeleteModal(false);
    setDeleteDate("");
  };

  const handleCancel = () => {
    setSelectedItem(null);
    setShowDeleteModal(false);
    setDeleteDate("");
  };

  const handleDateChange = (event) => {
    setDeleteDate(event.target.value);
  };

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
        <h1>Stock Item Count</h1>
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
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="download-btn">Download Excel</button>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Item</th>
              <th>Item Company Name</th>
              <th>Item Serial No</th>
              <th>SVVV Encoded No</th>
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
                <td>
                  <button onClick={() => navigate("/stockiteminfo")}>More Info</button>
                  <button onClick={() => {
                    setSelectedItem(item);
                    setShowDeleteModal(true);
                  }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDeleteModal && (
        <div className="delete-modal">
          <div className="modal-content">
            <h2>
              {`Are you sure you want to delete this "${selectedItem?.itemSerialNo}" item permanently from SvvvInvento? then insert date and delete the item`}
            </h2>
            <input type="date" value={deleteDate} onChange={handleDateChange} required/> <br /> <br />
            <button onClick={handleDelete} disabled={!deleteDate}>Delete</button> <span></span>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default stock_item_count;

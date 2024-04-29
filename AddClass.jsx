import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FeePayments() {
  const [course, setCourse] = useState("");
  const [amount, setAmount] = useState("");
  const [upiId, setUpiId] = useState("");
  const [bank, setBank] = useState("");
  const navigate = useNavigate();

  const handleFeePayment = (event) => {
    event.preventDefault(); // Prevent default form submission

    axios
      .put("http://localhost:8081/Fee_payments", {
        course,
        amount,
        upiId,
        bank,
      })
      .then((response) => {
        alert("Payment done successfully!");
        navigate("/index"); // Assuming '/index' is your login page route
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          alert(`Error: ${error.response.data.error}`);
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  return (
    <div className="col-md-11 grid-margin stretch-card">
      <div className="card">
        <div className="card-header" style={{ backgroundColor: "#57c7d4", height: "40px" }}>
          <h4 className="card-title" style={{ marginLeft: "25px", marginTop: "10px", color: "black" }}>
            <i className="fa fa-key"></i> Fee Payments
          </h4>
        </div>
        <div className="card-body">
          <form className="forms-sample" onSubmit={handleFeePayment}>
            <div className="form-group">
              <label htmlFor="courseCode">Course Code</label>
              <input
                type="text"
                className="form-control"
                id="courseCode"
                name="courseCode"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                autoComplete="off"
                placeholder="Select a course code"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                autoComplete="off"
                placeholder="Enter amount"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="upiId">UPI Id</label>
              <input
                type="text"
                className="form-control"
                id="upiId"
                name="upiId"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                autoComplete="off"
                placeholder="xxx@ybl"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bank">Select a Bank</label>
              <select
                className="form-control"
                id="bank"
                name="bank"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                required
              >
                <option value="">Select a Bank</option>
                <option value="HDFC">HDFC</option>
                <option value="ICICI">ICICI</option>
                <option value="SBI">SBI</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeePayments;

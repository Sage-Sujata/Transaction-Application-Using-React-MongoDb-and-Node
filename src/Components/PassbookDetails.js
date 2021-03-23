import React, { Component } from "react";
import axios from "axios";

class PassbookDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    {
      axios.get("http://localhost:5002/importdata").then((res) => {
        this.setState({ data: res.data });
      });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div style={{ color: "blue" }}>
        <table>
          <tr
            style={{
              border: "2px solid black",
              backgroundColor: "lightblue",
            }}
          >
            <th style={{ border: "2px solid black", padding: "10px" }}>
              Date{" "}
            </th>
            <th style={{ border: "2px solid black", padding: "10px" }}>
              Description
            </th>
            <th style={{ border: "2px solid black", padding: "10px" }}>
              Credit
            </th>
            <th style={{ border: "2px solid black", padding: "10px" }}>
              Debit
            </th>
            <th style={{ border: "2px solid black" }}>Running Balance</th>
          </tr>

          {/* {data.length ?
            data.map()(data => 
              <tr>
                <td style={{ border: "2px solid black", padding: "10px" }}></td>
                <td style={{ border: "2px solid black", padding: "10px" }}></td>
                <td style={{ border: "2px solid black", padding: "10px" }}></td>
                <td style={{ border: "2px solid black", padding: "10px" }}></td>
                <td style={{ border: "2px solid black" }}></td>
              </tr>
            ): null} */}

          {data.length //Finding length to use Map function
            ? data.reverse().map((data) => (
                <tr style={this.tableStyle}>
                  {" "}
                  {/*Map Function is like For loop*/}
                
                  <td style={this.tableStyle}>{data.Date} </td>
                  <td style={this.tableStyle}>{data.Discription}</td>
                  <td style={this.tableStyle}>
                    {data.TransactionType == "Debit" ? (
                      <>{data.Amount}</>
                    ) : (
                      <p></p>
                    )}
                  </td>
                  <td style={this.tableStyle}>
                    {data.TransactionType == "Credit" ? (
                      <>{data.Amount}</>
                    ) : (
                      <p></p>
                    )}
                  </td>
                  <td style={this.tableStyle}>
                    <>
                      {data.TransactionType == "Debit" ? ( //Using Conditional Operator for finding Running Balance
                        <>{Number(data.Balance) - Number(data.Amount)}</>
                      ) : (
                        <>{Number(data.Balance) + Number(data.Amount)}</>
                      )}
                    </>
                  </td>
                </tr>
              ))
            : null}
        </table>
      </div>
    );
  }
}

export default PassbookDetails;


//date:new Date().toLocaldatestring
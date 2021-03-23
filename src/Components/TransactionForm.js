import react, { Component } from "react";

import axios from 'axios';
class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Amount: "",
      Discription: "",
      TransactionType: "Debit",
    };
  }


//axios get
componentDidMount(){
//     {
//         axios.get("http://localhost:5002/exportdata")
//           .then(res => {
//             const persons = res.data;
//             this.setState({ name : persons });
//           })
//       }
}





//axios post
// handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
    // event.preventDefault();

    

    // axios.post("http://localhost:5002/exportdata", this.state)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
//   }




  handleAmountChange = (event) => {
    this.setState({
      Amount: event.target.value
    })
  }

  handleDiscriptionChange = (event) => {
    this.setState({
      Discription: event.target.value
    })
  }

  handleTransactionTypeChange = (event) => {
    this.setState({
      TransactionType: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.Amount} ${this.state.Discription} ${this.state.TransactionType}`);
    // event.preventDefault();


    axios.post("http://localhost:5002/exportdata", this.state)







  };
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          {/* <label>Amount</label> */}
          <input
            type="text"
            value={this.state.Amount}
            onChange={this.handleAmountChange}
            placeholder = "Amount"
            required
          />
        </div>
        <div>
          {/* <label>Discription</label> */}
          <textarea
            type="text"
            value={this.state.Discription}
            onChange={this.handleDiscriptionChange}
            placeholder = "Discription"
            required


          />
        </div>
        <div>
          <select value={this.state.TransactionType} onChange={this.handleTransactionTypeChange}
          required>
            <option value="Debit">Debit</option>
            <option value="Credit">Credit</option>
          </select>
          <button type="submit">Add Transaction </button>
        </div>
      </form>
    );
  }
}

export default TransactionForm;

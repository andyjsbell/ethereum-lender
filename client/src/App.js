import React, { Component, useState } from 'react';
import './App.css';
import getWeb3 from "./utils/getWeb3";

const Home = (props) => {
  return (
    <>
    Home
    </>
  )
};

class App extends Component {

  state = {web3: null, accounts: []};
  
  handleChange(event, newValue) {
    this.setState({value: newValue});
  }

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.accounts;
      const networkId = await web3.version.network;
      // const deployedNetwork = ControllerContract.networks[networkId];
      // const contract  = web3.eth.contract(ControllerContract.abi);
      // const instance = contract.at(deployedNetwork.address);

      this.setState({ web3:web3, accounts:accounts });
      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );

      console.error(error);
    }
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contracts...</div>;
    }
    
    return (
      <>
        <Home {...this.state}/>
      </>
    );
  }
}

export default App;

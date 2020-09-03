import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ItemCard from '../Component/ItemCard';
import Filter from '../Component/Filter';



class App extends Component {
  state = {
    data: [],
    params: {}
  }
  componentDidMount() {
    this.fetchData()
  }
  setValue = (target, type, value) => {
    if (type in this.state.params && value === this.state.params[type]) {
      delete this.state.params[type];
      target.style.backgroundColor = 'var(--light-green)';
      this.fetchData()
    } else {
      [...target.parentElement.children].forEach(element => {
        element.style.backgroundColor = 'var(--light-green)';
      });
      target.style.backgroundColor = 'var(--dark-green)';
      this.setState(prevState => ({
        params: {
          ...prevState.params,
          [type]: value
        }
      }),
        () => this.fetchData()
      )
    }
  }


  fetchData = () => {
    axios.get('https://api.spacexdata.com/v3/launches?limit=100', { params: this.state.params })
      .then(res => this.showOutput(res.data))
      .catch(err => console.log(err))
  }

  showOutput = (data) => {
    this.setState({
      data
    })
  }

  render() {

    const outputItem = this.state.data.map(item => {
      return <ItemCard key={item.mission_name} details={item} />
    })
    return (
      <div className="App">
        <div className="contentContainer">
          <h1 className="heading mt-20 fs-24">SpaceX Launch Programs</h1>
          <Filter setValue={this.setValue} />
          <div className="content">
            {outputItem}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

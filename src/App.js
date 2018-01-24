import React, { Component } from 'react';
import SearchKey from './SearchKey';
import ImageList from './ImageList';

import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      initRun: true
    }
  }

  dataFetch = (keyword, initRun) => {
    let self = this;
    keyword = encodeURI(keyword);
    let requestURL = `${this.props.url}&q=${keyword}`;

    fetch(requestURL)
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        response.json().then((data) => {
          self.setState({
            data: data.data,
            initRun: initRun
          });
        });
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  }

  handleKeywordChange = (keyword) => {
    this.dataFetch(keyword, false);
  }

  componentDidMount() {
    this.dataFetch(this.props.firstInput, true);
  }

  render() {
    return (
      <div className="giphyContainer">
        <SearchKey firstInput={this.props.firstInput} onKeywordChange={this.handleKeywordChange} />
        <ImageList imageslist={this.state.data} initRun={this.state.initRun} />
      </div>
    );
  }
}

export default App;

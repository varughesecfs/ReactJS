import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

const Giff = {
    base_url: "http://api.giphy.com/v1/gifs/",
    query: ["search", "trending","translate","random"],
    api_key: "dc6zaTOxFJmzC",
    limit: 50,
    offset: 0
}
let url = `${Giff.base_url}${Giff.query[0]}?api_key=${Giff.api_key}&limit=${Giff.limit}&offset=${Giff.offset}`;
let firstInput = 'computer';

ReactDOM.render(
    <App url={url} firstInput={firstInput} />,
    document.getElementById('root')
);
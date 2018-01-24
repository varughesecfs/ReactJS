import React, { Component } from 'react';

import './index.css';

class SearchKey extends Component {
    Timer(func, wait, immediate) {
        let timeout;
        return function () {
            let context = this,
                args = arguments;
            let callNow = immediate && !timeout;
            let _delay = function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            }
            clearTimeout(timeout);
            timeout = setTimeout(_delay, wait);
            if (callNow) func.apply(context, args);
        }
    }
    handleChange = () => {
        this.props.onKeywordChange(this.searchKeyword.value);
    }

    render() {
        return (
            <div className="giphyInput">
                <input className="giphyInput"
                    type="text"
                    placeholder="Search GIF's..."
                    ref={(ref) => this.searchKeyword = ref}
                    onChange={this.Timer(this.handleChange, 600, false)}
                />
            </div>
        )
    }
}

export default SearchKey;
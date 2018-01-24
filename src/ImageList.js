import React, { Component } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

import './index.css';

function Image({ src }) {
    return  <li className="giphyItem"><img src={src} alt='' /> </li>;         
}

class ImageList extends Component {
    constructor(){
        super()
         }
    componentDidUpdate() {  
        let len = this.props.imageslist.length;
        if (len) {
            let grid = document.querySelector('.giphyList');

            var msnry = new Masonry(grid, {
                itemSelector: '.giphyItem',
                columnWidth: '.giphyItem',
                percentPosition: true
            });
            imagesLoaded(grid).on('progress', function () {
                msnry.layout();
            });
        }
    }
    render() {
        let images = [],
            returnHTML;     
            this.props.imageslist.map((item) => {
            let key = item.id.toString(),
                src = item.images.fixed_width.url;
            return images.push(<Image key={key} src={src} />);

        });
        if (images.length) {
            returnHTML = <ul className="giphyList">{images}</ul>;
        } else {
            if (this.props.initRun) {
                // initRun no messages
                returnHTML = <div></div>
            } else {
                returnHTML = <div className="error">No GIF's Found!</div>;
            }
        }
        return (returnHTML);
    }
}

export default ImageList;
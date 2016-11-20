require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let imagesDataArr = require('../data/imageData.json');
// let yeomanImage = require('../images/yeoman.png');
// 获取图片数据的json模块
let imagesDataArr = [
    {
        "filename": "1.jpg",
        "title": "monica",
    },
     {
        "filename": "2.jpg",
        "title": "monica",
    },
     {
        "filename": "3.jpg",
        "title": "monica",
    },
     {
        "filename": "4.jpg",
        "title": "monica",
    },
     {
        "filename": "5.jpg",
        "title": "monica",
    },
     {
        "filename": "6.jpg",
        "title": "monica",
    },
     {
        "filename": "7.jpg",
        "title": "monica",
    },
     {
        "filename": "8.jpg",
        "title": "monica",
    }
];

// 将图片名信息转化为图片名路径信息
var imagesData = (function(imagesDataArr){
    for(var i = 0; i < imagesDataArr.length; i++){
        var singleImagedata = imagesDataArr[i]; 
        singleImagedata.URL = require("../images/" + singleImagedata.filename);

        imagesDataArr[i] = singleImagedata;
    }
    return imagesDataArr; 
})(imagesDataArr);



class AppComponent extends React.Component {
  render() {
    return (
        <section className = "stage">
            asdkjsdakasd
            <section className = "img-sec"></section>
            <nav className = "controller-nav"></nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

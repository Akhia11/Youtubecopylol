let api_key = "AIzaSyBzVZ59bfGxcPKNgBeLY1ACSzkJOLFuveM";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";

import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

<Skeleton /> // Simple, single-line loading skeleton
<Skeleton count={5} /> // Five-line loading skeleton

fetch(video_http + new URLSearchParams({
  key: api_key,
  part: 'snippet',
  chart: 'mostPopular',
  maxResult: 1,
  regionCode: 'US'
}))
.then(res => res.json())
.then(data => { 
     console.log(data);
})



// search bar
const input = document.querySelector ('.search-bar');
const searchbtn = document.querySelector('.search-btn');
let searchLink = "https:/www.youtube.com/results?search_query=";

searchbtn.addEventListener('click', () => {
if(input.value.length){
  location.href = searchLink + input.value;
}
})
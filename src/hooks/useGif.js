import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');

  
    async function fetchData(tag) {
      setLoading(true);
      
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource ?? "https://media3.giphy.com/media/VWEKSiX3SFH7G/giphy.gif?cid=2e783e0804ab160280aad305a214de5114cefc8e71f60bab&ep=v1_gifs_random&rid=giphy.gif&ct=g");
      setLoading(false);
    }
    
    useEffect( () => {
      fetchData('car');
    },[] )

    return {gif,loading, fetchData};
}

export default useGif

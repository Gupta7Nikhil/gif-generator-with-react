import React from 'react'
// import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');


  async function fetchData(tag) {
    setLoading(true);
    const datam = [ "https://media4.giphy.com/media/w8VuZaBbV7Adi/100.webp?cid=ecf05e47ur5u9envt9jgoe52uoj8cnthnp1nnkqbcj29xs9h&ep=v1_gifs_search&rid=100.webp&ct=g",
                   "https://media1.giphy.com/media/y6aIe3UTKvVHXbEcSm/200w.webp?cid=ecf05e47ur5u9envt9jgoe52uoj8cnthnp1nnkqbcj29xs9h&ep=v1_gifs_search&rid=200w.webp&ct=g",
                   "https://media4.giphy.com/media/YHBLTvYWH7sTRDoNCt/200w.webp?cid=ecf05e47ur5u9envt9jgoe52uoj8cnthnp1nnkqbcj29xs9h&ep=v1_gifs_search&rid=200w.webp&ct=g",
                   "https://media1.giphy.com/media/TiQEZsHWDW5MCrddWB/200w.webp?cid=ecf05e47tdo5viu9yhwge77ih9ble0eaezt9vd0v2i70dp4q&ep=v1_gifs_search&rid=200w.webp&ct=g",
                   "https://media4.giphy.com/media/3ohfFAlvGhg7FpgpEY/200w.webp?cid=ecf05e47j23tlkp1irskz9q5szyvbutsldcq13jvs9dnfqs8&ep=v1_gifs_search&rid=200w.webp&ct=g",
                   "https://media4.giphy.com/media/Bphn3lj2zqCavgCnrE/100.webp?cid=ecf05e47tdo5viu9yhwge77ih9ble0eaezt9vd0v2i70dp4q&ep=v1_gifs_search&rid=100.webp&ct=g",
                   "https://media3.giphy.com/media/yYQcJwvuNaUTe/giphy.webp?cid=ecf05e47tdo5viu9yhwge77ih9ble0eaezt9vd0v2i70dp4q&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                   "https://media1.giphy.com/media/FejKb3bDS5c9a/200.webp?cid=ecf05e477qsn0i1tpvkgveqf7jj1doj2289novjlamsyz329&ep=v1_gifs_search&rid=200.webp&ct=g",
                   "https://media3.giphy.com/media/HVTJBh1JyhZq8/giphy.webp?cid=ecf05e47dymc908ybk9lzc0j1h7d8dxhk5xfo5r8ny8jtquo&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                   "https://media4.giphy.com/media/JtRmvTCjZw61W/giphy.webp?cid=ecf05e47vikawh8umwz03w7hjhgtw46jc57s9cqw3a2wme53&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                   "https://media2.giphy.com/media/NVMeGBYDhyo/200w.webp?cid=ecf05e47vls9j85sy18rw1n4oowcdzvmulrkhpqfk3snal60&ep=v1_gifs_search&rid=200w.webp&ct=g",
                   "https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif",
                   "https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1",
                   "https://i.gifer.com/XOsX.gif",
                   "https://cdn.pixabay.com/animation/2022/12/05/15/23/15-23-06-837_512.gif"];
    let n = Math.ceil(Math.random() * (15));
    setGif(datam[n]);
    setLoading(false);
  }

  useEffect(() => {
    fetchData('car');
  }, [])

  return { gif, loading, fetchData };
}

export default useGif

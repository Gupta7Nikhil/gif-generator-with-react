import React, { useState } from 'react'

import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {


  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif ?? "https://media3.giphy.com/media/VWEKSiX3SFH7G/giphy.gif?cid=2e783e0804ab160280aad305a214de5114cefc8e71f60bab&ep=v1_gifs_random&rid=giphy.gif&ct=g"} width="450" />)
    }

      

      <button onClick={() => fetchData()}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Random

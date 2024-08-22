import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongData from './SongData'

const DisplayHome = () => {
  return (
    <>
    <Navbar />
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2x1'>Feature Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
    </div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2x1'>Today;s Biggest Hits </h1>
        <div className='flex overflow-auto'>
        {songsData.map((item, index) => (<SongData key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
    </div>
    </>
  )
}

export default DisplayHome
import React from 'react'
import HeroBanner from './herobanner/HeroBanner'
import Trending from './Trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
import "./style.scss"

const Home = () => {
  return (
    <div className="homepage">
        <HeroBanner/>
        <Trending/>
        <Popular />
        <TopRated/>
    </div>
  )
}
export default Home;
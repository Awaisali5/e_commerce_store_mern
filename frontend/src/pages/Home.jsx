import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProducts from '../components/BannerProducts'
import HorizontalProductCard from '../components/HorizontalProductCard'
import VerticalCardProduct from '../components/VerticalCardProduct'
import ProductDetails from './ProductDetails'

function Home() {
  return (
    <div>Home
      <CategoryList />
      <BannerProducts />
      <HorizontalProductCard category={"Moblies"} heading={"Top's Selling"}/>
      <VerticalCardProduct category={"Smart Devices"} heading={"Best Reviews"} />
      <ProductDetails />
    </div>
  )
}

export default Home
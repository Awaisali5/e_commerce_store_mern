import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SummaryApi from "../common/index"
import axios from 'axios';


function CategoryList() {

    // managing the product category 


    const [categoryProduct,setCategoryProduct] = useState([])

    // setting the loader 
    const [loading,setLoading] = useState(false)
    const categoryLoading = new Array(13).fill(null)


// handling the Api requrest 

    // const categoryLoading = new Array(13).fill(null)

    // // fetching the data 

    const fetchCategoryProduct = async() =>{
        setLoading(true)

        // const response = await fetch(SummaryApi.AllProducts)
        // const dataResponse = await response.json()
        const res=await axios.get(SummaryApi.AllProducts.category)
        setLoading(false)
        setCategoryProduct(res.data)

        console.log("the data we get is as follow:", setCategoryProduct)
    }

    useEffect(()=>{
        fetchCategoryProduct()
    },[])

  return (
    <><h1>CategoryList</h1>
     <div className='container mx-auto p-4'>
           <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none'>
            {

                loading ? (
                    categoryLoading.map((el,index)=>{
                            return(
                                <div className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading"+index}>
                                </div>
                            )
                    })  
                ) :
                (
                    categoryProduct.map((product,index)=>{
                        return(
                            <Link to={"/product-category?category="+product?.category} className='cursor-pointer' key={product?.category}>
                                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center'>
                                    <img src={product?.image_urls[0]} alt={product?.category} className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all'/>
                                </div>
                                <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>
                                
                            </Link>
                        )
                    })
                )
            }
           </div>
    </div>
    
    
    </>
  )
}

export default CategoryList
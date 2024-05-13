import React from 'react'

const SearchProducts = () => {

    // handle the query 
    const query = useLocation()

    // handle the data and loader 
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    console.log("query",query.search)






  return (
    <>SearchProducts
    
    <div className='container mx-auto p-4'>
      {
        loading && (
          <p className='text-lg text-center'>Loading ...</p>
        )
      }
 
      <p className='text-lg font-semibold my-3'>Search Results : {data.length}</p>

      {
        data.length === 0 && !loading && (
           <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
        )
      }


      {
        data.length !==0 && !loading && (
          <VerticalCard loading={ loading} data={data}/>
        )
      }

    </div>
    
    </>
  )
}

export default SearchProducts
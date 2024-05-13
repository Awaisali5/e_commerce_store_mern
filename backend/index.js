const express= require('express')
const { Pool } = require('./config/database');

//  const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'products',
//     password: '123456',
//     port: 5432,
//   });


const app= express();

app.get('/', (req, res) => {
    res.send("FYP");
});


// defining the port 

const Port= process.env.Port | 4000;


// showing the data 

app.get('/products', async (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (page - 1) * pageSize;
  
    try {
        // Connection to the db 
      const client = await Pool.connect();

// query to get the result 

      const result = await client.query('SELECT * FROM products LIMIT $1 OFFSET $2', [pageSize, offset]);
    //  result to row form 
      const products = result.rows;
      client.release();
      res.json(products);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).send('Internal Server Error');
    }
  });
  

//   getting product products reviews based on their ID 

  app.get('/products/:productId/reviews', async (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (page - 1) * pageSize;
    const productId = parseInt(req.params.productId);
  
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM reviews WHERE product_id = $1 LIMIT $2 OFFSET $3', [productId, pageSize, offset]);
      const reviews = result.rows;
      client.release();
      res.json(reviews);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).send('Internal Server Error');
    }
  });



// listing the app 

app.listen(Port, ()=> {
    console.log(`Localhost running at ${Port}`);
})

// **********************************************
// Backend (Node.js with Express.js)
// const express = require('express');
// const { Pool } = require('pg');

// const app = express();
// const port = 3000;

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'products',
//   password: '123456',
//   port: 5432,

// });

// app.get('/api/products', async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM products');
//     const products = result.rows;
//     client.release();
//     res.json(products);
//   } catch (err) {
//     console.error('Error executing query', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



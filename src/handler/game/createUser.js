// const db = require('../../../connection/dbConnect');

// const createUser = (request, response) => {
//     const { name, email } = request.body
  
//     pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`User added with ID: ${result.insertId}`)
//     })
//   }

//   module.exports = createUser;
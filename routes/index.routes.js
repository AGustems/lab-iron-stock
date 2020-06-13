const express = require('express');
const router = express.Router();

const {
  getIndex,
  getUserStocks,
  addNewStock,

} = require('../controllers/index.controllers')

/* GET home page */
router.get('/', getIndex);

// Ruta a user stocks (privada) --> get per veure els stocks 
router.get('/user-stocks', getUserStocks);

// Ruta a user stocks (privada) --> post per afegir acronims
router.post('/user-stocks', addNewStock)







// Private routes (not accessible without being logged in)
//router.get('/user-stocks', getPersonalCharts)



module.exports = router;
const express = require('express');
const router = express.Router();
const factory = require('../app/api-factory');

// *******************************************
// Factory で REST-API を生成する
// *******************************************
factory.createApi(router);

module.exports = router;

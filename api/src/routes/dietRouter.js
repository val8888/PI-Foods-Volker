const router = require('express').Router();
const { getDiet } = require('../controllers/Diet');

router.get('/diet', getDiet);

module.exports = router;

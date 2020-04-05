var express = require('express');
var router = express.Router();

const controllers = require('../controllers');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('Welcome');
});
router.get('/posts', controllers.getAllPosts);
router.post('/posts', controllers.createPost);
module.exports = router;

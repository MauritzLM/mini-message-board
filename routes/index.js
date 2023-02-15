var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

/* GET form. */
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Add new comment' });
});

// Post new comment
router.post('/new', function (req, res, next) {
  let name = req.body.name;
  let comment = req.body.comment;
  console.log(req.body);
  messages.push({ text: comment, user: name, added: new Date() });
  res.redirect('/');
});

module.exports = router;

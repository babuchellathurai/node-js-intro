const express = require('express'),
app = express(),
hbs = require('express-handlebars').create({ defaultLayout: 'index.hbs'});

app.use(express.static('public'));

//setting our app engine to handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/',(request, response)=>{
  // response.send('Hello Express!');

  response.render('homepage', {title: 'main page'});
});

app.listen(3010,()=>console.log('node.js express server started at port 3010'));
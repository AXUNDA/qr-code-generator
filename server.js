const express = require('express');
const path = require('path');
const app  = express();
app.use(express.static(path.join(__dirname, 'public')))
// app.use('/static', express.static('public'))
const PORT = process.env.PORT || 3000;
app.get("/", function(req, res){
      res.sendFile(__dirname + '/index.html');
})
app.listen(PORT, function(){
      console.log('listening on port ' + PORT);
})
const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const uri = "mongodb+srv://swayam:swayamsucks@cluster-fuck.mlydz.mongodb.net/TestDB?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.catch((err) => {
    if(err)
    {
        console.log(err.message);
    }
    else
    {
        console.log("Connected to MongoDB");
    }
})

app = express();
app.use(cors({origin: 'http://localhost:3000'}));
const blogRoutes = require('./Routes/BlogRoutes');
const mainRoutes = require('./Routes/MainRoutes');


app.use(mainRoutes);
app.use(blogRoutes);



app.listen(port, () => console.log(`Listening on port ${port}`));
setInterval(function(){console.log(mongoose.connection.readyState)}, 10000);
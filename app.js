var express =require("express");
var mysql=require("mysql");
var flash = require('connect-flash');
var session = require('express-session');
var bodyParser=require("body-parser");
var path=require('path');
var app=express();
app.set('view engine','ejs');
app.use(express.static("css"));
app.use(express.static("images"));
app.use(express.static("videos"));
app.use(express.static("js"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());

var PORT=process.env.PORT ||8080;

var connection=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'hackergram'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("database is connected");
});

app.get("/",function(req,res){
    res.sendFile('index.html',{root:__dirname});
});

app.get("/registration",function(req,res){
    res.sendFile('registration.html',{root:__dirname});
});

app.post("/submit",function(req,res){
    var sql="insert into users values(null,'"+req.body.username+"','"+req.body.email+"','"+req.body.password+"','"+req.body.phone+"')";
     connection.query(sql,function(err){
         if(err) throw err;
         res.redirect('/login');
     }); 
});

app.get("/login",function(req,res){
    res.sendFile('login.html',{root:__dirname});
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.post("/dashboard",function(req,res){
var email = req.body.email;
var password = req.body.password;
        if (email && password) {
            connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.email = email;
                    req.flash('email', email);
                    res.redirect('/dashboard');

                  //  res.render('users',{email:email});
                } else {
                    res.send('Incorrect Username and/or Password!');
                }	
                res.end();		
               
            });
        } else {
            res.send('Please enter Username and Password!');
           
        }
    
});

app.get("/dashboard",function(req,res){
    req.session.loggedin = true;
    req.session.email = email;
   var  email= req.flash('email');
   sql="SELECT * FROM users";
   connection.query(sql,function(err,rows){
    req.flash('rows', rows);
    });
    connection.query("SELECT COUNT(*) as total FROM users",function(err,rows1){
        var  rows= req.flash('rows');
        res.render('users', { email:email,rows:rows,rows1:rows1[0].total});
        });

   
});

app.get("/logout",function(req,res){
    req.session.loggedin =false;
    res.redirect('/');
});

app.get("/invitecode",function(req,res){
    res.sendFile('invitecode.html',{root:__dirname});
});

app.post("/api/user/invitecode",function(req,res){
    res.send("'key':'xzCF16h1TwMImIMZW0gtZGHcJyC4I8Wow8rxYviAtok=','formate:'");
});

app.get("/admin",function(req,res){
    res.sendFile('admin.html',{root:__dirname});
});

app.post("/adminpanel",function(req,res){
    var email = req.body.email;
    var password = req.body.password;
            if (email && password) {
                connection.query('SELECT * FROM admin WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
                    if (results.length > 0) {
                        req.session.loggedin = true;
                        req.session.email = email;
                    
                        res.redirect('/admin-dashboard');
    
                      //  res.render('users',{email:email});
                    } else {
                        res.send('Incorrect Username and/or Password!');
                    }	
                    res.end();		
                   
                });
            } else {
                res.send('Please enter Username and Password!');
               
            }
        
});

app.get("/admin-dashboard",function(req,res){
    res.sendFile("/admindash.html",{root:__dirname});
})

app.post("/adminsend",function(req,res){
var a=req.body.input1;
var b=req.body.input2;
var sql="insert into url values('"+a+"','"+b+"')";
     connection.query(sql,function(err){
         if(err) throw err;
         res.send("data submitted");
     }); 

});

app.get("/challenge",function(req,res){
    sql="SELECT * FROM url";
    
    connection.query(sql,function(err,result){
        
        res.render('challenge',{result11:result[0].firsturl,result12:result[0].secoundurl,result21:result[1].firsturl,result22:result[1].secoundurl,result31:result[2].firsturl,result32:result[2].secoundurl,result41:result[3].firsturl,result42:result[3].secoundurl,result51:result[4].firsturl,result52:result[4].secoundurl,result61:result[5].firsturl,result62:result[5].secoundurl});
     });

    
});

app.get("/ctf/crypto",function(req,res){
    res.sendFile('crypto.html',{root:__dirname});
});

app.get("/ctf/sql",function(req,res){
    res.sendFile('sql.html',{root:__dirname});
});

app.get("/ctf/xss",function(req,res){
    res.sendFile('xss.html',{root:__dirname});
});

app.get("/ctf/steg",function(req,res){
    res.sendFile('steg.html',{root:__dirname});
});

app.get("/ctf/web",function(req,res){
    res.sendFile('web.html',{root:__dirname});
});

app.get("/ctf/net",function(req,res){
    res.sendFile('net.html',{root:__dirname});
});

app.post("/key1",function(req,res){
    var key=req.body.key1;
    if(key === 'HTB{hellosaver}'){
        res.redirect('/successful');
    }
    else{
     
    res.redirect('/wrongKey');

    }
});


app.post("/key2",function(req,res){
    var key=req.body.key1;
    if(key === 'HTB{keysql}'){
        res.redirect('/successful');
    }
    else{
     
    res.redirect('/wrongKey');

    }
});

app.post("/key3",function(req,res){
    var key=req.body.key1;
    if(key === 'HTB{keyxss}'){
        res.redirect('/successful');
    }
    else{
     
    res.redirect('/wrongKey');

    }
});

app.post("/key4",function(req,res){
    var key=req.body.key1;
    if(key === 'HTB{keysteg}'){
        res.redirect('/successful');
    }
    else{
     
    res.redirect('/wrongKey');

    }
});

app.post("/key5",function(req,res){
    var key=req.body.key1;
    if(key === 'HTB{keysweb}'){
        res.redirect('/successful');
    }
    else{
     
    res.redirect('/wrongKey');

    }
});

app.post("/key6",function(req,res){
    var key=req.body.key1;
    if(key === 'HTB{keysnetwork}'){
        res.redirect('/successful');
    }
    else{
     
    res.redirect('/wrongKey');

    }
});

app.get('/successful',function(req,res){
    res.sendfile('succ.html',{root:__dirname});
});

app.get('/wrongKey',function(req,res){
    res.sendfile('wrong.html',{root:__dirname});
});



app.listen(PORT,function(err){
    if(err) throw err;
    console.log(`Server is running at Port:${PORT}`);
})


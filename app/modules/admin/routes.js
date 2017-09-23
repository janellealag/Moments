//THIS IS THE CONTROLLER FOR ADMIN

//module used in this controller
var express = require('express');

//declaration of routes
var router = express.Router();
var router2 = express.Router();


router.get('/', (req,res) =>{
    res.render('admin/views/adminDashboard',  {user: `${req.session.user.strAdminEmail}`});
});

router.post('/', (req,res) =>{

    res.render('admin/views/adminDashboard');
});

router.get('/confirmationOfBusinessman', (req,res) =>{
	
    res.render('admin/views/confirmationOfBusinessman', {user: `${req.session.user.strAdminEmail}`});
});

exports.admin = router;

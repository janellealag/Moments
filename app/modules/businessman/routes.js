//THIS IS THE CONTROLLER FOR BUSINESSMAN

//module used in this controller
var express = require('express');

//declaration of router
var router = express.Router();
var authMiddleware = require('../../core/auth');

router.use(authMiddleware.hasAuth);


router.get('/', (req,res) =>{
    res.render('businessman/views/BusinessmanDashboard', {user: `${req.session.user.strBusinessmanFName}`+" "+ `${req.session.user.strBusinessmanLName}`});
});
router.post('/', (req,res) =>{
    res.render('businessman/views/BusinessmanDashboard');
});

router.get('/reservations', (req,res) =>{
    res.render('businessman/views/reservations', {user: `${req.session.user.strBusinessmanFName}`+" "+ `${req.session.user.strBusinessmanLName}`});
});

router.get('/recentTransactions', (req,res) =>{
    res.render('businessman/views/recentTransactions', {user: `${req.session.user.strBusinessmanFName}`+" "+ `${req.session.user.strBusinessmanLName}`});
});

router.get('/itemsOrServices', (req,res) =>{
    res.render('businessman/views/itemsOrService', {user: `${req.session.user.strBusinessmanFName}`+" "+ `${req.session.user.strBusinessmanLName}`});
});

exports.businessman = router;

//THIS IS THE CONTROLLER FOR ORGANIZER

//module used in this controller
var express = require('express');

//declaration of routes
var router = express.Router();
var authMiddleware = require('../../core/auth');

router.use(authMiddleware.hasAuth);

router.get('/', (req,res) =>{
    res.render('organizer/views/organizerDashboard', {user: `${req.session.user.strOrganizerFName}`+" "+ `${req.session.user.strOrganizerLName}`});
});

router.post('/', (req,res) =>{
    res.render('organizer/views/organizerDashboard');
});

router.get('/upcomingEvents', (req,res) =>{
    res.render('organizer/views/Events', {user: `${req.session.user.strOrganizerFName}`+" "+ `${req.session.user.strOrganizerLName}`});
        
});
router.get('/recentEvents', (req,res) =>{
    res.render('organizer/views/recentEvents', {user: `${req.session.user.strOrganizerFName}`+" "+ `${req.session.user.strOrganizerLName}`});
});

router.get('/unpaidAccounts', (req,res)=>{
    res.render('organizer/views/unpaidAccounts', {user: `${req.session.user.strOrganizerFName}`+" "+ `${req.session.user.strOrganizerLName}`});
});


router.get('/paidAccounts', (req,res)=>{
    res.render('organizer/views/paidAccounts', {user: `${req.session.user.strOrganizerFName}`+" "+ `${req.session.user.strOrganizerLName}`});
});

router.get('/profile', (req,res)=>{
    res.render('organizer/views/profile', {user: `${req.session.user.strOrganizerFName}`+" "+ `${req.session.user.strOrganizerLName}`});
});

exports.organizer = router;

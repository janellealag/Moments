
var express = require('express');
var router = express.Router();
var authMiddleware = require('../../core/auth');
var db = require('../../lib/database')();

router.get('/', authMiddleware.noAuthed, (req,res)=>{
	res.render('login/views/login');
});


router.post('/organizerLogin',(req,res)=>{
    
    //console.log(`${req.body.password}`);
    db.query(`SELECT * from \`tblorganizer\` where "${req.body.email}" = \`strOrganizerEmail\` AND "${req.body.password}" = \`strOrganizerPassword\` `, (err,results, fields) =>{
        console.log(Object.keys(results[0]));
        //console.log(fields[0]);
        if (results.length == 0 || results == 'undefined' || results == 'NULL'){
            res.redirect('/login');
        }
        //console.log(results);
        else if (results.length > 0) {
            req.session.user = results[0];
            res.render('organizer/views/organizerDashboard', {user: `${req.session.user.strOrganizerFName}`+" "+ `${req.session.user.strOrganizerLName}`});
        }       
    });

});

router.post('/businessmanLogin', (req,res)=>{
    db.query(`SELECT * from \`tblbusinessman\` where "${req.body.email}" = \`strBusinessmanEmail\` AND "${req.body.password} " = \`strBusinessmanPassword\`  `, (err, results, fields) =>{
        if (results.length == 0 || results == 'undefined' || results == 'NULL'){
            res.redirect('/login');
        }
        else if (results.length > 0){
            req.session.user = results[0];
            res.render('businessman/views/businessmanDashboard', {user: `${req.session.user.strBusinessmanFName}`+" "+ `${req.session.user.strBusinessmanLName}`} );
        }

    });
});

router.post('/adminLogin', (req,res)=>{
    db.query(`SELECT * FROM \`tblAdmin\` where "${req.body.email}" = \`strAdminUsername\` AND "${req.body.password}" = \`strAdminPassword\`  `, (err,results,fields)=>{
        if (results.length == 0 || results == 'undefined' || results == 'NULL'){
            res.redirect('/login');
        }
        else if (results.length > 0){
            req.session.user = results[0];
            res.render('admin/views/adminDashboard', {user: `${req.session.user.strAdminEmail}`});
        }
    });
});

router.post('/organizerSignup', (req,res)=>{
    
    db.query(`INSERT INTO  \`tblOrganizer\` (\`strOrganizerFname\`, \`strOrganizerMName\`, \`strOrganizerFName\`, \`strOrganizerEmail\`, \`strOrganizerPassword\`, \`strOrganizerUsername\`, \`strOrganizerTelephone\`, \`strOrganizerCellphone\`, \`strBusinessname\`) VALUES ("${req.body.fname}", "${req.body.mname}", "${req.body.fname}", "${req.body.email}", "${req.body.password}", "${req.body.username}", "${req.body.telephone}", "${req.body.cellphone}", "${req.body.businessname}" ) `, (err,results,fields)=>{
        if (err) console.log(err);
    });
});

router.post('/businessmanSignup', (req,res)=>{
    db.query(`INSERT INTO \`tblBusinessman\` (\`strBusinessmanFname\`, \`strBusinessmanMname\`, \`strBusinessmanLname\`, \`strBusinessmanTelephone\`, \`strBusinessmanCellphone\`, \`strBusinessmanEmail\`, \`strBusinessmanPassword\`, \`strDTINumber\`, \`strBIRNumber\`, \`strLocation\`, \`strBankName\`, \`strBankAccountNo\`) VALUES ("${req.body.fname}", "${req.body.mname}", "${req.body.fname}", "${req.body.telno}", "${req.body.cpno}", "${req.body.email}", "${req.body.password}", "${req.body.DTINo}", "${req.body.BIRNo}", "${req.body.location}", "${req.body.bankname}", "${req.body.accountno}")  `, (err,results,fields)=>{
        if (err) console.log(err);
    });
});

router.get('/logout', (req,res) =>{
    req.session.destroy(err => {
        if (err) throw err;
        res.redirect('/login');
    });
});



exports.login = router;
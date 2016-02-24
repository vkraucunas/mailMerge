var express = require('express');
var router = express.Router();
var makeThePreview = require('./utility');

router.get('/', function(req, res, next) {
    var data = {
        recipients : '',
        subject : '',
        body : '',
        preview : ''
    };
  res.render('index', { title: 'Mail Merge', data: data });
});

router.post('/', function(req, res, next) {
    var subject = req.body.subject;
    var emailBody = req.body.emailBody;
    var recipients = req.body.recipients;
    recipients = recipients.split('\r\n');
    recipients = recipients.map(function (string) {
        var array = string.split(',');
        return array;
    });

    var data = {
        recipients : req.body.recipients,
        subject : req.body.subject,
        body : req.body.emailBody,
        preview : makeThePreview(subject, emailBody, recipients)
    };

    console.log(makeThePreview(subject, emailBody, recipients));
    res.render('index', { title: 'Mail Merge', data: data });
});

module.exports = router;

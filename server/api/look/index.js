'use strict';

var controller = require('./look.controller');
var express = require('express');
var router = express.Router();
var auth = require('../../auth/auth.service');

router.post('/scrapeUpload', auth.isAuthenticated(), controller.scrapeUpload);
router.post('/upload', auth.isAuthenticated(), controller.upload);

router.put('/upvote/:id', auth.isAuthenticated(), controller.addUpvote);
router.put('/view/:id', controller.addView);

router.put('/:id', auth.isAuthenticated(), controller.update);

router.get('/getAllLooks', controller.allLooks);
router.get('/getSeoulLooks', controller.seoulLooks);
router.get('/getDaeguLooks', controller.daeguLooks);
router.get('/getBusanLooks', controller.busanLooks);
router.get('/getGwangjuLooks', controller.gwangjuLooks);
router.get('/getJejuLooks', controller.jejuLooks);
router.get('/getDaejeonLooks', controller.daejeonLooks);

router.get('/getPerformanceLooks', controller.performanceLooks);
router.get('/getSportsLooks', controller.sportsLooks);
router.get('/getTripLooks', controller.tripLooks);
router.get('/getMedicalLooks', controller.medicalLooks);


router.get('/getUserLooks', controller.userLooks);

router.get('/:lookId', controller.singleLook);
router.get('/popLooks/:id', controller.popLooks);

router.delete('/:id', controller.delete);

module.exports = router;
const express = require ('express');
const db = require('../db');

const router = express.Router();

//GETS ALL EVENTS 

router.get('/events', async (req, res, next) => {

    try{
        let results = await db.allEvents();
        res.json(results);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

//GET A EVENT WITH A SPECIFIC NAME

router.get('/events/:name', async (req, res, next) => {

    try{
        let results = await db.nameEvents(req.params.name);
        res.json(results);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

//GETS A EVENT DESCRIPTION FROM A SPECIFIC NAME

router.get('/events/description/:name', async (req, res, next) => {

    try{
        let results = await db.descNameEvents(req.params.name);
        res.json(results);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

//GET ALL BARS

router.get('/bars', async (req, res, next) => {

    try{
        let results = await db.allBars();
        res.json(results);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

//GET A BAR WITH A SPECIFIC NAME

router.get('/bars/:name', async (req, res, next) => {

    try{
        let results = await db.nameBars(req.params.name);
        res.json(results);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

//GET A BAR WITH A SPECIFIC ID

router.get('/barsID/:id', async (req, res, next) => {

    try{
        let results = await db.idBars(req.params.id);
        res.json(results);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

//GET ALL CLUBS

router.get('/clubs', async (req, res, next) => {

    try{
        let results = await db.allClubs();
        res.json(results);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

//GET A CLUB WITH A SPECIFIC NAME

router.get('/clubs/:name', async (req, res, next) => {

    try{
        let results = await db.nameClubs(req.params.name);
        res.json(results);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

module.exports = router;
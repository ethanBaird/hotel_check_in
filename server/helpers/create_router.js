const express = require('express');
const { ObjectId } = require('mongodb');

const createRouter = function (collection) {

    const router = express.Router();

    //Index
    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then( (docs) => res.json(docs) )
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    //Show

    //Create

    // Delete

    // update

    return router;
};

module.exports = createRouter;
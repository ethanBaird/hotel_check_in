
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

    //Create
    router.post('/', (req, res) => {
        const newBooking = req.body;
        if (newBooking.name && newBooking.email) {
            collection
            .insertOne(newBooking)
            .then( (result) => {
                console.log(result)
                res.json(result.ops[0])
             })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
        })
        } else {
            res.send('Error: missing name or email')
        }
    });
    
    // Delete
    router.delete('/:id', (req, res)=> {
        const id = req.params.id;
        collection
        .deleteOne({ _id: ObjectId(id)})
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
    });
    })

    // update
    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedBooking = {
            name: req.body.name,
            email: req.body.email,
            date: req.body.date,
            checkedIn: req.body.checkedIn
        }
        collection
            .updateOne(
                { _id: ObjectId(id) },
                { $set: updatedBooking }
            )
            .then( result => res.json(result))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });

            })
        });

    return router;
};

module.exports = createRouter;
const express = require("express");
const db = require("../data/connect");
const router = express.Router();

router.get("/cars", async (req, res, next) => {
    try {
        const cars = await db
            .select("*")
            .from("cars")
        res.json(cars);
    } catch (err) {
        next(err);
    }
})

router.get("/cars/:id", async (req, res, next) => {
    try {
        const [car] = await db
            .select("*")
            .from("cars")
            .where("id", req.params.id)
        res.json(car);
    } catch (err) {
        next(err);
    }
})

router.post("/cars", async (req, res, next) => {
    try {
        const payload = {
            VIN: req.body.VIN,
            make: req.body.make,
            model: req.body.model,
            milage: req.body.milage,
            transmission: req.body.transmission,
            title: req.body.title
        }
        const [id] = await db.insert(payload).into("cars");
        const [car] = await db
            .first()
            .from("cars")
            .where("id", id);
        res.status(201).json(car);
    } catch (err) {
        next(err);
    }
});

router.put("/cars/:id", async (req, res, next) => {
    try {
        const payload = {
            VIN: req.body.VIN,
            make: req.body.make,
            model: req.body.model,
            milage: req.body.milage,
            transmission: req.body.transmission,
            title: req.body.title
        }
        await db("cars")
            .update(payload).where("id", req.params.id);
        const car = await db("cars")
            .where("id", req.params.id)
            .first();
        res.json(car);
    } catch (err) {
        next(err);
    }
});

router.delete("/cars/:id", async (req, res, next) => {
    try {
        await db("cars")
            .del()
            .where("id", req.params.id)
        req.status(204).end();
    } catch (err) {
        next(err);
    }
})


module.exports = router;
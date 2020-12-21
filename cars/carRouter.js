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

module.exports = router;
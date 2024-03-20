const router = require("express").Router();
const Apod = require("../models/apodModel");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
    try {
        const { title } = req.body;
        const newApod = new Apod({
            title,
        });

        const savedApod = await newApod.save();
        res.json(savedApod);

    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/", auth, async (req, res) => {
    try {
        const apods = await Apod.find();
        res.json(apods);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;

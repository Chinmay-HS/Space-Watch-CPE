const router = require("express").Router();
const Apod = require("../models/apodModel");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
    try {
        const { title, date, url, copyright } = req.body;
        console.log("User Email:", req.user.email);
        const newApod = new Apod({
            title,
            date, 
            url, 
            copyright,
            userId: req.user
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
        const userId = req.user;
        const apods = await Apod.find({ userId });
        res.json(apods);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;

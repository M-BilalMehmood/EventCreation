const Event = require("../model/event");
const User = require("../model/user");

const eventCreation = async (req, res) => {
    try {
        const { title, description, date, location, category } = req.body;
        const event = await Event.create({
        title,
        category,
        date,
        location,
        description,
        reminder : false,
        // user: req.user._id
        });
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const viewEvents = async (req, res) => {
    try {
        const event = await Event.find();
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const viewEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remindUser = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        const user = await User.findById(event.user);
        res.status(200).json({ message: "Reminder sent" });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { eventCreation, viewEvents, viewEvent, remindUser };
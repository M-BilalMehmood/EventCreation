const User = require("../model/user");
const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.create({ username, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User
            .findOne({ username })
            .select("username password");
        if (!user) {
            throw new Error("Invalid username");
        }

        if (!password) {
            throw new Error("Invalid password");
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { register, login };
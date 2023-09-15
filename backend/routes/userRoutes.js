import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.post(
    "/signup",
    expressAsyncHandler(async (req, res) => {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        const user = await newUser.save();
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    })
);

userRouter.post(
    "/signin",
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (req.body.password === user.password) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                });
                return;
            }
        }
        res.status(401).send({ message: "Invalid email or password" });
    })
);

export default userRouter;

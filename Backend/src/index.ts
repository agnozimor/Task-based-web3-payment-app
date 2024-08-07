import express from "express";
const app = express;

app.use("/v1/user",userRouter);
app.use("/v1/worker",workerRouter);
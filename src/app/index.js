const Koa = require("koa");
const bodyParse = require("koa-bodyparser");
const userRouter = require("../router/user.router");
const { errorHandler } = require("./error-handle");
const app = new Koa();

app.use(bodyParse());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.on("error", errorHandler);

module.exports = app;

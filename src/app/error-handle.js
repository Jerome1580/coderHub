const errorType = require("../constants/error-types");

const errorHandler = (err, ctx) => {
  let status, message;

  switch (err.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400; // Bad request
      message = "用户名或者密码不能为空";
      break;

    case errorType.USER_ALREADY_EXIST:
      status = 409; // Conflict
      message = "用户名已存在";
      break;
    default:
      status = 404;
      message = "NOT FOUND";
  }

  ctx.status = status;
  ctx.body = message;
};

module.exports = {
  errorHandler,
};

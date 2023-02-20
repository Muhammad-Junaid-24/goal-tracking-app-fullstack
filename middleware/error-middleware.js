const {
  API_STATUS_CODES,
  RESPONSE_MESSAGES,
} = require("../constants/constants");

const errorGenerator = (req, res, next) => {
  const error = new Error("Route Not Found");
  error.statusCode = API_STATUS_CODES.NOT_FOUND;
  next(error);
};

const errorHandler = (error, req, res, next) => {
  res
    .status(error.statusCode || API_STATUS_CODES.INTERNAL_SERVER_ERROR)
    .json({
      message: error.message || RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
      stack: process.env.APP_ENV === "development" ? error.stack : null,
    });
};

module.exports = { errorGenerator, errorHandler };

const DEFAULT_ERRORS = {
    SERVER_ERROR: {
      code: "SERVER_ERROR",
      message: "Internal server error",
    },
    NOT_FOUND: {
      code: "NOT_FOUND",
      message: "Not found",
    },
    BAD_REQUEST: {
      code: "BAD_REQUEST",
      message: "Bad request",
    }
  };
  
  /**
   * @class BaseError
   * @param {number} statusCode - HTTP status code
   * @param {boolean} isOperational - Is this error operational
   * @param {string} message - Error message
   * @param {string} type - Error type
   */
  class BaseError extends Error {
    constructor(message, statusCode, type, isOperational) {
      super(message);
      this.type = type;
      this.statusCode = statusCode;
      this.isOperational = isOperational;
    }
  }
  
  /**
   * @class ApiError
   */
  class ApiError extends BaseError {
    constructor(message, statusCode, type) {
      super(message, statusCode, type, true);
    }
  }
  /**
   * Check if error is an api specific error
   * @param {Error} err - Error object
   * @returns {boolean} - Is this error an ApiError
   */
  const IsApiError = (err) =>
    err instanceof ApiError ? err.isOperational : false;
  
  class NotFoundError extends ApiError {
    constructor(
      message = DEFAULT_ERRORS.NOT_FOUND.message,
      type = DEFAULT_ERRORS.NOT_FOUND.code
    ) {
      super(message, 404, type);
    }
  }
  
  class BadRequest extends ApiError {
    constructor(
      message = DEFAULT_ERRORS.BAD_REQUEST.message,
      type = DEFAULT_ERRORS.BAD_REQUEST.code
    ) {
      super(message, 400, type);
    }
  }

  
  class InternalServer extends ApiError {
    constructor(
      message = DEFAULT_ERRORS.SERVER_ERROR.message,
      type = DEFAULT_ERRORS.SERVER_ERROR.code
    ) {
      super(message, 500, type);
    }
  }
  
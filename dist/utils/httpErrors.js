"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP404Error = exports.HTTP403Error = exports.HTTP401Error = exports.HTTP400Error = exports.HTTPClientError = void 0;
class HTTPClientError extends Error {
    statusCode;
    name;
    constructor(message) {
        if (message instanceof Object) {
            super(JSON.stringify(message));
        }
        else {
            super(message);
        }
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.HTTPClientError = HTTPClientError;
class HTTP400Error extends HTTPClientError {
    statusCode = 400;
    constructor(message = "Bad Request") {
        super(message);
    }
}
exports.HTTP400Error = HTTP400Error;
class HTTP401Error extends HTTPClientError {
    statusCode = 401;
    constructor(message = "Unauthorized") {
        super(message);
    }
}
exports.HTTP401Error = HTTP401Error;
class HTTP403Error extends HTTPClientError {
    statusCode = 403;
    constructor(message = "Forbidden") {
        super(message);
    }
}
exports.HTTP403Error = HTTP403Error;
class HTTP404Error extends HTTPClientError {
    statusCode = 404;
    constructor(message = "Not found") {
        super(message);
    }
}
exports.HTTP404Error = HTTP404Error;
//# sourceMappingURL=httpErrors.js.map
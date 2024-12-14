class CustomError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
export { CustomError };
//# sourceMappingURL=custom.error.js.map
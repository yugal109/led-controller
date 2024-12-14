class CustomConstants {
}
CustomConstants.serverErrorMessage = "Something Went Wrong! Please try after a while.";
CustomConstants.unauthorizedErrorMessage = "You cannot perform this action.";
CustomConstants.emailSendingFailure = "Sorry the email couldn't be sent.";
CustomConstants.notFoundErrorString = (model, property) => {
    return `${model} with this ${property} doesn't exist`;
};
CustomConstants.notValidMongoIdMessage = "Invalid Id";
CustomConstants.joiError = 401;
CustomConstants.alreadyExistsError = 409;
CustomConstants.notFoundError = 400;
CustomConstants.serverError = 500;
CustomConstants.unauthorizedError = 403;
export { CustomConstants };
//# sourceMappingURL=custom.constants.js.map
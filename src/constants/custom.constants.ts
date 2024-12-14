class CustomConstants {
  static serverErrorMessage: string =
    "Something Went Wrong! Please try after a while.";
  static unauthorizedErrorMessage: string = "You cannot perform this action.";
  static emailSendingFailure: string = "Sorry the email couldn't be sent.";
  static notFoundErrorString = (model: string, property: string): string => {
    return `${model} with this ${property} doesn't exist`;
  };
  static notValidMongoIdMessage: string = "Invalid Id";
  static joiError: number = 401;
  static alreadyExistsError: number = 409;
  static notFoundError: number = 400;
  static serverError: number = 500;
  static unauthorizedError: number = 403;
}

export { CustomConstants };

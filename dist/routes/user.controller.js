import { CustomConstants } from "../constants/custom.constants.js";
import { CustomError } from "../error/custom.error.js";
export const userController = (req, res, next) => {
    try {
        console.log(req);
        console.log(res);
        console.log(next);
        if (!0) {
            throw new CustomError(CustomConstants.notFoundError, CustomConstants.notFoundErrorString("User", "id"));
        }
        return res.send("yugal");
        //
    }
    catch (e) {
        return next(new CustomError(CustomConstants.serverError, CustomConstants.serverErrorMessage));
    }
};
//# sourceMappingURL=user.controller.js.map
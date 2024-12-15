import { CustomConstants } from "../../constants/custom.constants.js";
import { CustomError } from "../../error/custom.error.js";
import LogModel from "../../models/log.model.js";
import { io } from "../../index.js";
export const getLogController = async (req, res, next) => {
    try {
        const logs = await LogModel.find({});
        res.send(logs);
    }
    catch (e) {
        console.log(e);
        next(new CustomError(CustomConstants.serverError, CustomConstants.serverErrorMessage));
    }
};
export const createLogController = async (req, res, next) => {
    try {
        const { colorCode, user, effect, brightness } = req.body;
        if (!user) {
            next(new CustomError(CustomConstants.joiError, "User id is missing."));
        }
        const log = await LogModel.create({
            colorCode,
            user,
            effect,
            brightness,
        });
        const oneLog = await LogModel.findById(log._id).populate("user");
        if (oneLog) {
            io.of("/logs").to("room1").emit("log_notify", oneLog);
        }
        res.send(log);
    }
    catch (e) {
        console.log(e);
        next(new CustomError(CustomConstants.serverError, CustomConstants.serverErrorMessage));
    }
};
//# sourceMappingURL=log.controller.js.map
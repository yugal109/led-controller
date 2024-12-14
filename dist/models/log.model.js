import { Schema, model } from "mongoose";
const LogSchema = new Schema({
    colorCode: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });
const LogModel = model("Log", LogSchema);
export default LogModel;
//# sourceMappingURL=log.model.js.map
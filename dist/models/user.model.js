import { Schema, model } from "mongoose";
// Define the UserSchema
const UserSchema = new Schema({
    userName: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    index: {
        type: Number,
        unique: true,
        min: 0,
        max: 14,
    },
}, {
    timestamps: true,
});
UserSchema.pre("save", async function (next) {
    const user = this;
    if (user.index === undefined || user.index === null) {
        try {
            let isUnique = false;
            while (!isUnique) {
                const randomIndex = Math.floor(Math.random() * 15);
                const existingUser = await UserModel.findOne({ index: randomIndex });
                if (!existingUser) {
                    user.index = randomIndex;
                    isUnique = true;
                }
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
    else {
        next();
    }
});
const UserModel = model("User", UserSchema);
export default UserModel;
//# sourceMappingURL=user.model.js.map
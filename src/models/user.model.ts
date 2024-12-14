import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  userName: string;
  index?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Define the UserSchema
const UserSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    index: {
      type: Number,
      unique: true,
      min: 0,
      max: 14,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  const user = this as IUser;

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
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;

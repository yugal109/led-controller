import { Schema, model, Document } from "mongoose";

interface ILog extends Document {
  colorCode: string;
  user: Schema.Types.ObjectId;
  effect: string;
  brightness: number;
}

const LogSchema = new Schema<ILog>(
  {
    colorCode: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    effect: {
      type: String,
      default: "",
    },
    brightness: {
      type: Number,
      default: 0.0,
    },
  },
  { timestamps: true }
);

const LogModel = model<ILog>("Log", LogSchema);
export default LogModel;
export type { ILog };

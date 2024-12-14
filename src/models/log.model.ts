import { Schema, model, Document } from "mongoose";

interface ILog extends Document {
  colorCode: string;
  user: Schema.Types.ObjectId;
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
  },
  { timestamps: true }
);

const LogModel = model<ILog>("Log", LogSchema);
export default LogModel;
export type { ILog };

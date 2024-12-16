import express, { Router, Request, Response, NextFunction } from "express";
import { CustomConstants } from "../../constants/custom.constants.js";
import { CustomError } from "../../error/custom.error.js";
import UserModel from "../../models/user.model.js";

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (e) {
    console.log(e);
    next(
      new CustomError(
        CustomConstants.serverError,
        CustomConstants.serverErrorMessage
      )
    );
  }
};

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userName } = req.body;
    if (!userName) {
      next(
        new CustomError(CustomConstants.joiError, "Please enter an username.")
      );
    }
    const existingUser = await UserModel.findOne({ userName });
    if (existingUser) {
      next(
        new CustomError(
          CustomConstants.alreadyExistsError,
          "User with this username already exists."
        )
      );
    }

    const users = await UserModel.find({});
    if (users.length >= 20) {
      next(
        new CustomError(
          CustomConstants.alreadyExistsError,
          "The user slots are already filled."
        )
      );
    }

    const user = await UserModel.create({
      userName,
    });
    res.send({ _id: user._id, userName: user.userName, index: user.index });
  } catch (e) {
    console.log(e);
    next(
      new CustomError(
        CustomConstants.serverError,
        CustomConstants.serverErrorMessage
      )
    );
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userName } = req.body;
    if (!userName) {
      next(
        new CustomError(CustomConstants.joiError, "Please enter an username.")
      );
    }
    const existingUser = await UserModel.findOne({ userName });
    if (!existingUser) {
      next(
        new CustomError(
          CustomConstants.notFoundError,
          "User with this username doesn't exists."
        )
      );
    }

    await UserModel.findByIdAndDelete(existingUser._id);

    res.send({ message: "Successfully signed out." });
  } catch (e) {
    console.log(e);
    next(
      new CustomError(
        CustomConstants.serverError,
        CustomConstants.serverErrorMessage
      )
    );
  }
};

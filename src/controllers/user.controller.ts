import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";

import { IQuery, userService } from "../services";
import { IUser } from "../types";

class UserController {
  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser[]>> {
    try {
      const users = await userService.getWithPagination(
        req.query as unknown as IQuery
      );

      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> {
    try {
      const { user } = res.locals;
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  // public async create(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<Response<ICommonResponse<IUser>>> {
  //   try {
  //     const body = req.body;
  //     const user = await User.create(body);
  //
  //     return res.status(201).json({
  //       message: "User created!",
  //       data: user,
  //     });
  //   } catch (e) {
  //     next(e);
  //   }
  // }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> {
    try {
      const { params, body } = req;

      const updatedUser = await userService.update(params.userId, body);

      return res.status(201).json(updatedUser);
    } catch (e) {
      next(e);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<void>> {
    try {
      const { userId } = req.params;

      await userService.delete(userId);

      return res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  }
  public async uploadAvatar(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<void>> {
    try {
      const { userId } = req.params;
      const avatar = req.files.avatar as UploadedFile;
      const user = await userService.uploadAvatar(avatar, userId);

      return res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }
}
export const userController = new UserController();

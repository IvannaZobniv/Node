import { ApiError } from "../errors";
import { User } from "../models";
import { IUser } from "../types";

interface IPaginationResponse<T> {
  page: number;
  perPage: number;
  itemsCount: number;
  itemsFound: number;
  data: T[];
}
export interface IQuery {
  page: number;
  limit: number;
  sartedBy: string;
  [key: string]: string | number;
}
class UserService {
  // public async getAll(): Promise<IUser[]> {
  //   try {
  //     return User.find();
  //   } catch (e) {
  //     throw new ApiError(e.message, e.status);
  //   }
  // }
  public async getWithPagination(
    query: IQuery
  ): Promise<IPaginationResponse<IUser>> {
    try {
      // const user = await User.findById("6410b80c4f523aec1b9363de");
      // console.log(user.nameWithSurname);
      // const user = await User.find({ email: "Kostia" }).lean();
      const queryStr = JSON.stringify(query);
      const queryObj = JSON.parse(
        queryStr.replace(/\b(gte|lte|gt|lt)\b/, (match) => `$${match}`)
      );
      const {
        page = 1,
        limit = 5,
        sortedBy = "createdAt",
        ...searchObject
      } = queryObj;
      const skip = limit * (page - 1);
      const users = await User.find(searchObject)
        .limit(limit)
        .skip(skip)
        .sort(sortedBy)
        .lean();
      const usersTotalCount = await User.count();
      return {
        page: +page,
        perPage: +limit,
        itemsCount: usersTotalCount,
        itemsFound: users.length,
        data: users,
      };
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async getById(id: string): Promise<IUser> {
    try {
      return User.findById(id).lean();
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async update(userId: string, data: Partial<IUser>): Promise<void> {
    try {
      return await User.findByIdAndUpdate(userId, data, { new: true });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async delete(userId: string): Promise<void> {
    try {
      await User.deleteOne({ _id: userId });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}
export const userService = new UserService();

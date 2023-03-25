"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const errors_1 = require("../errors");
const models_1 = require("../models");
class UserService {
    async getAll() {
        try {
            return models_1.User.find();
        }
        catch (e) {
            throw new errors_1.ApiError(e.message, e.status);
        }
    }
    async getWithPagination(query) {
        try {
            const queryStr = JSON.stringify(query);
            const queryObj = JSON.parse(queryStr.replace(/\b(gte|lte|gt|lt)\b/, (match) => `$${match}`));
            const { page = 1, limit = 5, sortedBy = "createdAt", ...searchObject } = queryObj;
            const skip = limit * (page - 1);
            const users = await models_1.User.find(searchObject)
                .limit(limit)
                .skip(skip)
                .sort(sortedBy)
                .lean();
            const usersTotalCount = await models_1.User.count();
            return {
                page: +page,
                perPage: +limit,
                itemsCount: usersTotalCount,
                itemsFound: users.length,
                data: users,
            };
        }
        catch (e) {
            throw new errors_1.ApiError(e.message, e.status);
        }
    }
    async getById(id) {
        try {
            return models_1.User.findById(id);
        }
        catch (e) {
            throw new errors_1.ApiError(e.message, e.status);
        }
    }
}
exports.userService = new UserService();

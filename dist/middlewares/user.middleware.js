"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const mongoose_1 = require("mongoose");
const api_error_1 = require("../errors/api.error");
const User_model_1 = require("../models/User.model");
const user_validator_1 = require("../validators/user.validator");
class UserMiddleware {
    async getByIdOrThrow(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await User_model_1.User.findById(userId);
            if (!user) {
                throw new api_error_1.ApiError("User not found", 422);
            }
            res.locals.user = user;
            next();
        }
        catch (e) {
            next(e);
        }
    }
    getDynamicallyAndThrow(fieldName, from = "body", dbField = fieldName) {
        return async (req, res, next) => {
            try {
                const fieldValue = req[from][fieldName];
                const user = await User_model_1.User.findOne({ [dbField]: fieldValue });
                if (user) {
                    throw new api_error_1.ApiError(`User with ${fieldName} ${fieldValue} already exist`, 409);
                }
                next();
            }
            catch (e) {
                next(e);
            }
        };
    }
    async isIdValid(req, res, next) {
        try {
            if (!(0, mongoose_1.isObjectIdOrHexString)(req.params.userId)) {
                throw new api_error_1.ApiError("ID not valid", 400);
            }
            next();
        }
        catch (e) {
            next(e);
        }
    }
    async isIdValidCreate(req, res, next) {
        try {
            const { error, value } = user_validator_1.UserValidator.createUser.validate(req.body);
            if (error) {
                throw next(new api_error_1.ApiError(error.message, 400));
            }
            req.body = value;
            next();
        }
        catch (e) {
            next(e);
        }
    }
    async isIdValidUpdate(req, res, next) {
        try {
            const { error, value } = user_validator_1.UserValidator.updateUser.validate(req.body);
            if (error) {
                throw next(new api_error_1.ApiError(error.message, 400));
            }
            req.body = value;
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.userMiddleware = new UserMiddleware();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PostSchema_1 = __importDefault(require("./PostSchema"));
// interface IUserModel extends mongoose.Document {}
exports.Post = mongoose_1.model('Post', new PostSchema_1.default());

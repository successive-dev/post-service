"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var VersionableSchema_1 = __importDefault(require("../versionable/VersionableSchema"));
var PostSchema = /** @class */ (function (_super) {
    __extends(PostSchema, _super);
    function PostSchema() {
        var _this = this;
        var baseSchema = {
            _id: { type: String, required: true },
            createdBy: {
                required: false,
                type: String,
            },
            isLiked: { type: Boolean, required: true, default: false },
            likes: { type: [String], required: false },
            text: { type: String, required: true },
        };
        _this = _super.call(this, baseSchema) || this;
        return _this;
    }
    return PostSchema;
}(VersionableSchema_1.default));
exports.default = PostSchema;

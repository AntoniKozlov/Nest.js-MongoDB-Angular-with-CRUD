"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TOHSchema = new mongoose.Schema({
    name: String,
    level: Number,
    age: Number,
    cls: String,
    power: Number,
}, { versionKey: false });
//# sourceMappingURL=hero.entity.js.map
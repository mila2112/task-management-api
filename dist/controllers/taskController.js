"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTaskById = exports.getTasks = exports.createTask = void 0;
const taskService = __importStar(require("../services/taskService"));
const taskValidation_1 = require("../validation/taskValidation");
const createTask = async (req, res, next) => {
    try {
        (0, taskValidation_1.validateTask)(req.body);
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);
    }
    catch (err) {
        next(err);
    }
};
exports.createTask = createTask;
const getTasks = async (_, res, next) => {
    try {
        const tasks = await taskService.getTasks();
        res.json(tasks);
    }
    catch (err) {
        next(err);
    }
};
exports.getTasks = getTasks;
const getTaskById = async (req, res, next) => {
    try {
        const task = await taskService.getTaskById(req.params.id);
        if (!task)
            return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    }
    catch (err) {
        next(err);
    }
};
exports.getTaskById = getTaskById;
const updateTask = async (req, res, next) => {
    try {
        (0, taskValidation_1.validatePartialTask)(req.body);
        const updated = await taskService.updateTask(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ message: 'Task not found' });
        res.json(updated);
    }
    catch (err) {
        next(err);
    }
};
exports.updateTask = updateTask;
const deleteTask = async (req, res, next) => {
    try {
        const deleted = await taskService.deleteTask(req.params.id);
        if (!deleted)
            return res.status(404).json({ message: 'Task not found' });
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
};
exports.deleteTask = deleteTask;

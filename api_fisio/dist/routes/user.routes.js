"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
// Rotas de Usuários
router.get("/", userController_1.getUsers); // GET /api/users
router.get("/:id", userController_1.getUsersById); // GET /api/users/:id
router.post("/", userController_1.createUser); // POST /api/users
router.put("/:id", userController_1.updateUser); // PUT /api/users/:id
exports.default = router;

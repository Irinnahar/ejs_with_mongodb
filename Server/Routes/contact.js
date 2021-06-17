"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_1 = require("../Controllers/contact");
const router = express_1.default.Router();
exports.default = router;
const index_1 = require("../Util/index");
router.get('/', contact_1.DisplayContactListPage);
router.get('/edit/:id', index_1.AuthGuard, contact_1.DisplayContactEditPage);
router.get('/delete/:id', index_1.AuthGuard, contact_1.ProcessDeletePage);
router.post('/edit/:id', index_1.AuthGuard, contact_1.ProcessEditPage);
//# sourceMappingURL=contact.js.map
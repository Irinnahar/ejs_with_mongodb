"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactEditPage = exports.DisplayContactListPage = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
function DisplayContactListPage(req, res, next) {
    contact_1.default.find(function (error, contactCollection) {
        if (error) {
            return console.error.bind(error);
        }
        else {
            res.render('index', { title: 'Contact List', page: 'contact-list', contact: contactCollection });
            console.log(contactCollection);
        }
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayContactEditPage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    contact_1.default.findById(id, {}, {}, (error, contactToEdit) => {
        if (error) {
            console.error(error);
            res.end(error);
        }
        else {
            res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit });
        }
    });
}
exports.DisplayContactEditPage = DisplayContactEditPage;
//# sourceMappingURL=contact.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayEditPage = exports.DisplaycontactListPage = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
function DisplaycontactListPage(req, res, next) {
    console.log(contact_1.default);
    contact_1.default.find(function (err, contactCollection) {
        if (err) {
            return console.error(err);
        }
        console.log(contactCollection);
        res.render('index', { title: 'contact List', page: 'contact-list', contact: contactCollection });
    });
}
exports.DisplaycontactListPage = DisplaycontactListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    contact_1.default.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', item: contactItemToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
//# sourceMappingURL=contact.js.map
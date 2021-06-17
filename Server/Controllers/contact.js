"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.DisplayContactEditPage = exports.DisplayContactListPage = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
const Util_1 = require("../Util");
function DisplayContactListPage(req, res, next) {
    contact_1.default.find(function (error, contactCollection) {
        if (error) {
            return console.error.bind(error);
        }
        else {
            res.render('index', { title: 'Contact List', page: 'contact-list', contact: contactCollection, displayName: Util_1.UserDisplayName(req) });
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
            res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: Util_1.UserDisplayName(req) });
        }
    });
}
exports.DisplayContactEditPage = DisplayContactEditPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updateContact = new contact_1.default({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.body.phone,
        "message": req.body.message
    });
    contact_1.default.updateOne({ _id: id }, updateContact, {}, (error) => {
        if (error) {
            console.error(error);
            res.end(error);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, (error) => {
        if (error) {
            console.error(error);
            res.end(error);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact.js.map
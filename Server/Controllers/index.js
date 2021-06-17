"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.DisplayRegisterPage = exports.ProcessLoginPage = exports.DisplayLoginPage = exports.DisplayContactsPage = exports.DisplayServicesPage = exports.DisplayProjectPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../Models/user"));
const Util_1 = require("../Util");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectPage(req, res, next) {
    res.render('index', {
        title: 'Projects',
        page: "projects",
        projectList: [
            { image: "Assets/images/company-img2.png", description: "A social networking platform for businesses like B2B and B2C.We have used HTML5, CSS, SASS, Angular material, AngularJS, typescript, and Node js for this project", link: "https://www.seebiz.com/" },
            { image: "Assets/images/company-img1.png", description: "This is a company's website.We use the latest technogoly here like angular, html, css. This is a responsive website. I have work on both frondened and backend in this project.", link: "https://www.graaho.com/" },
            { image: "Assets/images/company-img3.png", description: "This is tourism based website.This Website made with HTML, CSS, Javascript, Wordpress, PHP. This one is a responsive website. I worked as a frontend developer in this project.", link: "https://adventurewild.com.au/" }
        ]
    });
}
exports.DisplayProjectPage = DisplayProjectPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', {
        title: 'Services',
        page: 'services',
        services: [
            { image: "Assets/images/service_img1.png", name: "Web Design & Development" },
            { image: "Assets/images/service_img2.png", name: "Mobile Application Development" },
            { image: "Assets/images/service_img3.png", name: "Database Administration" }
        ]
    });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactsPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact' });
}
exports.DisplayContactsPage = DisplayContactsPage;
function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: Util_1.UserDisplayName(req) });
    }
    return res.redirect('/contact-list');
}
exports.DisplayLoginPage = DisplayLoginPage;
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function DisplayRegisterPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: Util_1.UserDisplayName(req) });
    }
    return res.redirect('/contact-list');
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegisterPage(req, res, next) {
    let newUser = new user_1.default({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error('Error: Inserting New User');
            if (err.name == "UserExistsError") {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');
            return res.redirect('/register');
        }
        return passport_1.default.authenticate('local')(req, res, () => {
            return res.redirect('/contact-list');
        });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
    req.logout();
    res.redirect('/login');
}
exports.ProcessLogoutPage = ProcessLogoutPage;
//# sourceMappingURL=index.js.map
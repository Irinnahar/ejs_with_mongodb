"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactsPage = exports.DisplayServicesPage = exports.DisplayProjectPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
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
//# sourceMappingURL=index.js.map
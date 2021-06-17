import express from 'express';
const router = express.Router();
export default router;
import { DisplayAboutPage, DisplayContactsPage, DisplayHomePage, DisplayLoginPage, DisplayProjectPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactsPage);
//module.exports = router;
/* GET - display login page - with /login . */
router.get('/login', DisplayLoginPage);

/* POST - process login page when user clicks Login Button */
router.post('/login', ProcessLoginPage);

/* GET - display register page - with /register . */
router.get('/register', DisplayRegisterPage);

/* POST - process register page when user clicks Register Button */
router.post('/register', ProcessRegisterPage);

/* GET - process the logout page - with /logout . */
router.get('/logout', ProcessLogoutPage);

import express from 'express';
const router = express.Router();
export default router;
import * as controls from '../Controllers/index';

/* GET home page. */
router.get('/', controls.DisplayHomePage);

/* GET home page. */
router.get('/home', controls.DisplayHomePage);

/* GET about page. */
router.get('/about', controls.DisplayAboutPage);

/* GET projects page. */
router.get('/projects', controls.DisplayProjectPage);

/* GET services page. */
router.get('/services', controls.DisplayServicesPage);

/* GET contact page. */
router.get('/contact', controls.DisplayContactsPage);
//module.exports = router;

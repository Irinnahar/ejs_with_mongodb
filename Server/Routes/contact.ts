import express from 'express';
const router = express.Router();
export default router;

// create an contact controller instance
import { DisplaycontactListPage, DisplayEditPage } from '../Controllers/contact';

/* GET contact-list page - with /contact-list */
router.get('/', DisplaycontactListPage);

/* display edit/:id page - with /contact-list/edit:id */
router.get('/edit/:id', DisplayEditPage);
import express from 'express';
const router = express.Router();
export default router;

// create an contact controller instance
import * as controller from '../Controllers/contact';

/* GET contact-list page - with /contact-list */
router.get('/', controller.DisplayContactListPage);

/* display edit/:id page - with /contact-list/edit:id */
router.get('/edit/:id', controller.DisplayContactEditPage);

//Delete the contact
router.get('/delete/:id', controller.ProcessDeletePage);

// edit the form in database
router.post('/edit/:id', controller.ProcessEditPage)
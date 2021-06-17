/*
File name : contact.ts
Student’s Name : Irin Nahar
StudentID: 301173198
Date: 16/06/2021
course : COMP 229
lab: Assignment 2 
*/

import express from 'express';
import { DisplayContactListPage, DisplayContactEditPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contact';
const router = express.Router();
export default router;

// create an contact controller instance
import { AuthGuard } from '../Util/index';

/* GET contact-list page - with /contact-list */
router.get('/', DisplayContactListPage);

/* display edit/:id page - with /contact-list/edit:id */
router.get('/edit/:id', AuthGuard, DisplayContactEditPage);

//Delete the contact
router.get('/delete/:id', AuthGuard,  ProcessDeletePage);

// edit the form in database
router.post('/edit/:id', AuthGuard, ProcessEditPage)
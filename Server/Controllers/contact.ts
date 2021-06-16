import express, {Response, Request, NextFunction} from 'express';
import Contacts from '../Models/contact';

// contact list page display
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction) {
   Contacts.find(function(error , contactCollection){
       if(error) {
           return console.error.bind(error);
       } else {
            res.render('index', { title: 'Contact List' , page: 'contact-list', contact : contactCollection });
            console.log(contactCollection);
    }
   }) 
}

//contact edit page display
export function DisplayContactEditPage(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;
    console.log(id);

    Contacts.findById(id, {}, {}, (error, contactToEdit) => {
        if(error) {
            console.error(error);
            res.end(error);
        } else {
            res.render('index', { title: 'Edit' , page: 'edit', contact : contactToEdit});
        }
    })
}

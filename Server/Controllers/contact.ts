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

// proccess edit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Clothing Item
    let updateContact = new Contacts
    ({
      "_id": id,
      "name": req.body.name,
      "email": req.body.email,
      "phone": req.body.phone,
      "message": req.body.message
    });
  
    // find the contact item via db.contacts.update({"_id":id}) and then update
    Contacts.updateOne({_id: id}, updateContact, {}, (error) =>{
      if(error)
      {
        console.error(error);
        res.end(error);
      }
  
      res.redirect('/contact-list');
    });
}

// Process Delete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.clothing.remove({"_id: id"})
  Contacts.remove({_id: id}, (error) => {
    if(error)
    {
      console.error(error);
      res.end(error);
    }

    res.redirect('/contact-list');
  });
}

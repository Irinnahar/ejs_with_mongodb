import express, { Request, Response, NextFunction } from 'express';

import contact from "../Models/contact";

export function DisplaycontactListPage(req: Request, res: Response, next: NextFunction): void
{
    console.log(contact)
    contact.find(function(err, contactCollection){
        if(err)
        {
            return console.error(err);
        }

        // render the contact-list content partial page
        console.log(contactCollection);
        res.render('index', {title: 'contact List', page: 'contact-list', contact: contactCollection})
    });
}

export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    console.log(id);

    // pass the id to the db

    //db.contact.find({"_id": id})
    contact.findById(id, {}, {}, (err, contactItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit view
        res.render('index', {title: 'Edit', page: 'edit', item: contactItemToEdit});
    });
}
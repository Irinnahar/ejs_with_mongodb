/*
File name : index.ts
Student’s Name : Irin Nahar
StudentID: 301173198
Date: 16/06/2021
course : COMP 229
lab: Assignment 2 
*/

import express, {Request, Response, NextFunction} from 'express';
import passport from 'passport';

// create an instance of the User model
import User from '../Models/user';

// import Util functions
import { UserDisplayName } from '../Util';

export function DisplayHomePage(req: Request, res : Response, next: NextFunction) {
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayAboutPage (req: Request, res: Response, next: NextFunction) {
    res.render('index', { title: 'About' , page: 'about'});
}

export function DisplayProjectPage (req: Request, res: Response, next: NextFunction) {
    res.render('index', { 
        title: 'Projects', 
        page: "projects",
        projectList: [
            { image: "Assets/images/company-img2.png", description: "A social networking platform for businesses like B2B and B2C.We have used HTML5, CSS, SASS, Angular material, AngularJS, typescript, and Node js for this project", link: "https://www.seebiz.com/" },
            { image: "Assets/images/company-img1.png", description: "This is a company's website.We use the latest technogoly here like angular, html, css. This is a responsive website. I have work on both frondened and backend in this project.", link: "https://www.graaho.com/" },
            { image: "Assets/images/company-img3.png", description: "This is tourism based website.This Website made with HTML, CSS, Javascript, Wordpress, PHP. This one is a responsive website. I worked as a frontend developer in this project.", link: "https://adventurewild.com.au/" }
        ]  
        }
    );
}

export function DisplayServicesPage (req: Request, res: Response, next: NextFunction) 
{
    res.render('index', { 
        title: 'Services', 
        page: 'services' ,
        services: [
            { image: "Assets/images/service_img1.png", name: "Web Design & Development" },
            { image: "Assets/images/service_img2.png", name: "Mobile Application Development" },
            { image: "Assets/images/service_img3.png", name: "Database Administration" }
        ]
    });
}

export function DisplayContactsPage (req: Request, res: Response, next: NextFunction) {
    res.render('index', { title: 'Contact', page: 'contact' });}

    export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
    {
        if(!req.user)
        {
            return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req)  });
        }
    
        return res.redirect('/contact-list');
    }
    
    export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
    {
        passport.authenticate('local', (err, user, info) => {
            // are there server errors?
            if(err)
            {
                console.error(err);
                return next(err);
            }
    
            // are there login errors?
            if(!user)
            {
                req.flash('loginMessage', 'Authentication Error');
                return res.redirect('/login');
            }
    
            req.login(user, (err) =>
            // are there db errors?
            {
                if(err)
                {
                    console.error(err);
                    return next(err);
                }
    
                return res.redirect('/contact-list');
    
            });
        })(req, res, next);
    }
    
    export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
    {
        if(!req.user)
        {
            return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req)  });
        }

        return res.redirect('/contact-list');
    }
    
    export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void
    {
        // instantiate a new User Object
        let newUser = new User
        ({
            username: req.body.username,
            emailAddress: req.body.emailAddress,
            displayName: req.body.FirstName + " " + req.body.LastName
        });
    
        User.register(newUser, req.body.password, (err) =>
        {
            if(err)
            {
                console.error('Error: Inserting New User');
                if(err.name == "UserExistsError")
                {
                    console.error('Error: User Already Exists');
                }
                req.flash('registerMessage', 'Registration Error');
    
                return res.redirect('/register');
            }
    
            // after successful registration - login the user
            return passport.authenticate('local')(req, res, () =>{
                return res.redirect('/contact-list');
            });
        });
    }
    
    export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
    {
        req.logout();
    
        res.redirect('/login');
    }
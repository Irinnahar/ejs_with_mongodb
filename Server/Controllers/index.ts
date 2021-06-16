/*
File name : index.ts
Student’s Name : Irin Nahar
StudentID: 301173198
Date: 16/06/2021
course : COMP 229
lab: Assignment 2 
*/

import express, {Request, Response, NextFunction} from 'express';

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


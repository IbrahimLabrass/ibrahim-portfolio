import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'E-commerce web site',
      desc: '',
      livedemo: 'https://ibrahimlabrass.github.io/E-commerce-user/products',
      githurl: 'https://github.com/IbrahimLabrass/E-commerce-user',
      imgUrl: 'assets/images/z1.PNG',
      tech: 'Angular, Git&Github'
    },
    {
      id: 2,
      title: 'website for an associative media company',
      desc: '',
      livedemo: 'https://Nefzawa.net',
      githurl: 'https://github.com/IbrahimLabrass',
      imgUrl: 'assets/images/nefzawaa.PNG',
      tech: 'Angular,ExpressJs,NodeJs,MongooDb, Git&GitLab'
    },

    {
      id: 3,
      title: 'Freelance web site for developers',
      desc: '',
      livedemo: 'https://ibrahimlabrass.github.io/5edemti/home',
      githurl: 'https://github.com/IbrahimLabrass/5edemti',
      imgUrl: 'assets/images/z2.PNG',
      tech: 'Angular, Springboot, Firebase, MySql, Git&Github'
    },

    {
      id: 4,
      title: 'inventory management website',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/IbrahimLabrass',
      imgUrl: 'assets/images/geststock.PNG',
      tech: 'Angular, Springboot, Mysql, Git&GitLab'
    },
    {
      id: 5,
      title: 'form validation',
      desc: '',
      livedemo: 'https://github.com/IbrahimLabrass/form-validation',
      githurl: 'https://github.com/IbrahimLabrass/form-validation',
      imgUrl: 'assets/images/registre.PNG',
      tech: 'Html, CSS, JS'
    },

    {
      id: 6,
      title: 'Calculator',
      desc: '',
      livedemo: 'https://github.com/IbrahimLabrass/my-calculator',
      githurl: 'https://github.com/IbrahimLabrass/my-calculator',
      imgUrl: 'assets/images/Calculator.PNG',
      tech: 'Html, CSS, JS'
    },


    {
      id: 7,
      title: 'Portfolio web site',
      desc: '',
      livedemo: 'https://github.com/IbrahimLabrass/Myportfolio',
      githurl: 'https://github.com/IbrahimLabrass/Myportfolio',
      imgUrl: 'assets/images/portfolio.PNG',
      tech: 'Angular, Git&Github'
    },
   
   



   

  ]
  about2 = `Web developer .
  Expertise in Angular, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Java, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1Sb4krKbcqTfeQUMqPnS-lkBfhVEgmuBb/view?usp=drive_link"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODEJS',
      'progress': '85%'
    },
    {
      'id': '3',
      'skill': 'Git&Github',
      'progress': '85%'
    },
    {
      'id': '4',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '5',
      'skill': 'MONOGO DB, FIREBASE',
      'progress': '75%'
    },
    
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'Spring Boot',
      'progress': '70%'
    }
  ];


  
 

 
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
 
}

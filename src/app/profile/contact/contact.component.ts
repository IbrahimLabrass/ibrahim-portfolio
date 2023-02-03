import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  model = {
    name: '',
    email: '',
    message: '',
    subject:''
  };

  sendEmail() {
    const recipient = 'ibrahimwinns@gmail.com';
    const subject = this.model.subject ;
    const body = ` (${this.model.email})\n\n${this.model.message}`;
    const url = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }
}




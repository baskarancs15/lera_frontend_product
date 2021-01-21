import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder,) { 
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      // 'contactFormSubjects': ['', Validators.required],
      'contactFormTitle': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
      });
  }

  ngOnInit() {
  }

}

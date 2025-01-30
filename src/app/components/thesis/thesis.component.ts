import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.scss'],
  standalone: false
})
export class ThesisComponent implements OnInit {
  thesisForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.thesisForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      supervisor: ['', Validators.required],
      // file: [null, Validators.required]
    });
  }

  ngOnInit(): void {}

  submitThesis() {
    if (this.thesisForm.valid) {
      console.log('Thesis Submitted:', this.thesisForm.value);
      alert('Thesis submitted successfully!');
    } else {
      alert('Please fill all required fields.');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ThesisService } from '../../../services/thesis.service';
import { Thesis } from '../../../models/thesis.model';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  standalone: false
})
export class StudentComponent implements OnInit {
  theses: Thesis[] = [];

  constructor(private thesisService: ThesisService) {}

  ngOnInit() {
    this.theses = this.thesisService.getTheses();
    console.log(this.theses);
  }

  sendThesis(thesis: Thesis) {
    thesis.status = 'open';
    console.log(`Thesis "${thesis.title}" sent!`);
  }

}

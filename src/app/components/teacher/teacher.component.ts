import { Component, OnInit } from '@angular/core';
import { ThesisService } from '../../../services/thesis.service';
import { Thesis } from '../../../models/thesis.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
  standalone: false
})
export class TeacherComponent implements OnInit {
  theses: Thesis[] = [];

  constructor(private thesisService: ThesisService) {}

  ngOnInit() {
    this.theses = this.thesisService.getTheses();
  }

  acceptThesis(thesis: Thesis) {
    thesis.status = 'accepted';
    console.log(`Thesis "${thesis.title}" accepted!`);
  }
}

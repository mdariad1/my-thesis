import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thesis } from '../models/thesis.model';
import all from '../assets/data/theses.json'

@Injectable({
  providedIn: 'root',
})
export class ThesisService {
  private dataUrl = <Thesis[]>all;

  constructor() {}

  getTheses() {
    return this.dataUrl;
  }
}

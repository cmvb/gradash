import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-advance-elements',
  templateUrl: './advance-elements.component.html',
  styleUrls: ['./advance-elements.component.css']
})
export class AdvanceElementsComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}

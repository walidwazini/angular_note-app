import { Component, OnInit } from '@angular/core';

import { dummyNotes } from 'src/data';
import { notesTypes } from 'src/types';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  public theNotes:notesTypes[] = [];

  ngOnInit(): void {
    this.theNotes = dummyNotes
  }

}

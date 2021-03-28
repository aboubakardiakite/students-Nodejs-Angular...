import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css']
})
export class StudentsViewComponent implements OnInit {
  data = [{nom:"hamrani",prenom:"khaled",num:1139373}];

  constructor() { }

  ngOnInit(): void {
    
  }

}

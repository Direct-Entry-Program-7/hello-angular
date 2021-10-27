import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {

  showParagraph = true;
  students: Array<{id: string, name: string}> = [];

  constructor() { }

  ngOnInit(): void {
    this.students.push({id: 'S001', name: 'Manoj'});
    this.students.push({id: 'S003', name: 'Gayal'});
    this.students.push({id: 'S005', name: 'Pethum'});
    this.students.push({id: 'S007', name: 'Dinusha'});
  }

  // toggleVisibility() {
  //   this.showParagraph = !this.showParagraph;
  // }
  reloadStudents() {
    this.students = [];
    this.students.push({id: 'S001', name: 'Manoj'});
    this.students.push({id: 'S002', name: 'Gayal'});
    this.students.push({id: 'S003', name: 'Pethum'});
    this.students.push({id: 'S005', name: 'Dinusha'});
    this.students.push({id: 'S008', name: 'Chandimal'});
  }
}

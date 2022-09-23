import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-filter-data',
  templateUrl: './grid-filter-data.component.html',
  styleUrls: ['./grid-filter-data.component.css'],
})
export class GridFilterDataComponent implements OnInit {
  localData = [
    { Name: 'John', Age: 29 },
    { Name: 'Alice', Age: 27 },
    { Name: 'Jessica', Age: 31 },
  ];
  title = 'InfraGridProject';
  constructor() {}

  ngOnInit(): void {}
}

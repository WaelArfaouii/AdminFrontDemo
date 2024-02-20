import { Component, OnInit } from '@angular/core';
import {Rule} from "./rule.model";

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  currentDate: string = (new Date()).toISOString().substring(0, 10);

  data: Rule[] = [
    { name: 'Rule 1', id : 1 , description: 'Description for Rule 1', disabled: false, creationDate: new Date() },
    { name: 'Rule 2', id : 2 , description: 'Description for Rule 2', disabled: true, creationDate: new Date() },
    { name: 'Rule 3', id : 3 , description: 'Description for Rule 3', disabled: false, creationDate: new Date() },
    { name: 'Rule 1', id : 1 , description: 'Description for Rule 1', disabled: false, creationDate: new Date() },
    { name: 'Rule 2', id : 2 , description: 'Description for Rule 2', disabled: true, creationDate: new Date() },
    { name: 'Rule 1', id : 1 , description: 'Description for Rule 1', disabled: false, creationDate: new Date() },
    { name: 'Rule 2', id : 2 , description: 'Description for Rule 2', disabled: true, creationDate: new Date() },
    { name: 'Rule 1', id : 1 , description: 'Description for Rule 1', disabled: false, creationDate: new Date() },
    { name: 'Rule 2', id : 2 , description: 'Description for Rule 2', disabled: true, creationDate: new Date() },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

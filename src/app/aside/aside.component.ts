import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  items = [
    { id: 1,icon:'grid_view' , name: 'Dashbord' },
    { id: 2,icon:'edit_note' , name: 'Rules' },
    { id: 3,icon:'monitoring' , name: 'Table' },
    { id: 4,icon:'chat' , name: 'Updates' },
    { id: 5,icon:'settings' , name: 'Settings' },
    { id: 6,icon:'add' , name: 'Add Rule' },

  ];

  selectedItemId: number = 1 ;

  selectItem(itemId: number) {
    this.selectedItemId = itemId;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

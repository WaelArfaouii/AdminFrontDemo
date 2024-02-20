import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  updates = [
    {
      profilePhotoSrc: 'https://headshots-inc.com/wp-content/uploads/2021/01/FINAL-Blog-Images.jpg',
      userName: 'Jhon Smith',
      action: 'modified a rule ',
      timestamp: '2 hours ago'
    },
    {
      profilePhotoSrc: 'https://headshots-inc.com/wp-content/uploads/2021/01/FINAL-Blog-Images.jpg',
      userName: 'Jane Smith',
      action: 'modified a rule',
      timestamp: '1 hour ago'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

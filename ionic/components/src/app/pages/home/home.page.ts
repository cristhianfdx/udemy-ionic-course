import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: ComponentModel[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'logo-google-playstore',
      name: 'Alert',
      redirectTo: '/alert',
    },
  ];

  constructor() {}

  ngOnInit() {}
}

interface ComponentModel {
  icon: string;
  name: string;
  redirectTo: string;
}

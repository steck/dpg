import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  template: `
    <p>
      creator works!
    </p>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

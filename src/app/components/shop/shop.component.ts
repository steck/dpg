import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-container',
  template: `
    <app-shop></app-shop>
  `,
})
export class ShopContainerComponent {
  constructor() { }
}

@Component({
  selector: 'app-shop',
  template: `
    <p>
      shop works!
    </p>
  `,
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent  {
  constructor() { }
}

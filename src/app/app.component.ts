import { Component, OnInit } from '@angular/core';

import './web-components/radio-btn-multiple.wc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  radios: Array<object>;

  ngOnInit(): void {
    this.radios = [
      {
        name: 'request',
        value: 'Famille postale',
        selected: false,
        children: [
          {
            name: 'famille',
            value: 'Compte',
            selected: false,
          }
        ]
      },
      {
        name: 'request',
        value: 'Compte',
        selected: true,
        children: [
          {
            name: 'postal',
            value: 'Produit postal',
            selected: true,
          },
          {
            name: 'postal',
            value: 'Famille postale',
            selected: false,
          }
        ]
      }
    ];
  }
}

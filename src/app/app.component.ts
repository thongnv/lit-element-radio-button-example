import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import './web-components/radio-btn-group.wc';
import './web-components/radio-btn-multiple.wc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading: boolean;
  moods: Array<string> = [
    'awesome',
    'formidable',
    'great',
    'terrifying',
    'wonderful',
    'astonishing',
    'breathtaking'
  ];
  radios: Array<object> = [
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
  private mood: string;
  isChanged = false;
  constructor(
    private router: Router,
  ) {
    this.randomMood();
  }

  randomMood() {
    const index = Math.floor(Math.random() * this.moods.length);
    if (this.mood === this.moods[index]) {
      return this.randomMood();
    }
    this.mood = this.moods[index];
  }

  moodChanged(e: CustomEvent) {
    console.log(e.detail.selectedRadio);
  }

  ngOnInit(): void {
    // We can get the language to set for application
    // this.translate.use('currentLang');
    // this.titleService.setTitle(environment.pageTitle);
    // this.loadingScreenServices.Loading().subscribe((data) => {
    //   setTimeout(() => {
    //     this.isLoading = data;
    //   }, 0);
    // });
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '.chocolateShop';
  headers = ["Select","Chocolate Description", "Price (in Euro)"]
  rows = [{
    "Select:" : "[]",
    "Chocolate Description": "White Chocolate",
    "Price (in Euro)": 2.95
  },
    {
      "Select:" : "[]",
      "Chocolate Description": "Milk Chocolate",
      "Price (in Euro)": 2.95
    },
    {
      "Select:" : "[]",
      "Chocolate Description": "Dark Chocolate",
      "Price (in Euro)": 2.95
    },
    {
      "Select:" : "[]",
      "Chocolate Description": "Ruby Chocolate",
      "Price (in Euro)": 2.95
    }

  ]
}

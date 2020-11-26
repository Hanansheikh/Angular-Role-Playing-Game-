import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Our App';
  fakeBoolean: boolean= true;
  arrayOfThings: string[]=[
    "string 1",
    "string 2",
    "string 3"
  ];
  onClick(sentence: string){
    console.log(`You Clicked this: ${sentence}`);
  }

}

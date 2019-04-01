import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Paul\'s website";

  filmList: string[] = ['Tulpan', 'MI6', 'Fidelio', 'Delivrance'];
  
}

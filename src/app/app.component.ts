import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed: boolean = false;
  visible: string = '';



  select(tema: string): void{
  this.visible = tema;
  }
}


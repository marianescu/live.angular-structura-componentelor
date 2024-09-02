import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './components/my-component/my-component.component';
import { MyPopup } from './components/my-popup/my-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponent, MyPopup],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'structura-compnentelor';
  textBtn="Click me!!!"

  schimb(txt:string){
    console.log(txt)
  }
}

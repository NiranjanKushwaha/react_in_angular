import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ReactContainerComponent } from './react-container/react-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'react_in_angular';
  constructor(private router:Router){}

  goToReactApp=()=>{
    this.router.navigate(["/react"])
  }
}

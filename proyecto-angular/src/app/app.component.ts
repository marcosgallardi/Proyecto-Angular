import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userOcupation: string = 'piripitiflautico';
  title: string = 'proyecto-angular';
  mensajeDelHijo:string = ''
  receiveEmission($event: string): void {
    this.mensajeDelHijo = $event;
  }
}

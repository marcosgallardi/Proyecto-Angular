import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username: string = 'pedro porro';
  doesUserExists: boolean = false;
  operatingSystems = [
    { id: 'win', name: 'windows' },
    { id: 'lin', name: 'linux' },
    { id: 'deb', name: 'debian' },
  ];
  isEditable:boolean =true
}

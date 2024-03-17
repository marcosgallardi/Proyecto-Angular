import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OperativeSystem } from '../../../interfaces/operative-system';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() ocupations: string = '';
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();
  username: string = 'pedro porro';
  doesUserExists: boolean = false;
  operatingSystems:OperativeSystem[] = [
    { id: 'win', name: 'windows' },
    { id: 'lin', name: 'linux' },
    { id: 'deb', name: 'debian' },
  ];
  isEditable: boolean = true;

  onMouseOver(osName: string): void {
    console.log(osName);
  }
  emitToParent(): void {
    this.greet.emit('soy tu hijastro');
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [],
  templateUrl: './cread-crumb.component.html',
  styleUrl: './cread-crumb.component.scss'
})
export class CreadCrumbComponent {

  @Input()
  bread!: string;
}

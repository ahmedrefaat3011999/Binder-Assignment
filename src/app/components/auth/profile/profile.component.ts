import { Component } from '@angular/core';
import { CreadCrumbComponent } from "../../layout/cread-crumb/cread-crumb.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [CreadCrumbComponent]
})
export class ProfileComponent {

}

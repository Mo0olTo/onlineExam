import { Component } from '@angular/core';
import { AuthUIComponent } from "../../../shared/ui/auth-ui/auth-ui.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [AuthUIComponent,RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}

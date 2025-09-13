import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , CountdownModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onlineExam';
}

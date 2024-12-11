import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AkCardComponent } from 'shared-components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AkCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-app';
}

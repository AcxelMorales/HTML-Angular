import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public _infoPageService: InfoPageService) { }

}

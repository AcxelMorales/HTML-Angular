import { Component } from '@angular/core';

import { InfoPageService } from 'src/app/services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {

  name: string;

  constructor(
    public _infoPageService: InfoPageService,
    private router: Router
  ) { }

  search(value: string): void {
    if (value.length < 3) return;
    this.router.navigate(['/search', value]);
  }

}

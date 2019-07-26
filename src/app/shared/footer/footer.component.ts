import { Component, OnInit } from '@angular/core';

import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  year: number;

  constructor(
    public _infoPageService: InfoPageService
  ) { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

}

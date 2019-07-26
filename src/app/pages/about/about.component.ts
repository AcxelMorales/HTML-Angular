import { Component, OnInit } from '@angular/core';

import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  crew: any[] = [];

  constructor(
    public _infoPageService: InfoPageService
  ) { }

  ngOnInit(): void {
    this._infoPageService.getData().subscribe((data: any) => this.crew = data);
  }

}

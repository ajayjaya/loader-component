import { Component } from '@angular/core';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  constructor(private loaderService: LoaderService) {
    this.loaderService.showLoader({
      title: 'Title Goes Here',
      desc: 'Desc Goes Here',
    });
  }
}

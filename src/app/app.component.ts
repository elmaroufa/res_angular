import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest';

  constructor(private transLateService: TranslateService){

    this.transLateService.setDefaultLang('en');
    this.transLateService.use(localStorage.getItem('lang') || 'en');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  lang: string = '';

  ngOnInit(): void {
    this.lang =  localStorage.getItem('lang') || 'en';
  }

  changeLang(lang: any){
    const selectedLanguage = lang.target.value;
    localStorage.setItem('lang', selectedLanguage);
  }

}

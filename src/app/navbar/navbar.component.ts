import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLightTheme: boolean;
  isUserAuth: boolean;

  menuItems = [
    {id: 1, text: 'Dashboard', icon: 'dashboard', link: 'dashboard'},
    {id: 2, text: 'My account', icon: 'account_box', link: 'account'},
    {id: 3, text: 'My payments', icon: 'payment', link: 'payments'}
  ] 

  darkColor = { fill: 'red', stroke: '#797979', background: '#2D3436' }

  constructor(private themeService: ThemeService) {}

  //Theme changing using Service
  onThemeChanged(e) {
    this.themeService.toggleTheme(e.checked);
    this.isLightTheme = this.themeService.isLightTheme;
    console.log('Theme toggled from service : ' + this.themeService.isLightTheme);
  }

  ngOnInit() {
    this.isUserAuth = false;
    //setTimeout(()=>{this.isUserAuth = true;}, 4000);
  }

}

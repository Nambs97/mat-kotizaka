import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLightTheme: boolean;

  menuItems = [
    {id: 1, text: 'Dashboard', icon: 'dashboard', link: 'dashboard'},
    {id: 2, text: 'My accounts', icon: 'account_box', link: 'account'},
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

}

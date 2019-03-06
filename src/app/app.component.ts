import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Kotizaka';
  
  isLightTheme: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isLightTheme = this.themeService.isLightTheme;
  }

  getThemeStatus() {
    return this.themeService.isLightTheme;
  }
}

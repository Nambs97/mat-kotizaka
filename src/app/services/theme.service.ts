import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
    //Properties
    isLightTheme: boolean = false;

    //Methods
    toggleTheme(value: boolean) {
        this.isLightTheme = value;
    }
}
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );

  menuItems = [
    {id: 1, text: 'Home', icon: 'home', link: 'dashboard'},
    {id: 2, text: 'My accounts', icon: 'person_outline', link: 'account'},
    {id: 3, text: 'My payments', icon: 'payment', link: 'payments'}
  ] 

  darkColor = { fill: 'red', stroke: '#797979', background: '#2D3436' }

  constructor(private breakpointObserver: BreakpointObserver) {}

}

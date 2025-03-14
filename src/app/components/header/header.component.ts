import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkmodeService } from '../../darkmode/darkmode.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


//     constructor(private darkmodeService: DarkmodeService) {}

//   isDark!: boolean;



//  ngOnInit(): void {

  

//     this.darkmodeService.loadTheme();

//     this.isDark = document.documentElement.classList.contains('dark');
//     }



//   getTheme() {

//     this.darkmodeService.getTheme();

//     this.isDark = document.documentElement.classList.contains('dark');

//   }


}

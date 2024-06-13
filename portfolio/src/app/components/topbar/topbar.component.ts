import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoComponent } from '../logo/logo.component';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatToolbarModule, LogoComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

}

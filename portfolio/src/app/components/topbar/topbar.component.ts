import { OnInit, Component, Inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoComponent } from '../logo/logo.component';
import {RouterLinkActive, RouterLink} from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ProjectService } from '../../services/project.service';
import { DOCUMENT ,CommonModule} from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    MatToolbarModule, 
    LogoComponent,
    RouterLink, 
    RouterLinkActive,
    MatMenuModule,
    CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit{
  projects : string[] = []


  constructor(@Inject(DOCUMENT) private document: Document, projectService : ProjectService){
    this.projects=projectService.getProjectNames()
  }
  ngOnInit(): void {
    this.adjustDropdownWidth()
  }

  adjustDropdownWidth() {
      var dropbtn = this.document.getElementById('dropbtn');
      var dropdownContent = this.document.getElementById('dropdownContent');
      var dropbtnWidth = dropbtn?.offsetWidth! / this.document.documentElement.clientWidth * 100;
      dropdownContent!.style.width = dropbtnWidth + 3 + 'vw';
  }

  onResize(event : any) {
    this.adjustDropdownWidth()
  }
}

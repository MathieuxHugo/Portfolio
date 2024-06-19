import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent implements OnInit {
  @Input() logo = "";
  @Input() logo_hover = "";  
  @Input() name=""
  @Input() link="";
  path=""

  ngOnInit(): void {
    this.path=this.logo
  }

  changeLogo(event: any){
    if(this.path==this.logo){
      this.path=this.logo_hover
    }
    else{
      this.path=this.logo
    }
  }
}

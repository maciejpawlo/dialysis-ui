import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../core/services/token.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  role!:string;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.role = this.tokenService.getUserRole()!;
  }

}

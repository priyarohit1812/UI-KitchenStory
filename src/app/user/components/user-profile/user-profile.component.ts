import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  isProfile:boolean;
  isAddress:boolean;
  isOrders:boolean;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param: ParamMap) => {
      let screen = param.get('screen');
      if (screen) {
        switch(screen){
          case 'PROFILE':
            this.showProfile();
            break;
          case 'ADDRESS':
            this.showAddresses();
            break;
          case 'ORDER':
            this.showOrders();
            break;
        }
      } else {
        this.showProfile();
      }
    });
    
  }

  showProfile(){
    this.isProfile = true;
    this.isAddress = false;
    this.isOrders = false;
  }

  showAddresses(){
    this.isProfile = false;
    this.isAddress = true;
    this.isOrders = false;
  }

  showOrders(){
    this.isProfile = false;
    this.isAddress = false;
    this.isOrders = true;
  }
}

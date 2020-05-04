import { Component, OnInit, ViewChild, AfterViewInit, Injectable, TemplateRef } from '@angular/core';
// import { MenuItem } from "primeng/primeng";
// import { Menu } from "primeng/components/menu/menu";

import { Router } from "@angular/router";
import { User } from 'src/app/models/user';
import { LoginService } from '../services/login.service';
import { globalService } from 'src/app/services/global.service';
//import { MenuItem } from 'src/app/models/menu-item';
// import { MenuItem } from '../shared';


// import { UserDto, memberDto } from "../models"
// import { LoginService } from '../services/Auth/login.service';
// import { globalService } from '../shared/services/global.service';
// import Swal from 'sweetalert2';

declare var jQuery: any;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],


})

@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {

  // menuItems: MenuItem[];
  // miniMenuItems: MenuItem[];
 
  // @ViewChild('bigMenu') bigMenu: Menu;
  // @ViewChild('smallMenu') smallMenu: Menu;

  logginName: string;
  password: string;
  loginSucceed = true;
  loginOrNew:boolean=true;

  currentUser: User = new User();
  constructor(private router: Router, private loginService: LoginService, private globalService: globalService) {

  }

  ngOnInit() {

    // let handleSelected = function (event) {
    //   let allMenus = jQuery(event.originalEvent.target).closest('ul');
    //   let allLinks = allMenus.find('.menu-selected');

    //   allLinks.removeClass("menu-selected");
    //   let selected = jQuery(event.originalEvent.target).closest('a');
    //   selected.addClass('menu-selected');
    // }

    // this.menuItems = [
    // ]

    // this.miniMenuItems = [];
    // this.menuItems.forEach((item: MenuItem) => {
    //   let miniItem = { icon: item.icon, routerLink: item.routerLink }
    //   this.miniMenuItems.push(miniItem);
    // })

  }

  // selectInitialMenuItemBasedOnUrl() {
  //   let path = document.location.pathname;
  //   let menuItem = this.menuItems.find((item) => { return item.routerLink[0] == path });
  //   if (menuItem) {
  //     let selectedIcon = this.bigMenu.container.querySelector(`.${menuItem.icon}`);
  //     jQuery(selectedIcon).closest('li').addClass('menu-selected');
  //   }
  // }

  // ngAfterViewInit() {
  //   this.selectInitialMenuItemBasedOnUrl();
  // }

  login(template: TemplateRef<any>) {

    this.loginService.login(this.currentUser.loginName, this.currentUser.password).subscribe(

      (data: User) => {

        this.currentUser = data;
        this.loginService.setCurrentUser(data);

        if (this.currentUser) {
          this.loginSucceed = true;
          // Swal.fire({
          //   position: 'center',
          //   icon: 'success',
          //   title: this.loginService.currentUser.userName + " " + "שלום ",
          //   showConfirmButton: false,
          //   timer: 1500
          // })
        
          this.globalService.setUser(this.currentUser);
          this.router.navigateByUrl("/info");

        }

        else
          alert("didnt cannt allowed");
      },

    );

  }
  forget(){
    
      // Swal.fire({
      //   title: 'הכנס כתובת מייל',
      //   input: 'text',
      //   inputAttributes: {
      //     autocapitalize: 'off'
      //   },
        // showCancelButton: false,
        // confirmButtonText: 'אישור',
        // confirmButtonColor:'#17a2b9',
        // showLoaderOnConfirm: true,
        // preConfirm: (emailToCheck) => {
        //  this.loginService.forget(emailToCheck).subscribe((data:boolean)=>{
          
        //    if(data==false){
      
        //     Swal.fire({
        //       position: 'center',
        //       icon: 'error',
        //       title: "משהו השתבש נסה שוב  ",
        //       showConfirmButton: false,
        //       timer: 1500
        //     })
  
  
          //  }
          //  else{
             
          //   Swal.fire({
          //     position: 'center',
          //     icon: 'success',
          //     title: "נשלח בהצלחה",
          //     showConfirmButton: false,
          //     timer: 1500
          //   })
  
        //    }
        //  })
        // },
      //   allowOutsideClick: () => !Swal.isLoading()
      // })
    
  
  }
  addNew() {
       this.loginOrNew=false;
    // this.router.navigateByUrl("/new");
  }
  toLogin(){
    this.loginOrNew=true;
  }
  signOut() {
    this.loginService.signOut();
  }


}
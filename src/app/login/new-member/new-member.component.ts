import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
//import { memberDto } from '../models/dto';
//import { newMemberService } from '../services/Auth/new-member.service';
//import { LoginService } from '../services/Auth/login.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import {newMemberService} from '../services/new-member.service';
import {LoginService} from '../services/login.service';
//import Swal from 'sweetalert2';


@Component({
  selector: 'new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent implements OnInit {

  //memberById: User;
  //currentUser: User;
  userform: FormGroup;
  submitted: boolean;
  isNew: boolean = false;

  @Input()
  member: User = new User();

  constructor(private router: Router, private newMemberService: newMemberService, private loginService: LoginService, private fb: FormBuilder) {
  }

  ngOnInit() {
  
    if (this.member.userId == null) {
      this.isNew = true;
    }
    this.userform = this.fb.group({
      'loginName': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'description': new FormControl(''),
      'gender': new FormControl('', Validators.required)
    });

  }

  onSubmit(value: string) {
    this.submitted = true;
  
  }
  addMember() {

    console.log("before post owner");
    this.newMemberService.addMember(this.member).subscribe(
      (data: User) => {
        
        console.log("after post owner");
        this.router.navigateByUrl("");
        //Swal.fire({
          // position: 'center',
          // icon: 'success',
          // title: "הפרטים נוספו בהצלחה כדי להכנס עבור לכניסה",
          // showConfirmButton: false,
          // timer: 3000
     
        })
  
      }
   // );


  }



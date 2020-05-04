import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
//import { BaseHttpService, BaseApiService } from "../../shared";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from '../models/user';
//import { memberDto } from '../../models/dto/memberDto';



@Injectable()
export class globalService{


    currentUser:User;

    constructor(private router: Router) {
    }
    getUser() {
        return this.currentUser;   
    }

    setUser(user: User) {
       
        this.currentUser = user;
    }

    
}
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//import 'rxjs/add/operator/map';
//import { BaseHttpService, BaseApiService, globalService } from "../../shared";
import { Router } from "@angular/router";
import { User } from 'src/app/models/user';
import { BaseApiService } from 'src/app/models/base-api-service';
import { BaseHttpService } from 'src/app/services/base-http.service';
import { globalService } from 'src/app/services/global.service';

//import { memberDto } from "../../models"


@Injectable()
export class LoginService extends BaseApiService {

    public userName: string;

    public page: PagesRouter;

    public currentUser: User;


    constructor(private router: Router, private baseHttpService: BaseHttpService, private globalService: globalService) {
        super('User');
        this.globalService.currentUser = this.currentUser;
  
    }
    getUserName(): string {

        return this.currentUser.loginName;
    }
    forget(emailToCheck){
       
        let url = this.actionUrl('emailToCheck');
        return this.baseHttpService.get(url, + "/" + emailToCheck );
    }

    setCurrentUser(user: User) {
        this.currentUser = user;
    }

    login(userName: string, password: string): Observable<User> {
        this.userName = userName;
        return this.signIn(userName, password)
    }

    signIn(userName: string, password: string): Observable<User> {
       
        let url = this.actionUrl('Login');
     

        if (typeof userName === "undefined" || typeof password === "undefined") // עדיף לא לשלוח בכלל לשרת. יש לטפל בobservable במקרה כזה
        {
            userName = "";
            password = "";
        }
        
        return this.baseHttpService.get(url, + "/" + userName + "/" + password);

    }



    signOut() {
        this.currentUser = null;
        this.router.navigateByUrl('');

    }

    setPage(/*page:PagesRouter*/) {
        this.userName = 'bbb';
        this.page = PagesRouter.AbsorptionOfACandidate_viewing;
    }
    getPage(): number {
        return this.page.valueOf();
    }
    autoComplet( str:string): Observable<Array<string>>{
        let url = this.actionUrl('ComplainAddres');
        return this.baseHttpService.get(url,+"/"+str);
    }
}
export enum PagesRouter {

    AbsorptionOfACandidate_viewing = 1,
    AbsorptionOfACandidate_editing = 2,
    ManageOffers_viewing = 3,
    ManageOffers_editing = 4,
    FindingCandidates_viewing = 5
}


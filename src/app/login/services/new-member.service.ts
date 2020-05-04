import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { BaseApiService } from 'src/app/models/base-api-service';
import { BaseHttpService } from 'src/app/services/base-http.service';
import { User } from 'src/app/models/user';
//import { BaseHttpService, BaseApiService } from "../../shared";
//import { memberDto } from "../../models";
// import { memberDto } from '../..';


@Injectable()
export class newMemberService extends BaseApiService {

  constructor( private baseHttpService: BaseHttpService, HttpClient: HttpClient,) {
    super('Member');
  }
chat:string;
  addMember(memberDetails: User): Observable<User> {

    let url = this.actionUrl('Post');
  
    return this.baseHttpService.post(url, JSON.stringify(memberDetails));
  }
  getMemberById(id: string) {
    let url = this.actionUrl('GetMemberById');
 
    return this.baseHttpService.get(url, id);
  }
  updateCode(id:string): Observable<number>{
    let url = this.actionUrl('setChatCodeToPackage');
    return this.baseHttpService.get(url, id);
  }

  tochat(login:string,id:string): Observable<boolean>{
    
    let url = this.actionUrl('setChatCodeToDriver');
    this.chat=login;
    return this.baseHttpService.get(url, id+'/'+login);
  }

  updateMember(member:User):Observable<boolean>{
  
    let url = this.actionUrl('UpDate');
    return this.baseHttpService.post(url,JSON.stringify(member));
  }
  deleteMember(id:string):Observable<boolean>{
 
    let url = this.actionUrl('Delete');
    return this.baseHttpService.get(url,id);
  }

  

}
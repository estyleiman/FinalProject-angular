import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
//import { BaseHttpService, BaseApiService , globalService} from "../../shared";
import { Priority } from 'src/app/models/priority';
import { BaseHttpService } from 'src/app/services/base-http.service';
import { BaseApiService } from 'src/app/models/base-api-service';
//import { Router } from "@angular/router";
//import { Priority } from "../../models"

@Injectable()
export class PriorityService extends BaseApiService{
    priorities: Priority[];
    constructor( private baseHttpService: BaseHttpService ) {

        super('Priority');
        this.setPriorities();
    }

    setPriorities(){
    this.getAllPriorities().subscribe(data => {
    if(data){
    this.priorities = data;
    }
    else
    alert("err");
    });
    }

    getPriorities(){
    return this.priorities;
    }

    getAllPriorities(): Observable<Priority[]> {
       
        let url = this.actionUrl('getAllPriorities');  
        return this.baseHttpService.get<Priority[]>(url);

    }

}
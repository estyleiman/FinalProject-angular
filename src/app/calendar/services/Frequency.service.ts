import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { BaseApiService } from 'src/app/models/base-api-service';
import { BaseHttpService } from 'src/app/services/base-http.service';
import { Frequency } from 'src/app/models/frequency';
//import { BaseHttpService, BaseApiService , globalService} from "../../shared";
//import { Router } from "@angular/router";
//import { Frequency } from "../../models"

@Injectable()
export class FrequencyService extends BaseApiService{
    frequencies: Frequency[];
    constructor( private baseHttpService: BaseHttpService) {

        super('Frequency');
        this.setFrequencies();
    }

    setFrequencies(){
    this.getAllFrequencies().subscribe(data => {
    if(data){
    this.frequencies = data;
    }
    else
    alert("err");
    });
    }

    getFrequencies(){
    return this.frequencies;
    }

    getAllFrequencies(): Observable<Frequency[]> {
       
        let url = this.actionUrl('getAllFrequencies');  
        return this.baseHttpService.get<Frequency[]>(url);

    }

}
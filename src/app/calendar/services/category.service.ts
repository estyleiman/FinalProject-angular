import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
//import { BaseHttpService, BaseApiService , globalService} from "../../shared";
import { Category } from 'src/app/models/category';
import { BaseApiService } from 'src/app/models/base-api-service';
import { BaseHttpService } from 'src/app/services/base-http.service';
import { globalService } from 'src/app/services/global.service';
//import { Router } from "@angular/router";
//import { Category } from "../../models"

@Injectable()
export class CategoryService extends BaseApiService{
    categories: Category[];
    constructor( private baseHttpService: BaseHttpService ,private _globalService: globalService) {

        super('Category');
        this.setCategoriesFromDB();
    }

    setCategoriesFromDB(){
    this.getAllCategoriesByuserId().subscribe(data => {
    if(data){
        this.categories = data;
      }
    else {
      alert("err")
    }
    });
    
    }

    getCategories(){
    return this.categories;
    }

    setCategories(categories:Category[]){
    this.categories=categories;
    }

    getAllCategoriesByuserId(): Observable<Category[]> {
       
        let url = this.actionUrl('getAllCategoriesByuserId');  
        return this.baseHttpService.get<Category[]>(url, this._globalService.currentUser.userId);

    }

    addCategory(category:Category): Observable<Category> {
        let url = this.actionUrl('addCategory');  
        return this.baseHttpService.post<Category>(url,category);

    }

    updateCategory(category:Category): Observable<Category> {
       
        let url = this.actionUrl('updateCategory');  
        return this.baseHttpService.put<Category>(url,category);

    }
    
}
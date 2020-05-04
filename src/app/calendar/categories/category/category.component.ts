// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-category',
//   templateUrl: './category.component.html',
//   styleUrls: ['./category.component.scss']
// })
// export class CategoryComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit,OnDestroy } from '@angular/core';
//import { CategoryService } from '../category.service';
//import { PriorityService } from '../priority.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Priority } from 'src/app/models/priority';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../services/category.service';
import { PriorityService } from '../../services/Priority.service';

@Component({
  selector: 'app-Category-details',
  templateUrl:'./category.component.html', 
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  constructor(private _categoryService: CategoryService,private _priorityService: PriorityService, private _acr: ActivatedRoute, private _router: Router) { }
  
  priorities: Priority[];
  categories: Category[];
  categoryId: number;
  category: Category;
  categoryForm: FormGroup;
  
  setCategory(value: Category) {
    this.category=value;
    let ctg=this.categories.find(ctg=>ctg.categoryId==this.category.categoryParentId);
    this.categoryForm.controls["Category_Parent_Code"].setValue(ctg.categoryName);
    // foreach(ctg:Category in this.categories)
    // {
    //     if(ctg.Category_Id==this.category.Category_Parent_Code)
    //     {
    //         this.categoryForm.controls["Category_Parent_Code"].setValue(ctg.Category_Name);
    //     }
    // }
    let pry=this.priorities.find(pry=>pry.priorityId==this.category.priorityId);
    this.categoryForm.controls["Priority_Id"].setValue(pry.priorityName);
    // foreach(let pry in this.priorities)
    // {
    //     if(pry.Priority_Id==this.category.Priority_Id)
    //     {
    //         this.categoryForm.controls["Priority_Id"].setValue(pry.Priority_Name);
    //     }
    // }
    
    this.categoryForm.controls["Category_Name"].setValue(this.category.categoryName);
    this.categoryForm.controls["Category_Color"].setValue(this.category.categoryColor);
    
  }


  ngOnInit() {
    this._acr.paramMap.subscribe(params => {
      this.categoryId = +params.get("Category_Id");
    })
    this.priorities=this._priorityService.getPriorities()
    this.categories=this._categoryService.getCategories()
    if (this.categoryId) {
    let filterData = this.categories.find(ctg=>ctg.categoryId==this.categoryId);
    this.setCategory(filterData);
    }
    this.categoryForm = new FormGroup({
      Category_Name: new FormControl(),
      Category_Color:new FormControl(),
      Priority_Id:new FormControl(),
      Category_Parent_Code:new FormControl(),
    })
  }

  saveCategory(){ 
    this.category.categoryName=this.categoryForm.value.Category_Name;
    this.category.categoryColor=this.categoryForm.value.Category_Color;
    let ctg=this.categories.find(ctg=>ctg.categoryName==this.categoryForm.value.categoryParentId);
    this.category.categoryParentId=ctg.categoryId;
    // foreach(ctg:Category in this.categories)
    // {
    //     if(ctg.Category_Name==this.categoryForm.value.Category_Parent_Code)
    //     {
    //         this.category.Category_Parent_Code=ctg.Category_Id;
    //     }
    // }
    let pry=this.priorities.find(pry=>pry.priorityName==this.categoryForm.value.priorityId);
    this.category.priorityId=pry.priorityId;
    // foreach(pry:Priority in priorities)
    // {
    //     if(pry.Priority_Name==this.categoryForm.value.Priority_Id)
    //     {
    //        this.category.priorityId=pry.Priority_Id;
    //     }
    // }
    if(this.categoryId){
         this._categoryService.updateCategory(this.category).subscribe(data=>{
            if(data){
                alert("the add success");
                //לעדכן את המערך
                this._categoryService.setCategories(this.categories);
                this._router.navigate(["?"]);
            }   
            else {
                alert("err")
            }
            
    });
  }
  
    else {
        this._categoryService.addCategory(this.category).subscribe(data=>{
            if(data){
                alert("the update success");
                this.categories.push(this.category);
                this._categoryService.setCategories(this.categories);
                this._router.navigate(["?"]);
            }
            else {
      alert("err")}
    });
}
}

}

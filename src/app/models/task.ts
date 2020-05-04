import { Frequency_Task } from './frequency-task';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Place } from './place';

export class Task{
    taskId:number;
    userId:number;
    categoryId:number;
    description:string;
    priorityId:number;
    duration:number;
    isSpecificTime:boolean;
    placeId:number;
    reminderTime:number;
    tasks:Frequency_Task[];
    place:Place;
}
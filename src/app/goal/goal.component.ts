import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
   new Goal(1,'Watching Finding Nemo','Find an online version and watch merlin find his son'),
    new Goal(1,'Buy Cookies','I have to buy cookies for the parrot'),
   new Goal(3,'Get new phone case','Diana has her birthday coming up soon'),
   new Goal(4,'Get dog food','Pupper likes expensive sancks'),
    new Goal(5,'Solve math homework','Damn Math'),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord'),
  ];
  toggleDetails(index:number){
    this.goals[index].showDescription =!this.goals[index].showDescription
  }
  completeGoal(isComplete:any, index:any){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

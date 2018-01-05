import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TASKS } from '../models/mock-tasks';
import { Priority } from '../models/priority.enum';
import { Severity } from '../models/severity.enum';

@Component({
  selector: 'hm-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Priority = Priority;
  Severity = Severity;
  tasks = TASKS;
  selectedTask: Task;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

}

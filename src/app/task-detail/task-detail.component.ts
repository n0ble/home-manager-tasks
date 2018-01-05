import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hm-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TaskService,
    private location: Location,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id)
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.taskService.updateTask(this.task)
      .subscribe(() => this.goBack());
  }



}

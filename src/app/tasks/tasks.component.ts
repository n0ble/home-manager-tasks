import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { Priority } from '../models/priority.enum';
import { Severity } from '../models/severity.enum';
import { TaskService} from '../services/task.service';


@Component({
  selector: 'hm-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Priority = Priority;
  Severity = Severity;
  tasks: Task[];
  selectedTask: Task;
  
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }
  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }
 
  add(subject: string): void {
    subject = subject.trim();
    if (!subject) { return; }
    this.taskService.addTask({ name } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }
 
  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskService.deleteTask(task).subscribe();
  }
}

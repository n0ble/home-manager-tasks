import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Priority } from '../models/priority.enum';
import { Severity } from '../models/severity.enum';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, subject: "test", description: 'Lorem ipsum bla bla bla', priority: Priority.Normal, severity: Severity.Important, assignee: 'kirill' },
      { id: 2, subject: "test", description: 'Lorem ipsum bla bla bla', priority: Priority.Normal, severity: Severity.Important, assignee: 'kirill' },
      { id: 3, subject: "test", description: 'Lorem ipsum bla bla bla', priority: Priority.Normal, severity: Severity.Important, assignee: 'kirill' },
      { id: 4, subject: "test", description: 'Lorem ipsum bla bla bla', priority: Priority.Normal, severity: Severity.Important, assignee: 'kirill' },
      { id: 5, subject: "test", description: 'Lorem ipsum bla bla bla', priority: Priority.Normal, severity: Severity.Important, assignee: 'kirill' }
    ];
    return {tasks};
  }
}
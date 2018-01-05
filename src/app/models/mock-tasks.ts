import { Task } from './task';
import { Priority } from './priority.enum';
import { Severity } from './severity.enum';

export const TASKS: Task[] = [
    { id: 1, subject: "test", description: 'Lorem ipsum bla bla bla', priority: Priority.Normal, severity: Severity.Important, assignee: 'kirill' },
    { id: 2, subject: "test", description: 'Lorem ipsum bla bla bla', priority: Priority.Normal, severity: Severity.Important, assignee: 'kirill' },
    { id: 3, subject: "test", description: 'Lorem ipsum bla bla bla', priority: Priority.Normal, severity: Severity.Important, assignee: 'kirill' },
    { id: 4, subject: "test", description: 'Lorem ipsum bla bla bla', priority: Priority.Normal, severity: Severity.Important, assignee: 'kirill' },
    { id: 5, subject: "test", description: 'Lorem ipsum bla bla bla', priority: Priority.Normal, severity: Severity.Important, assignee: 'kirill' }
];
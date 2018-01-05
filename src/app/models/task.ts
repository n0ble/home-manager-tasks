import { Priority } from "./priority.enum";
import { Severity } from "./severity.enum";

export class Task {
    id: number;
    subject: string;
    description: string;
    priority: Priority;
    severity: Severity;
    assignee: string;
}

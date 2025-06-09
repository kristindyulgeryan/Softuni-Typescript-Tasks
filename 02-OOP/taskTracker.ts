class Task {
  title: string;
  description: string;
  completed = false;
  private _createdBy: string;

  constructor(title: string, description: string, createdBy: string) {
    this.title = title;
    this.description = description;
    this._createdBy = createdBy;
  }

  get createdBy() {
    return this._createdBy;
  }

  public toggleStatus(): void {
    this.completed = !this.completed;
  }

  public getDetails(): string {
    return `Task: ${this.title} - ${this.description} - ${
      this.completed ? "Completed" : "Pending"
    }`;
  }

  public static createSampleTask(): Task[] {
    return [
      new Task("Do Calc HW", "complete all problems", "Anji"),
      new Task("Clean room", "sad", "Pencho"),
    ];
  }
}
const task1 = new Task(
  "Complete homework",

  "Finish math exercises",
  "Charlie"
);

task1.toggleStatus();

console.log(task1.getDetails());

const task2 = new Task("Clean room", "Clean theroom", "Mary");

console.log(task2.getDetails());

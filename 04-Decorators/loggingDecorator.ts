function log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(
      `Function '${methodName}' called with arguments: ${args.join(", ")}`
    );
    return originalMethod(args);
  };

  return descriptor;
}

class LoggedPerson {
  fName!: string;
  lName!: string;

  constructor(firstName: string, lastName: string) {
    this.fName = firstName;
    this.lName = lastName;
  }

  @log
  static getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }
}

let loggedPerson = new LoggedPerson("John", "Does");

LoggedPerson.getFullName(loggedPerson.fName, loggedPerson.lName);

LoggedPerson.getFullName("Benny", "Tres");

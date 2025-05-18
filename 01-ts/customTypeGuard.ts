function isNonEmptyStringArray(arg: unknown): arg is string[] {
  return (
    Array.isArray(arg) &&
    arg.length >= 1 &&
    arg.every((item) => typeof item === "string")
  );
}
let arr: unknown = ["test", "123"];

if (isNonEmptyStringArray(arr)) {
  console.log(arr.length);
}

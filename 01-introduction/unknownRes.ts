function unkownResponse(arg: unknown): string {
  if ("value" in (arg as any) && typeof (arg as any).value === "string") {
    return `${(arg as any).value}`;
  }
  return "-";
}
console.log(unkownResponse({ code: 200, text: "Ok", value: [1, 2, 3] }));
console.log(
  unkownResponse({ code: 301, text: "Moved Permanently", value: "New Url" })
);

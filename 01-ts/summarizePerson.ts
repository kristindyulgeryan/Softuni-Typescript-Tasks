function summerizePerson(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  middleName?: string,
  hobbies?: string[],
  workInfo?: [string, number]
): [number, string, number, string, string] {
  const fullName = middleName
    ? `${firstName} ${middleName} ${lastName}`
    : `${firstName} ${lastName}`;

  const hobbiesStr = hobbies ? hobbies.join(", ") : "-";
  const jobStr = workInfo ? `${workInfo[0]}-> ${workInfo[1]}` : "-";
  return [id, fullName, age, hobbiesStr, jobStr];
}

console.log(
  summerizePerson(
    12,
    "Eliot",
    "Des",
    20,
    "Braylen",
    ["tennis", "football", "hiking"],
    ["Sales Consultant", 2500]
  )
);

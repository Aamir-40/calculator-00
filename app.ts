import inquirer from "inquirer";

const answers = await inquirer.prompt([
  {
    message: "Please Enter your Firstnumber",
    type: "number",
    name: "Firstnumber",
  },
  {
    message: "Please Enter your Secondnumber",
    type: "number",
    name: "Secondnumber",
  },
  {
    message: "Please Select one operator of your Choice",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answers.operator === "Addition") {
  console.log(answers.Firstnumber + answers.Secondnumber);
} else if (answers.operator === "Subtraction") {
  console.log(answers.Firstnumber - answers.Secondnumber);
} else if (answers.operator === "Multiplication") {
  console.log(answers.Firstnumber * answers.Secondnumber);
} else if (answers.operator === "Division") {
  console.log(answers.Firstnumber / answers.Secondnumber);
} else {
  console.log("Invalid operator");
}

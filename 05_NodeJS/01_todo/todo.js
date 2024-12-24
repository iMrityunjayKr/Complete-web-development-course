const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks, null, 2); // Format JSON for readability
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  if (!task) {
    console.log("Error: No task provided!");
    return;
  }
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log(`Task added: "${task}"`);
};

const listTasks = () => {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log("No tasks found!");
  } else {
    console.log("Your tasks:");
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
  }
};

const removeTask = (index) => {
  const tasks = loadTasks();
  if (isNaN(index) || index < 1 || index > tasks.length) {
    console.log("Error: Invalid task number!");
    return;
  }
  const removedTask = tasks.splice(index - 1, 1);
  saveTasks(tasks);
  console.log(`Task removed: "${removedTask[0].task}"`);
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found! Use 'add', 'list', or 'remove'.");
}

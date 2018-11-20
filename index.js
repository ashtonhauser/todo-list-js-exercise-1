function newTask(title, description) {
  const task ={
    title: title,
    description: description,
    complete: false,

    markComplete: function () {
      task.complete = true;
    },

    logState: function () {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

const task = newTask("Clean Cat Litter", "Ew");

task.markComplete();
task.logState();

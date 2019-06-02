module.exports = app => {
  const todo = require("../controllers/crudController");

  app.route("/").get(todo.list_all_tasks);
  app
    .route("/tasks")
    .get(todo.list_all_tasks)
    .post(todo.create_a_task);

  app
    .route("/tasks/:taskId")
    .get(todo.read_a_task)
    .put(todo.update_a_task)
    .delete(todo.delete_a_task);
};

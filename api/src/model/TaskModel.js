import TaskSchema from "./TaskSchema.js";
// performing query in schemas

// insert
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

// select
export const getTask = () => {
  return TaskSchema.find();
};

// SingleTask
export const getSingleTask = (_id) => {
  return TaskSchema.findById(_id);
};

// update
export const updateTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type: type }, { new: true });
};

// delete
// delete single task by id
export const deleteTask = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};

// delete all or many task
export const deleteAllTask = (ids) => {
  return TaskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};

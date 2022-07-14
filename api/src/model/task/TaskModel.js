import TaskSchema from "./TaskSchema.js";

export const getSingleTask = (_id) => {
  return TaskSchema.findById(_id);
};

//insert
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save(); //save the task to the db
};

//select
export const getTasks = () => {
  return TaskSchema.find();
};

//update
export const updateTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type }, { new: true }); //
};

//delete
export const deleteTask = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};

// delete many tasks
export const deleteManyTask = (ids) => {
  return TaskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};

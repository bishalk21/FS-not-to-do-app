import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

const formSchema = z.object({
  task: z.string().nonempty("Task is required"),
  hours: z.string().nonempty("Hours is required"),
});

const AddTodo = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
      hours: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-between items-center space-x-4 w-full max-md:flex-col max-md:space-x-0 max-md:space-y-4"
        >
          <FormField
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    className="border border-gray-300 p-2 rounded-md max-md:w-full"
                    placeholder="Enter task"
                    {...field}
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hours"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    className="border border-gray-300 p-2 rounded-md max-md:w-full"
                    placeholder="Enter hours"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Add
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddTodo;

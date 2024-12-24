import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getUser, getUsers } from "@/axios/users/getUsers";
import { User } from "@/types/user/user";

const formUserSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(25, { message: "Name must be at most 25 characters long" }),
  email: z.string().email(),
  role: z.string().optional(),
});

type FormUserType = z.infer<typeof formUserSchema>;

export const FormUI = ({
  setUsers,
  setOpen,
  id,
}: {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id?: number;
}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const form = useForm({
    resolver: zodResolver(formUserSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
    },
    values: {
      name: user?.name,
      email: user?.email,
      role: user?.role,
    },
  });

  async function fetchUsers() {
    try {
      const users = await getUsers();
      setUsers(users || []);
    } catch (error) {
      console.error(error);
    }
  }

  async function onSubmit(values: FormUserType) {
    setLoading(true);
    try {
      if (id) {
        await axios.put(
          `https://65cd2654dd519126b8402f85.mockapi.io/users/${id}`,
          values
        );
      } else {
        await axios.post(
          "https://65cd2654dd519126b8402f85.mockapi.io/users",
          values
        );
      }

      form.reset();
      setOpen(false);
      await fetchUsers();
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function getSingleUser() {
    if (id) {
      const data = await getUser(id);
      if (data) {
        setUser(data);
      }
    }
  }

  useEffect(() => {
    getSingleUser();
  }, [id]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-4 items-center gap-4">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      id="name"
                      placeholder="Pedro Duarte"
                      className="col-span-3"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-4 items-center gap-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="pedro.duarte@gmail.com"
                      className="col-span-3"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-4 items-center gap-4">
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input
                      id="role"
                      placeholder="Admin"
                      className="col-span-3"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <SheetFooter>
          {/* <SheetClose asChild> */}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Saving..." : "Save"}
          </Button>
          {/* </SheetClose> */}
        </SheetFooter>
      </form>
    </Form>
  );
};
export const UserSheetButton = ({
  setUsers,
  open,
  setOpen,
}: {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Add New User
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle> Add New User</SheetTitle>
          <SheetDescription>
            Fill the form below to add a new user. All fields are required.
          </SheetDescription>
        </SheetHeader>
        <FormUI setUsers={setUsers} setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  );
};

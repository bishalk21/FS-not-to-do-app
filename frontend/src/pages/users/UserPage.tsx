import { Edit, Search, Trash2 } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormUI, UserSheetButton } from "@/components/users/UserSheetButton";
import { getUsers } from "@/axios/users/getUsers";
import { User } from "@/types/user/user";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function UserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [open, setOpen] = useState(false);

  async function fetchUsers() {
    try {
      const users = await getUsers();
      setUsers(users || []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (id: number) => {
    try {
      await axios.delete(
        `https://65cd2654dd519126b8402f85.mockapi.io/users/${id}`
      );
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">User Management</h2>
        <UserSheetButton setUsers={setUsers} />
      </div>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    <Sheet open={open} onOpenChange={setOpen}>
                      <SheetTrigger asChild>
                        <Button
                          variant="outline"
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
                        >
                          <Edit size={18} />
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Edit User</SheetTitle>
                          <SheetDescription>
                            Update user details
                          </SheetDescription>
                        </SheetHeader>
                        <FormUI
                          setUsers={setUsers}
                          setOpen={setOpen}
                          id={user.id}
                        />
                      </SheetContent>
                    </Sheet>
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2
                      size={18}
                      onClick={() => handleDeleteUser(user.id)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserPage;

import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaTrash, FaUsers } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecuire from '../../../CustomHook/UseAxiosSecuire';
import Swal from 'sweetalert2';

export default function Allusers() {
  const axiosSecure = UseAxiosSecuire();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const result = await axiosSecure.get('/users');
      return result.data;
    }
  });

  const handleSelected = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  const handleDeleteUser = user => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/users/${user._id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
        }
    });
}

  

  return (
    <div>
      <SectionTitle subHeadings={'How many?'} headings={'Manage All Users'} />
      <div className="overflow-x-auto w-full">
        <h1 className="text-xl font-bold">Total Users: {users.length}</h1>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-end">
                  {user.role === 'admin' ? 'Admin' : (
                    <button
                      onClick={() => handleSelected(user)}
                      className="bg-orange-500 hover:scale-110 scale-100 transition-all duration-100 text-white/75 py-2 px-4 rounded-md flex items-center gap-2">
                      <FaUsers /> Make Admin
                    </button>
                  )}
                </td>
                <td className="text-end">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="bg-red-700 hover:scale-110 scale-100 transition-all duration-100 text-white/75 py-2 px-4 rounded-md flex items-center gap-2">
                    <FaTrash /> Delete
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

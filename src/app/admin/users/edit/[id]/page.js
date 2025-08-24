// src/app/admin/users/edit/[id]/page.js
import UserForm from '../../UserForm';
import { getUserById, updateUser } from '../../actions';
import { notFound } from 'next/navigation';

export default async function EditUserPage({ params }) {
  const { id } = params;
  const user = await getUserById(id);

  if (!user) {
    return notFound();
  }

  // Bind the user ID to the updateUser action
  const updateUserWithId = updateUser.bind(null, user._id);

  return <UserForm formAction={updateUserWithId} user={user} />;
}
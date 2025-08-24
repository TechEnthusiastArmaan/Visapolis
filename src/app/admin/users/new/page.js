// src/app/admin/users/new/page.js
import UserForm from '../UserForm';
import { createUser } from '../actions';

export default function NewUserPage() {
  return <UserForm formAction={createUser} />;
}
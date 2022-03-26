import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './user-list/user-list-component';
import DeleteUser from './delete-user/delete-user.component';


export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<UserList />}></Route>
        <Route path="/admin/delete/:id" element={<DeleteUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

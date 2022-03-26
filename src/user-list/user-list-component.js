import React from 'react';
import { Link } from 'react-router-dom';


export default function UserList(props) {
    return (
        <div className="row">
            <div className="p-3 mb-2 mt-5 bg-info text-white">Admin List</div>
            <table className="table table-striped">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Amit</td>
                        <td>Kumar</td>
                        <td>
                            <Link to="/account/1" className='btn btn-link'>View</Link> |
                            <Link to="/admin/delete/1" className='btn btn-link text-danger'>Delete</Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Test</td>
                        <td>User</td>
                        <td>
                            <Link to="/account/2" className='btn btn-link'>View</Link> |
                            <Link to="/admin/delete/1" className='btn btn-link text-danger'>Delete</Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Sample</td>
                        <td>Name</td>
                        <td>
                            <Link to="/account/3" className='btn btn-link'>View</Link> |
                            <Link to="/admin/delete/1" className='btn btn-link text-danger'>Delete</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
import { Link } from 'react-router-dom';

export default function DeleteUser(props) {
    return (
        <>
            <div className="row">
                <div className="p-3 mt-5 bg-success text-white">User Deleted</div>
            </div>
            <div className="row">
                <Link to="/admin" className="mt-2 btn btn-primary btn-sm btn-block">Back to list</Link>
            </div>
        </>
    )
}
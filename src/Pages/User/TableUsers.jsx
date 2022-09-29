import React from 'react'
import { useLocation } from 'react-router-dom';

const TableUsers = () => {
    const location = useLocation();
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Raihan</td>
                    <td>Raihan@mirai.dev</td>
                    <td>**********</td>
                    <td className='d-flex'>
                        <button className='btn btn-danger'>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableUsers
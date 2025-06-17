import React from 'react'
import { useAdminCategory } from '../../hooks/admin/useAdminCategory'
import { getBackendImageUrl } from '../../utils/backend-image'
import { Link } from 'react-router-dom'
export default function CategoryTable() {
    const { categories, error, isPending } = useAdminCategory()

    return (
        <div>
            CategoryTable
            <table className='min-w-full table-auto'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((row) =>
                            <tr key={row._id}>
                                <td>{row.name}</td>
                                <img className='w-16 h-16 object-cover'
                                    src={getBackendImageUrl(row.filepath)}
                                ></img>
                                <td>
                                    <Link to={"/admin/category/" + row._id}>
                                        <button>View</button>
                                    </Link>

                                    <Link to={"/admin/category/" + row._id + "/edit"}>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

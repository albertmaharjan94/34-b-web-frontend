import React from 'react'
import { useAdminCategory } from '../../hooks/admin/useAdminCategory'
import { getBackendImageUrl } from '../../utils/backend-image'
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

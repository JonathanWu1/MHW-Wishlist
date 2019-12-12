import React from 'react'

export function MaterialsTable(props) {
    return (
        <div>
            <table className = 'table' id =''>
                <thead className = ''>
                    <tr>
                        <th> Name </th>
                        <th> Quantity </th>
                        <th> Monster(s) </th>
                        <th> Biome </th>
                        <th> Rarity </th>
                    </tr>
                </thead>
                <tbody id = 'materialsTableBody'>
                    
                </tbody>
            </table>
        </div>
    )
}

export default MaterialsTable
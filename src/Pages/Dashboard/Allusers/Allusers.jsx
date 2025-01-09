import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'

export default function Allusers() {



    
  return (
    <div>
        <div>
            <SectionTitle
            subHeadings={'How  many?'}
            headings={'Manage All  Users'}
            >
            
            </SectionTitle>
        </div>
      <div className="overflow-x-auto">
        <h1 className='text-xl font-bold'>Total Users : </h1>
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

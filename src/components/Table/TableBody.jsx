import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatToIDR } from '../../utils/format-idr';

export const TableBody = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      // Fetch data from the API
      const fetchData = async () => {
         try {
            const response = await axios.get('http://127.0.0.1:3000/api/v1/get/fakturs');
            setData(response.data.data.data_faktur);

         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);

   return (
      <>
         <tbody>
            {data.map((item, index) => (
               <tr key={item.id} className="bg-white border-b hover:bg-gray-50" >
                  <td className="w-4 p-4">{index + 1}</td>
                  <td className="px-6 py-4">{item.no_faktur}</td>
                  <td className="px-6 py-4">{item.nama_barang}</td>
                  <td className="px-6 py-4">{formatToIDR(item.harga)}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">{item.nama_pelanggan}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.tgl_faktur}</td>
                  <td className="flex items-center px-6 py-4">
                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                     </a>
                     <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                        Remove
                     </a>
                  </td>
               </tr>
            ))}
         </tbody >
      </>
   );
};

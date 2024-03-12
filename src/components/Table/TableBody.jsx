import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatToIDR } from '../../utils/format-idr';
import { useNavigate } from 'react-router-dom';

export const TableBody = () => {
   const navigate = useNavigate();
   const [data, setData] = useState([]);
   const [totalHarga, setTotalHarga] = useState(0);

   const fetchData = async () => {
      try {
         const response = await axios.get('https://backend-tes-mhdusop.vercel.app/api/v1/get/fakturs');
         setData(response.data.data.data_faktur);
         setTotalHarga(response.data.data.total_harga);

      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   const handleRemove = async (id) => {
      try {
         await axios.delete(`https://backend-tes-mhdusop.vercel.app/api/v1/delete/faktur/${id}`);

         const response = await axios.get('https://backend-tes-mhdusop.vercel.app/api/v1/get/fakturs');
         setData((prevData) => prevData.filter((item) => item.id !== id));
         setTotalHarga(response.data.data.total_harga);

      } catch (error) {
         console.error('Error deleting data:', error);
      }
   };

   const handleUpdate = (id) => {
      axios.get(`https://backend-tes-mhdusop.vercel.app//api/v1/get/faktur/${id}`)
         .then(response => {
            navigate(`/form/update/${id}`);
         })
         .catch(error => console.error('Error fetching user data for update:', error));
   };

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
                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => handleUpdate(item.id)}>
                        Edit
                     </a>
                     <a href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                        onClick={() => handleRemove(item.id)}
                     >
                        Remove
                     </a>
                  </td>
               </tr>
            ))}
         </tbody >
      </>
   );
};

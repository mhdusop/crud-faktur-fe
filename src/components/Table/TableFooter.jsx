import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatToIDR } from '../../utils/format-idr';

export const TableFooter = () => {
   const [totalHarga, setTotalHarga] = useState(0);

   useEffect(() => {
      // Fetch data from the API
      const fetchData = async () => {
         try {
            const response = await axios.get('http://127.0.0.1:3000/api/v1/get/fakturs');
            setTotalHarga(response.data.data.total_harga);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);

   return (
      <div className="relative overflow-hidden bg-white rounded-b-lg shadow-md">
         <nav className="flex flex-row items-center justify-between p-4" aria-label="Table navigation">
            <button
               type="button"
               className="flex items-center text-xl justify-center px-4 py-2 text-sm font-medium rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
               Total Harga :
            </button>
            <p className="text-sm">
               <span className="font-medium text-xl text-gray-500 dark:text-gray-700">{formatToIDR(totalHarga)}</span>
            </p>
         </nav>
      </div>
   );
};

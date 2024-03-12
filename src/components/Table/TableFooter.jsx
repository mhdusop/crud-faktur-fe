import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatToIDR } from '../../utils/format-idr';

export const TableFooter = () => {
   const [totalHarga, setTotalHarga] = useState(0);

   const fetchData = async () => {
      try {
         const response = await axios.get('https://backend-tes-mhdusop.vercel.app/api/v1/get/fakturs');
         setTotalHarga(response.data.data.total_harga);
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };

   useEffect(() => {
      const fetchInterval = 1000;

      const fetchDataAndUpdate = async () => {
         try {
            await fetchData();
         } catch (error) {
            console.log(error);
         }
      };

      fetchDataAndUpdate();

      const intervalId = setInterval(fetchDataAndUpdate, fetchInterval);

      return () => clearInterval(intervalId);
   }, []);

   return (
      <div className="relative overflow-hidden bg-white rounded-b-lg shadow-md">
         <nav className="flex flex-row items-center justify-between p-4" aria-label="Table navigation">
            <p
               type="button"
               className="flex items-center text-xl justify-center px-4 py-2 text-sm font-medium rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
               Total Harga :
            </p>
            <p className="text-sm">
               <span className="font-medium text-xl text-gray-500 dark:text-gray-700">{formatToIDR(totalHarga)}</span>
            </p>
         </nav>
      </div>
   );
};

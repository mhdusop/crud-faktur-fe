import { useState } from 'react';
import axios from 'axios';
import { handleNumericInput } from '../../utils/input-numeric';
import { NumericFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';

export const CreateForm = () => {
   const navigate = useNavigate()

   const initialFormData = {
      no_faktur: '',
      nama_barang: '',
      harga: 0,
      quantity: 0,
      nama_pelanggan: '',
      phone: '',
      tgl_faktur: '',
   };

   const [formData, setFormData] = useState(initialFormData);

   const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [id]: value }));
   };

   const handleHargaChange = (values) => {
      const { value } = values;
      setFormData((prevData) => ({ ...prevData, harga: value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await axios.post('backend-tes-mhdusop.vercel.app/api/v1/create/faktur', formData);
         if (response.data.status_code === 201) {
            setFormData(initialFormData);
            navigate('/');
         } else {
            console.log('Unexpected status code:', response);
         }
      } catch (error) {
         console.error('API Error:', error);
      }
   };

   return (
      <>
         <div className="container bg-white p-6">
            <form onSubmit={handleSubmit}>
               {/* Input fields for the new request body */}
               <div className='grid gap-6 mb-6 md:grid-cols-2'>
                  <div>
                     <label htmlFor="no_faktur" className="block mb-2 text-sm font-medium text-gray-900">
                        No. Faktur
                     </label>
                     <input
                        type="text"
                        id="no_faktur"
                        value={formData.no_faktur}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukan No Faktur"
                        required
                     />
                  </div>
                  <div>
                     <label htmlFor="nama_barang" className="block mb-2 text-sm font-medium text-gray-900">
                        Nama Barang
                     </label>
                     <input
                        type="text"
                        id="nama_barang"
                        value={formData.nama_barang}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukan Nama Barang"
                        required
                     />
                  </div>
                  <div>
                     <label htmlFor="harga" className="block mb-2 text-sm font-medium text-gray-900">
                        Harga Barang
                     </label>
                     <NumericFormat
                        id="harga"
                        value={null}
                        thousandSeparator={true}
                        prefix={'Rp'}
                        onValueChange={handleHargaChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukan Harga Barang"
                        required
                     />
                  </div>
                  <div>
                     <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">
                        Quantity
                     </label>
                     <input
                        type="number"
                        id="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukan Quantity"
                        required
                     />
                  </div>
                  <div>
                     <label htmlFor="nama_pelanggan" className="block mb-2 text-sm font-medium text-gray-900">
                        Nama Pelanggan
                     </label>
                     <input
                        type="text"
                        id="nama_pelanggan"
                        value={formData.nama_pelanggan}
                        onChange={handleChange}
                        maxLength="30"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukan Nama Pelanggan"
                        required
                     />
                  </div>
                  <div>
                     <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                        Phone
                     </label>
                     <input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onInput={handleNumericInput}
                        maxLength={13}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukan Nomor Handphone"
                        required
                     />
                  </div>
               </div>
               <div>
                  <label htmlFor="tgl_faktur" className="block mb-2 text-sm font-medium text-gray-900">
                     Tanggal Faktur
                  </label>
                  <input
                     type="date"
                     id="tgl_faktur"
                     value={formData.tgl_faktur}
                     onChange={handleChange}
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Masukan Tanggal Faktur"
                     required
                  />
               </div>

               <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 mt-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                  Submit
               </button>
            </form>
         </div>
      </>
   );
};

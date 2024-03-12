import { useState, useEffect } from 'react';
import axios from 'axios';
import { handleNumericInput } from '../../utils/input-numeric';
import { NumericFormat } from 'react-number-format';
import { useParams, useNavigate } from 'react-router-dom';

export const UpdateForm = () => {

   const { id } = useParams()
   const navigate = useNavigate()

   const [values, setValues] = useState({
      id: id,
      no_faktur: '',
      nama_barang: '',
      harga: 0,
      quantity: 0,
      nama_pelanggan: '',
      phone: '',
      tgl_faktur: '',
   });


   useEffect(() => {
      if (id) {
         axios.get(`https://backend-tes-mhdusop.vercel.app/api/v1/get/faktur/${id}`)
            .then(response => {
               console.log(response.data.data);
               setValues({
                  ...values,
                  no_faktur: response.data.data.no_faktur,
                  nama_barang: response.data.data.nama_barang,
                  harga: response.data.data.harga,
                  quantity: response.data.data.quantity,
                  nama_pelanggan: response.data.data.nama_pelanggan,
                  phone: response.data.data.phone,
                  tgl_faktur: response.data.data.tgl_faktur,
               });
            })
            .catch(error => console.error('Error fetching user data for update:', error));
      }
   }, [id]);


   const handleSubmit = (e) => {
      e.preventDefault()
      const apiUrl = `https://backend-tes-mhdusop.vercel.app/api/v1/update/faktur/${id}`;

      axios.put(apiUrl, values)
         .then(response => {
            if (response.status === 200) {
               navigate('/')
            }
         })
         .catch(error => {
            console.error('Update failed:', error);
         });
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
                        onChange={e => setValues({ ...values, no_faktur: e.target.value })}
                        value={values.no_faktur}
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
                        onChange={e => setValues({ ...values, nama_barang: e.target.value })}
                        value={values.nama_barang}
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
                        thousandSeparator={true}
                        prefix={'Rp'}
                        onValueChange={({ floatValue }) => setValues({ ...values, harga: floatValue })}
                        value={values.harga}
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
                        onChange={e => setValues({ ...values, quantity: e.target.value })}
                        value={values.quantity}
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
                        onChange={e => setValues({ ...values, nama_pelanggan: e.target.value })}
                        value={values.nama_pelanggan}
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
                        onChange={e => setValues({ ...values, phone: e.target.value })}
                        value={values.phone}
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
                     onChange={e => setValues({ ...values, tgl_faktur: e.target.value })}
                     value={values.tgl_faktur}
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

export const TableHead = () => {
   return (
      <>
         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
            <tr>
               <th scope="col" className="p-4">
                  No
               </th>
               <th scope="col" className="px-6 py-3">
                  No Faktur
               </th>
               <th scope="col" className="px-6 py-3">
                  Nama Barang
               </th>
               <th scope="col" className="px-6 py-3">
                  Harga Barang
               </th>
               <th scope="col" className="px-6 py-3">
                  Quantity
               </th>
               <th scope="col" className="px-6 py-3">
                  Nama Pelanggan
               </th>
               <th scope="col" className="px-6 py-3">
                  No Handphone
               </th>
               <th scope="col" className="px-6 py-3">
                  Tgl Faktur
               </th>
               <th scope="col" className="px-6 py-3">
                  Action
               </th>
            </tr>
         </thead>
      </>
   )
}
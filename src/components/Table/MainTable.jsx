import { AddButton } from "../Button/Button"
import { TableBody } from "./TableBody"
import { TableFooter } from "./TableFooter"
import { TableHead } from "./TableHead"

export const MainTable = () => {
   return (
      <>
         <AddButton />
         <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <TableHead />
               <TableBody />
            </table>
            <TableFooter />
         </div>
      </>
   )
}
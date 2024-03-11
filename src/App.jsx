import { MainTable } from "./components/Table/MainTable";
import { CreateForm } from "./components/Form/CreateForm";
import { UpdateForm } from "./components/Form/UpdateForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="container m-auto py-[3rem]">
        <Router>
          <Routes>
            <Route path="/form/create" element={<CreateForm />} />
            <Route path="/form/update/:id" element={<UpdateForm />} />
            <Route path="/" element={<MainTable />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;

import { MainTable } from "./components/Table/MainTable";
import { MainForm } from "./components/Form/MainForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="container m-auto py-[3rem]">
        <Router>
          <Routes>
            <Route path="/form" element={<MainForm />} />
            <Route path="/" element={<MainTable />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;

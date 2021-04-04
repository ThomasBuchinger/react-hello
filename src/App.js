import CpuLayout from "./components/CpuLayout";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app" >
      <div className='header'>
        <h1>8bit CPU Emulator</h1>
        <span>this is an 8bit cpu emulator. blah blah blah</span>
      </div>
      <CpuLayout />
    </div>
  );
}

export default App;

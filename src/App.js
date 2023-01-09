import './style/semantic.less';
import {Button} from "./components/atoms";

function App() {
  return (
    <>
      <Button label='기본 버튼' onClick={() => window.alert("버튼 클릭!")}/>
      <Button label='Primary 버튼' type="primary" onClick={() => window.alert("버튼 클릭!")}/>
      <Button label='Secondary 버튼' type="secondary" onClick={() => window.alert("버튼 클릭!")}/>
    </>
  );
}

export default App;
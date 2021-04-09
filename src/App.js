import { CssBaseline } from '@material-ui/core';
import './App.css';
import Home from './components';
import Resume from './components/Resume';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </CssBaseline>
    </div>
  );
}

export default App;

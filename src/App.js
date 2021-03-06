import './App.css';
import Header from './component/layout/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pages from "./component/pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/movie/popular" component={Pages} />
        <Route path="/movie/new-plaing" component={Pages} />
        <Route path="/movie/upcoming" component={Pages} />
        <Route path="/movie/top-rated" component={Pages} />
        <Route path="/tv/popular" component={Pages} />
        <Route path="/tv/airing-today" component={Pages} />
        <Route path="/tv/on-tv" component={Pages} />
        <Route path="/tv/top-rated" component={Pages} />
        <Route path="/people/popular-people" component={Pages} />
        <Route path="/more/discussion" component={Pages} />
        <Route path="/more/leaderboard" component={Pages} />
        <Route path="/more/support" component={Pages} />
        <Route path="/more/api" component={Pages} />
      </Switch>
    </BrowserRouter>
   );
}

export default App;


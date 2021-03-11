import './App.css';
import Header from './component/layout/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pages from "./component/pages/pages-of-menu";
import MainPage from './component/pages/main-page';
import Footer from './component/layout/footer';
import DetailPopularMovie from './component/pages/detail-popular-movie';
import NotFound from './component/pages/not-found';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <MainPage /> */}
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/movie/popular" component={Pages} />
        <Route exact path="/movie/:id" component={DetailPopularMovie} />
        <Route exact path="/movie/new-plaing" component={Pages} />
        <Route exact path="/movie/upcoming" component={Pages} />
        <Route exact path="/movie/top-rated" component={Pages} />
        <Route exact path="/tv/popular" component={Pages} />
        <Route exact path="/tv/airing-today" component={Pages} />
        <Route exact path="/tv/on-tv" component={Pages} />
        <Route exact path="/tv/top-rated" component={Pages} />
        <Route exact path="/people/popular-people" component={Pages} />
        <Route exact path="/more/discussion" component={Pages} />
        <Route exact path="/more/leaderboard" component={Pages} />
        <Route exact path="/more/support" component={Pages} />
        <Route exact path="/more/api" component={Pages} />
        <Route exact path="/*" component={NotFound}/>
      </Switch>
      <Footer />

    </BrowserRouter>
   );
}

export default App;


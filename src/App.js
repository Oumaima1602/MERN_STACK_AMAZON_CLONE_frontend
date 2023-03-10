import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        {/* to get rid of page refresh cz it's a single page application we need to use Link tag instead of a tag */}
        <Link to="/">amazone</Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen/>}></Route>
          <Route path='/product/:id' element={<ProductScreen/>}></Route>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;

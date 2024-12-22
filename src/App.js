import Categories from './Components/Categories';
import Topics from './Components/Topics'
import Navbar from './Components/Navbar';
import Recommended from './Components/Recommended';
import Saleimage from './Components/Saleimage'
import Popular from './Components/Popular'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Categories/>
      <Saleimage />
      <Recommended />
      <Topics/>
      <Popular />
      <Footer />
      
      
    </div>
  );
}

export default App;

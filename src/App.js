import './App.css';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Nav from './component/Nav';
import request from './component/request';
import Row from './component/Row';


function App() {
  return (

    <>
    <div className="App">
      <Nav />
      <Banner />
      <Row 
        isLargeRow={true}
        title='NETFLIX ORIGINAL'
        fetchUrl={request.fetchNetFlixOriginals}
      />
      <Row 
        
        title='TRENDING'
        fetchUrl={request.fetchTreding}
      />
      <Row 
        
        title='RATED'
        fetchUrl={request.fetchTopRated}
      />
      <Row 
        
        title='ACTION MOVIES'
        fetchUrl={request.fetchActionMovies}
      />
      <Row 
        
        title='COMEDY MOVIES'
        fetchUrl={request.fetchComedyMovies}
      />
      <Row 
        
        title='HORROR'
        fetchUrl={request.fetchHorroMovies}
      />
      <Row 
        
        title='ROMANTIC'
        fetchUrl={request.fetchRomanticMovies}
      />
      <Row 
        
        title='DACUMENTARY'
        fetchUrl={request.fetchDocumentaries}
      />
      <Footer/>
    </div>
    </>
  );
}

export default App;

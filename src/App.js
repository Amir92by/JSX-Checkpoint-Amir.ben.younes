
import './style.css';
import img1 from './images/img1.jpg'



function App() {
  return (
    <div className="App">
        <div style = {{border: "solid 1px black", maxWidth: "100vw"}}>
          <h1 className= "title red"> Welcome to JSX </h1>

            <img src={img1} alt='Img1' />
              <img src="./images/img-pub.jpg" alt='Img2' /> 
        </div>

        <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
        </video>


    </div>
  );
}

export default App;

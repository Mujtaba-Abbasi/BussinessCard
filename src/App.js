import "./styles.css";
import { Info, Footer, About } from "./Components/index";
export default function App() {
  return (
    <div className="App">
      <Info  />
      <About title='About' description='I am a MERN stack developer who is aspiring to be an expert in the same field.'  />
      <About title='Interests' description='I am an avid reader, I also like to write. I like learning new stuff.' />
      <Footer/>
    </div>
  );
}

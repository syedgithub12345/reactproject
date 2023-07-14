import Heading from "./Components/Heading";
import Note from "./Components/Note";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Heading />
      <Note heading="Note 1" content="Hi there!" />
      <Note heading="Note 2" content="Some Content" />
      <Note heading="Note 3" content="Some more content" />

      <Footer />
    </div>
  );
}

export default App;

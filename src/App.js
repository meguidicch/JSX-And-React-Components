
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Adress';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function App() {
  return (
     <div>
      <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#" style={{color : "green"}}>Profile</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
      
     </div>
  );
}

export default App;

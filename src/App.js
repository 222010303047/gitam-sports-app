import './App.css';
import './AppComponents/Form.css'
import './AppComponents/Nav.css'
// import styled from 'styled-components'
// import FormBox from './AppComponents/FormBox/Box'
import RegistartionForm from './AppComponents/RegistartionForm';
import Nav from './AppComponents/Nav';
// import Footer from './AppComponents/Footer';
import { FooterContainer } from './AppComponents/containers/footer'

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// function App() {
//   return (
//     <AppContainer>
//       <FormBox />
//     </AppContainer>
//   );
// }

function App() {
  return (
    <>
    <div>
      <Nav />
    </div>
    {/* <div>
      <RegistartionForm />
    </div> */}
    <div>
    <FooterContainer />
    </div>
    </>
  );
}

export default App;

import {Container, Navigation, Logo} from './styles';
import { Link } from 'react-router-dom';
import UniverseLogo from '../../assets/universe.svg';
export const Header = () =>{

  return (
      <Container>
          <Logo>
            <h1 style={{padding: "10px 10px 10px 40px"}}>Universe</h1>
            <img src={UniverseLogo} width="40px" alt="logo" />
          </Logo>
          <Navigation>
            <Link to="/List">
              <text style={{fontFamily: "Girassol", fontSize:"20px", padding: "20px 40px"}}>List</text>
            </Link>
            <Link to="/Add">
              <text style={{fontFamily: "Girassol", fontSize:"20px", padding: "20px 40px"}}>Add</text>
            </Link>
          </Navigation>
      </Container>
  )
}

import { useState } from 'react';

import {Header} from '../../Components/Header';
import {SelectBar} from '../../Components/SelectBar';
import {Footer} from '../../Components/Footer';
import {ObjectTable} from '../../Components/ObjectTable';

import  {Container} from './styles';

export const ListAll = () => {
  const [buttonClicked, setButtonClicked] = useState(0);
  return (
    <Container>
      <Header/>
      <SelectBar setClicked={setButtonClicked} clicked={buttonClicked}/>
      <ObjectTable clicked={buttonClicked}/>
      <Footer/>
    </Container>
  );
}

import { Dispatch, SetStateAction } from "react";

import { Container, Button } from './styles';

interface Iprops {
  clicked: number;
  setClicked?: Dispatch<SetStateAction<number>>;
}

export const SelectBar = (props: Iprops) => {
  return (
    <Container>
      <Button clicked={props.clicked === 0 || false}  onClick={()=>{if(props.setClicked) props.setClicked(0)}}>Galáxia</Button>
        <Button clicked={props.clicked === 2 || false} onClick={()=>{if(props.setClicked) props.setClicked(2)}}>Sistema planetário</Button>
        <Button clicked={props.clicked === 3 || false}  onClick={()=>{if(props.setClicked) props.setClicked(3)}}>Planeta</Button>
        <Button clicked={props.clicked === 1 || false}  onClick={()=>{if(props.setClicked) props.setClicked(1)}}>Estrela</Button>
      </Container>
  )
}

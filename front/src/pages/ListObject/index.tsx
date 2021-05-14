import { useEffect, useState } from 'react';
import { RouteComponentProps, useParams, useLocation } from 'react-router-dom';

import api from '../../services/api';
import { Container } from './styles';
import { Galaxy, Planet, Star, System } from '../../Components/ObjectTable';

import { Header } from '../../Components/Header';
import { SelectBar } from '../../Components/SelectBar';
import { Footer } from '../../Components/Footer';

interface Iparams {
  object: string;
  id: string;
}

export const ListObject = ({ match }: RouteComponentProps<Iparams>) => {
  const location = useLocation();

  const [galaxies, setGalaxies] = useState<Galaxy>();
  const [planets, setPlanets] = useState<Planet>();
  const [stars, setStars] = useState<Star>();
  const [systems, setSystems] = useState<System>();

  useEffect(() => {
    api.get(`/galaxies/${match.params.id}`)
    .then(response => setGalaxies(response.data[0]))
  }, [match.params.id]);

  useEffect(() => {
    api.get(`/planets/${match.params.id}`)
    .then(response => setPlanets(response.data[0]))
  }, [match.params.id]);

  useEffect(() => {
    api.get(`/stars/${match.params.id}`)
    .then(response => setStars(response.data[0]))
  }, [match.params.id]);

  useEffect(() => {
    api.get(`/systems/${match.params.id}`)
    .then(response => setSystems(response.data[0]))
  }, [match.params.id]);


  switch(location.search.replace('?', '')) {
    case 'stars':
      return (
        <Container>
          <Header/>
            <div>
              <input type="text" value={stars?.nome} />
              <input type="text" value={stars?.cor}/>
              <input type="text" value={stars?.temperatura}/>
              <input type="text" value={stars?.luminosidade}/>
            </div>
          <Footer/>
        </Container>
      );
    default:
      return (
        <Container >
          <h2>OIII</h2>
        </Container>
      )
  }
  // return (
  //   <Container>
  //     <Header/>
  //     <ul>
  //       <li>""</li>
  //     </ul>
  //     <Footer/>
  //   </Container>
  // )
}

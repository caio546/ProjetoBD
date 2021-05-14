import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

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

  const [galaxies, setGalaxies] = useState<Galaxy>({ galaxia_id: 0, nome: '...', formato: '', localizacao: '' });
  const [planets, setPlanets] = useState<Planet>({ planeta_id: 0, nome: '...', diametro: 0, localizacao: '', gravidade: 0 , material: '', idade: 0, tipo: ''});
  // const [stars, setStars] = useState<Star>({ galaxia_id: 0, nome: '...', formato: '', localizacao: '' });
  // const [systems, setSystems] = useState<System>({ galaxia_id: 0, nome: '...', formato: '', localizacao: '' });

  useEffect(() => {
    api.get(`/galaxies/${match.params.id}`)
    .then(response => setGalaxies(response.data[0]))
  }, [match.params.id]);

  return (
    <Container>
      <Header/>
      <ul>
        <li>{galaxies.nome}</li>
      </ul>
      <Footer/>
    </Container>
  )
}

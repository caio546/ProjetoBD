import { useEffect, useState } from 'react';
import { Container } from './styles';

import api from '../../services/api';

export interface Galaxy {
  galaxia_id: number;
  nome: string;
  formato: string;
  localizacao: string;
}

export interface Star {
  estrela_id: number;
  nome: string;
  cor: string;
  luminosidade: number;
  temperatura: number;
}

export interface System {
  sistema_id: number;
  nome: string;
  tipo: string;
  massa: number;
  tamanho: number;
}

export interface Planet {
  planeta_id: number;
  nome: string;
  localizacao: string;
  diametro: number;
  material: string;
  gravidade: number;
  tipo: string;
  idade: number;
}

interface Iprops {
  clicked: number;
}

export const ObjectTable = (props: Iprops) => {

  const [galaxies, setGalaxies] = useState<Galaxy[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [systems, setSystems] = useState<System[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    api.get('/galaxies')
    .then(response => setGalaxies(response.data))
  }, []);

  useEffect(() => {
    api.get('/stars')
    .then(response => setStars(response.data))
  }, []);

  useEffect(() => {
    api.get('/systems')
    .then(response => setSystems(response.data))
  }, []);

  useEffect(() => {
    api.get('/planets')
    .then(response => setPlanets(response.data))
  }, []);

  const renderObject = () => {
    return(
      {
        0:
        <>
        <thead>
            <tr>
              <th>Nome</th>
              <th>Formato</th>
              <th>Localização</th>
            </tr>
        </thead>
        {
          galaxies.map(galaxy =>(
            <tbody>
              <tr key={galaxy.galaxia_id}>
                <td>{galaxy.nome}</td>
                <td>{galaxy.formato}</td>
                <td>{galaxy.localizacao}</td>
              </tr>
            </tbody>
            )
          )
        }
      </>,
        1:
        <>
          <thead>
              <tr>
                <th>Nome</th>
                <th>Cor</th>
                <th>Luminosidade</th>
                <th>Temperatura</th>
              </tr>
          </thead>
          {
            stars.map(star =>(
              <tbody>
                <tr key={star.estrela_id}>
                  <td>{star.nome}</td>
                  <td>{star.cor}</td>
                  <td>{star.luminosidade}</td>
                  <td>{star.temperatura}</td>
                </tr>
              </tbody>
              )
            )
          }
        </>,
        2:
        <>
          <thead>
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Massa</th>
                <th>Tamanho</th>
              </tr>
          </thead>
          {
            systems.map(system =>(
              <tbody>
                <tr key={system.sistema_id}>
                  <td>{system.nome}</td>
                  <td>{system.tipo}</td>
                  <td>{system.massa}</td>
                  <td>{system.tamanho}</td>
                </tr>
              </tbody>
              )
            )
          }
        </>,
        3:
        <>
          <thead>
              <tr>
                <th>Nome</th>
                <th>Localizacao</th>
                <th>Diametro</th>
                <th>Material</th>
                <th>Gravidade</th>
                <th>Tipo</th>
                <th>Idade</th>
              </tr>
          </thead>
          {
            planets.map(planet =>(
              <tbody>
                <tr key={planet.planeta_id}>
                  <td>{planet.nome}</td>
                  <td>{planet.localizacao}</td>
                  <td>{planet.diametro}</td>
                  <td>{planet.material}</td>
                  <td>{planet.gravidade}</td>
                  <td>{planet.tipo}</td>
                  <td>{planet.idade}</td>
                </tr>
              </tbody>
              )
            )
          }
        </>
      }[props.clicked]
    )
  }

  return (
    <Container>
      <table>
            {renderObject()}
      </table>
    </Container>
  )
}

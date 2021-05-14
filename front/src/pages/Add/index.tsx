import { FormEvent, useEffect, useState, useCallback, ChangeEvent } from 'react';

import {Header} from '../../Components/Header';
import {SelectBar} from '../../Components/SelectBar';
import {Footer} from '../../Components/Footer';

import api from '../../services/api';

import { Galaxy, Planet, Star, System } from '../../Components/ObjectTable/index';
 
import  { Container, ModalContainer, Modal} from './styles';

export const Add = () => {
  const [buttonClicked, setButtonClicked] = useState(0);

  const [galaxies, setGalaxies] = useState<Galaxy>({ galaxia_id: 0, nome: '', formato: '', localizacao: '' });
  const [planets, setPlanets] = useState<Planet>({ planeta_id: 0, nome: '', diametro: 0, localizacao: '', gravidade: 0 , material: '', idade: 0, tipo: ''});
  const [stars, setStars] = useState<Star>({ estrela_id: 0, nome: '', cor: '', luminosidade: 0, temperatura: 0, foto: undefined});
  const [systems, setSystems] = useState<System>({ sistema_id: 0, nome: '', massa: 0, tamanho: 0, tipo: '' });

  const [selectedFile, setSelectedFile] = useState<FileList | null>();

  const [allGalaxies, setAllGalaxies] = useState<Galaxy[]>([]);
  const [allSystems, setAllSystems] = useState<System[]>([]);

  useEffect(() => {
    api.get('/galaxies')
    .then(response => setAllGalaxies(response.data))
  }, [])

  useEffect(() => {
    api.get('/systems')
    .then(response => setAllSystems(response.data))
  }, [])

  const handleSelectedGalaxy = (id: string) => {
    api.get(`/galaxies/${id}`)
    .then(response => setGalaxies(response.data[0]))
  }

  const handleSelectedSystem = (id: string) => {
    api.get(`/systems/${id}`)
    .then(response => setSystems(response.data[0]))
  }

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const data = new FormData();

      data.append('Foto', e.target.files[0]);

    }
  }, []);

  const handleCreateObject = (event: FormEvent) => {
    event.preventDefault();
    var data = {};
    var param = "";

    if(buttonClicked === 0){
      data = {
        Nome: galaxies.nome,
        Formato: galaxies.formato,
        Localizacao: galaxies.localizacao
      }
      param = "galaxies";
    }else if(buttonClicked === 2){
      data = {
        Nome: systems.nome,
        Massa: systems.massa,
        Tamanho: systems.tamanho,
        Tipo: systems.tipo,
        Galaxia_ID: +galaxies.galaxia_id
      }
      param = "systems";
    }else if(buttonClicked === 3){
      data = {
        Nome: planets.nome,
        Localizacao: planets.localizacao,
        Diametro: planets.diametro,
        Material: planets.material,
        Gravidade: planets.gravidade,
        Tipo: planets.tipo,
        Idade: planets.idade,
        Sistema_ID: systems.sistema_id

      }
      param = "planets";
    }else if(buttonClicked === 1) {
      const data = new FormData();
      data.append('Nome', stars.nome);
      data.append('Cor', stars.cor);
      data.append('Luminosidade', String(stars.luminosidade));
      data.append('Temperatura', String(stars.temperatura));
      data.append('Sistema_ID', String(systems.sistema_id));
      data.append('Foto', selectedFile ? selectedFile[0] : '');
      param = "stars";
      api.post(`/${param}`, data);
    }
    if (buttonClicked !== 1) {
      api.post(`/${param}`, data);
    }

    console.log(data);
  }
  // 0, 2, 3, 1
  const renderModal = () => {
    return(
      {
        0:
          <>
            <h2>Cadastrar Galáxia</h2>
            <input 
              placeholder="Nome"
              value={galaxies.nome}
              onChange={event => setGalaxies({...galaxies, nome: event.target.value})}
            />

            <input 
              placeholder="Formato"
              value={galaxies.formato}
              onChange={event => setGalaxies({...galaxies, formato: event.target.value})}
            />

            <input 
              placeholder="Localização"
              value={galaxies.localizacao}
              onChange={event => setGalaxies({...galaxies, localizacao: event.target.value})}
            />

            <button type="submit">
              Cadastrar Galáxia
            </button>
          </>,
          2:
          <>
            <h2>Cadastrar Sistema planetário</h2>
            <input 
              placeholder="Nome"
              value={systems.nome}
              onChange={event => setSystems({...systems, nome: event.target.value})}
            />

            <input 
              placeholder="Massa"
              value={systems.massa == 0 ? '' : systems.massa}
              onChange={event => setSystems({...systems, massa: +event.target.value})}
            />

            <input 
              placeholder="Tamanho"
              value={systems.tamanho == 0 ? '' : systems.tamanho}
              onChange={event => setSystems({...systems, tamanho: +event.target.value})}
            />
            <input 
              placeholder="Tipo"
              value={systems.tipo}
              onChange={event => setSystems({...systems, tipo: event.target.value})}
            />

            <select onChange={({target: {value}}) => handleSelectedGalaxy(value)}>
              {allGalaxies.map(galaxy => (
                <option value = {galaxy.galaxia_id}>{galaxy.nome}</option>
              ))}
            </select>

            <button type="submit">
              Cadastrar Sistema
            </button>
          </>,
          3:
          <>
            <h2>Cadastrar Planeta</h2>
            <input 
              placeholder="Nome"
              value={planets.nome}
              onChange={event => setPlanets({...planets, nome: event.target.value})}
            />

            <input 
              placeholder="Localizacao"
              value={planets.localizacao}
              onChange={event => setPlanets({...planets, localizacao: event.target.value})}
            />

            <input 
              placeholder="Diametro"
              value={planets.diametro == 0 ? '' : planets.diametro}
              onChange={event => setPlanets({...planets, diametro: +event.target.value})}
            />
            <input 
              placeholder="Material"
              value={planets.material}
              onChange={event => setPlanets({...planets, material: event.target.value})}
            />
            <input 
              placeholder="Gravidade"
              value={planets.gravidade == 0 ? '' : planets.gravidade}
              onChange={event => setPlanets({...planets, gravidade: +event.target.value})}
            />
            <input 
              placeholder="Tipo"
              value={planets.tipo}
              onChange={event => setPlanets({...planets, tipo: event.target.value})}
            />
          <input 
            placeholder="Idade"
            value={planets.idade == 0 ? '' : planets.idade}
            onChange={event => setPlanets({...planets, idade: +event.target.value})}
          />

            <select onChange={({target: {value}}) => handleSelectedSystem(value)}>
              {allSystems.map(system => (
                <option value = {system.sistema_id}>{system.nome}</option>
              ))}
      
            </select>

            <button type="submit">
              Cadastrar Planeta
            </button>
          </>,
          1:
          <>
            <h2>Cadastrar Estrela</h2>
            <input 
              placeholder="Nome"
              value={stars.nome}
              onChange={event => setStars({...stars, nome: event.target.value})}
            />

            <input 
              placeholder="Cor"
              value={stars.cor}
              onChange={event => setStars({...stars, cor: event.target.value})}
            />

            <input 
              placeholder="Luminosidade"
              value={stars.luminosidade == 0 ? '' : stars.luminosidade}
              onChange={event => setStars({...stars, luminosidade: +event.target.value})}
            />

            <input 
              placeholder="Temperatura"
              value={stars.temperatura == 0 ? '' : stars.temperatura}
              onChange={event => setStars({...stars, temperatura: +event.target.value})}
            />

            <select onChange={({target: {value}}) => handleSelectedSystem(value)}>
              {allSystems.map(system => (
                <option value = {system.sistema_id}>{system.nome}</option>
              ))}
      
            </select>

            <input type="file" id="foto" onChange={(e) => setSelectedFile(e.target.files)} />

            <button type="submit">
              Cadastrar Estrela
            </button>
          </>
      }[buttonClicked]
    )
  }

  return (
    <Container>
      <Header/>
        <SelectBar setClicked={setButtonClicked} clicked={buttonClicked}/>
        <ModalContainer>
          <Modal onSubmit={handleCreateObject}>
            {renderModal()}
          </Modal>
        </ModalContainer>
      <Footer/>
    </Container>
  );
}

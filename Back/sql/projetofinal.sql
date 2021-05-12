DROP TABLE IF EXISTS Satelite;
DROP TABLE IF EXISTS Estrela;
DROP TABLE IF EXISTS Planeta;
DROP TABLE IF EXISTS BuracoNegro;
DROP TABLE IF EXISTS Meteorito;
DROP TABLE IF EXISTS Asteroide;
DROP TABLE IF EXISTS Cometa;
DROP TABLE IF EXISTS Meteoro;
DROP TABLE IF EXISTS SistemaPlanetario;
DROP TABLE IF EXISTS Galaxia;

CREATE TABLE Galaxia (
    Galaxia_ID SERIAL PRIMARY KEY,
    Nome VARCHAR(45) NOT NULL UNIQUE,
    Formato VARCHAR(45) NOT NULL,
    Localizacao VARCHAR(45) NOT NULL
);

CREATE TABLE SistemaPlanetario (
	Sistema_ID SERIAL PRIMARY KEY,
	Nome VARCHAR(45) NOT NULL UNIQUE,
	Tipo VARCHAR(45) NOT NULL,
	Massa INT NOT NULL,
	Tamanho INT NOT NULL,
	Galaxia_ID SERIAL NOT NULL,
	CONSTRAINT fk_galaxia
	FOREIGN KEY(Galaxia_ID)
	REFERENCES Galaxia(Galaxia_ID)
);

CREATE TABLE Meteoro (
	Meteoro_ID SERIAL PRIMARY KEY,
	Nome VARCHAR(45) NOT NULL UNIQUE,
	VelocidadeQueda INT NOT NULL,
	Sistema_ID SERIAL NOT NULL,
	CONSTRAINT fk_sistema
	FOREIGN KEY(Sistema_ID)
	REFERENCES SistemaPlanetario(Sistema_ID)
);

CREATE TABLE Cometa (
	Cometa_ID SERIAL PRIMARY KEY,
	Nome VARCHAR(45) NOT NULL UNIQUE,
	TamanhoCauda INT NOT NULL,
	Sistema_ID SERIAL NOT NULL,
	CONSTRAINT fk_sistema
	FOREIGN KEY(Sistema_ID)
	REFERENCES SistemaPlanetario(Sistema_ID)
);

CREATE TABLE Asteroide (
	Asteroide_ID SERIAL PRIMARY KEY,
	Nome VARCHAR(45) NOT NULL UNIQUE,
	Tamanho VARCHAR(45) NOT NULL,
	Sistema_ID SERIAL NOT NULL,
	CONSTRAINT fk_sistema
	FOREIGN KEY(Sistema_ID)
	REFERENCES SistemaPlanetario(Sistema_ID)
);

CREATE TABLE Meteorito (
	Meteorito_ID SERIAL PRIMARY KEY,
	Nome VARCHAR(45) NOT NULL UNIQUE,
	Material VARCHAR(45) NOT NULL,
	Sistema_ID SERIAL NOT NULL,
	CONSTRAINT fk_sistema
	FOREIGN KEY(Sistema_ID)
	REFERENCES SistemaPlanetario(Sistema_ID)
);

CREATE TABLE BuracoNegro (
	Buraco_ID SERIAL PRIMARY KEY,
	Nome VARCHAR(45) NOT NULL UNIQUE,
	Densidade INT NOT NULL,
	Sistema_ID SERIAL NOT NULL,
	CONSTRAINT fk_sistema
	FOREIGN KEY(Sistema_ID)
	REFERENCES SistemaPlanetario(Sistema_ID)
);

CREATE TABLE Planeta (
	Planeta_ID SERIAL PRIMARY KEY,
	Nome VARCHAR(45) NOT NULL UNIQUE,
	Localizacao VARCHAR(45) NOT NULL,
	Diametro INT NOT NULL,
	Material VARCHAR(45) NOT NULL,
	Gravidade INT NOT NULL,
	Tipo VARCHAR(45) NOT NULL,
	Idade INT NOT NULL,
	Sistema_ID SERIAL NOT NULL,
	CONSTRAINT fk_sistema
	FOREIGN KEY(Sistema_ID)
	REFERENCES SistemaPlanetario(Sistema_ID)
);

CREATE TABLE Estrela (
	Estrela_ID SERIAL PRIMARY KEY,
	Nome VARCHAR(45) NOT NULL UNIQUE,
	Cor VARCHAR(45) NOT NULL,
	Luminosidade INT NOT NULL,
	Temperatura INT NOT NULL,
	Foto BYTEA,
	Sistema_ID SERIAL NOT NULL,
	CONSTRAINT fk_sistema
	FOREIGN KEY(Sistema_ID)
	REFERENCES SistemaPlanetario(Sistema_ID)
);

CREATE TABLE Satelite (
	Satelite_ID SERIAL PRIMARY KEY,
	Nome VARCHAR(45) NOT NULL UNIQUE,
	Tipo VARCHAR(45) NOT NULL,
	TamanhoOrbita VARCHAR(45) NOT NULL,
	Planeta_ID SERIAL NOT NULL,
	CONSTRAINT fk_planeta
	FOREIGN KEY(Planeta_ID)
	REFERENCES Planeta(Planeta_ID)
);

insert into Galaxia(Nome, Formato, Localizacao) values('Via Láctea', 'Espiral', 'Quadrante 60');
insert into Galaxia(Nome, Formato, Localizacao) values('Andrômeda', 'Espiral', 'Quadrante 41');
insert into Galaxia(Nome, Formato, Localizacao) values('Olho Negro', 'Espiral', 'Quadrante 332');
insert into Galaxia(Nome, Formato, Localizacao) values('Bode', 'Espiral', 'Quadrante 112');
insert into Galaxia(Nome, Formato, Localizacao) values('Cartwheel', 'Espiral', 'Quadrante 33');

insert into SistemaPlanetario(Nome, Tipo, Massa, Tamanho, Galaxia_ID) values('Sistema Solar', 'Solar', 1, 8, 1);
insert into SistemaPlanetario(Nome, Tipo, Massa, Tamanho, Galaxia_ID) values('Gliese 876', 'ExtraSolar', 33, 4, 2);
insert into SistemaPlanetario(Nome, Tipo, Massa, Tamanho, Galaxia_ID) values('82 Eridani', 'ExtraSolar', 20, 3, 2);
insert into SistemaPlanetario(Nome, Tipo, Massa, Tamanho, Galaxia_ID) values('Gliese 581', 'ExtraSolar', 20, 4, 3);
insert into SistemaPlanetario(Nome, Tipo, Massa, Tamanho, Galaxia_ID) values('Gliese 667 C', 'ExtraSolar', 21, 5, 5);

insert into Meteoro(Nome, VelocidadeQueda, Sistema_ID) values('Wabar', 90, 1);
insert into Meteoro(Nome, VelocidadeQueda, Sistema_ID) values('Kaali', 40, 1);
insert into Meteoro(Nome, VelocidadeQueda, Sistema_ID) values('Campo del Cielo', 300, 1);
insert into Meteoro(Nome, VelocidadeQueda, Sistema_ID) values('Henbury', 22, 1);
insert into Meteoro(Nome, VelocidadeQueda, Sistema_ID) values('Morasko', 1000, 1);

insert into Cometa(Nome, TamanhoCauda, Sistema_ID) values('Halley', 42, 1);
insert into Cometa(Nome, TamanhoCauda, Sistema_ID) values('Mellish', 32, 1);
insert into Cometa(Nome, TamanhoCauda, Sistema_ID) values('Dubiago', 27, 1);
insert into Cometa(Nome, TamanhoCauda, Sistema_ID) values('Wilk', 8, 1);
insert into Cometa(Nome, TamanhoCauda, Sistema_ID) values('Väisälä', 19, 1);

insert into Asteroide(Nome, Tamanho, Sistema_ID) values('Ceres', 500, 1);
insert into Asteroide(Nome, Tamanho, Sistema_ID) values('Eros', 200, 1);
insert into Asteroide(Nome, Tamanho, Sistema_ID) values('Geographos', 154, 1);
insert into Asteroide(Nome, Tamanho, Sistema_ID) values('Hathor', 290, 1);
insert into Asteroide(Nome, Tamanho, Sistema_ID) values('Hermes', 322, 1);

insert into Meteorito(Nome, Material, Sistema_ID) values('Hoba', 'Ataxite', 1);
insert into Meteorito(Nome, Material, Sistema_ID) values('Cape York', 'Octahedrite', 1);
insert into Meteorito(Nome, Material, Sistema_ID) values('Gancedo', 'Octahedrite', 1);
insert into Meteorito(Nome, Material, Sistema_ID) values('Armanty', 'Octahedrite', 1);
insert into Meteorito(Nome, Material, Sistema_ID) values('Bacubirito', 'Octahedrite', 1);

insert into BuracoNegro(Nome, Densidade, Sistema_ID) values('TON 618', 66, 1);
insert into BuracoNegro(Nome, Densidade, Sistema_ID) values('Holmberg 15A', 40, 1);
insert into BuracoNegro(Nome, Densidade, Sistema_ID) values('IC 1101', 40, 1);
insert into BuracoNegro(Nome, Densidade, Sistema_ID) values('S5 0014+81', 34, 1);
insert into BuracoNegro(Nome, Densidade, Sistema_ID) values('SMSS J215728.21-360215.1', 33, 1);

insert into Planeta(Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID)
values('Mercúrio', 'Posicao 1', 4879, 'Rochoso', 3, 'Solar', 1000000, 1);

insert into Planeta(Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID)
values('Vênus', 'Posicao 2', 12100, 'Rochoso', 8, 'Solar', 1000000, 1);

insert into Planeta(Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID)
values('Terra', 'Posicao 3', 12700, 'Rochoso', 10, 'Solar', 1000000, 1);

insert into Planeta(Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID)
values('Marte', 'Posicao 4', 6792, 'Rochoso', 3, 'Solar', 1000000, 1);

insert into Planeta(Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID)
values('WASP-1b', 'Posicao 0-90', 4701, 'Rochoso', 1, 'ExtraSolar', 2323210, 2);

insert into Estrela(Nome, Cor, Luminosidade, Temperatura, Sistema_ID)
values('Sol', 'Branca', 3846, 157, 1);

insert into Estrela(Nome, Cor, Luminosidade, Temperatura, Sistema_ID)
values('Sirius', 'Azul', 28, 4895, 1);

insert into Estrela(Nome, Cor, Luminosidade, Temperatura, Sistema_ID)
values('Canopus', 'Azul', 10700, 6998, 1);

insert into Estrela(Nome, Cor, Luminosidade, Temperatura, Sistema_ID)
values('Alpha Centauri', 'Vermelha', 500, 5200, 1);

insert into Estrela(Nome, Cor, Luminosidade, Temperatura, Sistema_ID)
values('Arcturus', 'Branca', 170, 4200, 1);

insert into Satelite(Nome, Tipo, TamanhoOrbita, Planeta_ID) values('Lua', 'Natural', 384000, 3);
insert into Satelite(Nome, Tipo, TamanhoOrbita, Planeta_ID) values('Fobos', 'Natural', 9300, 4);
insert into Satelite(Nome, Tipo, TamanhoOrbita, Planeta_ID) values('Deimos', 'Natural', 23000, 4);
insert into Satelite(Nome, Tipo, TamanhoOrbita, Planeta_ID) values('Sputinik-1', 'Artificial', 186000, 3);
insert into Satelite(Nome, Tipo, TamanhoOrbita, Planeta_ID) values('Explorer 1', 'Aritificial', 190000, 3);

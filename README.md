# Desafio de desenvolvimento Open Banking 2022

![alt text](open-banking.png?raw=true?raw=true "Open-Banking")

Este projeto é a solução de um desafio do desenvolvimento de uma pequena aplicação fullstack que apresente uma lista de todos os participantes do Open Banking no Brasil (desenvolvido com base em uma [API](https://data.directory.openbankingbrasil.org.br/participants) fornecida pelo [openbankingbrasil.org.br](openbankingbrasil.org.br/), a página oficial do Open Banking no Brasil). E com o prazo máximo de 48h para desenvolvimento. 

A aplicação foi inteiramente desenvolvida via código, usando HTML, CSS e JavaScript. O Front-end foi implementado em React.js (utilizando também o Material UI) e o Back-end foi implementado em Node.js (seguindo o conhecido padrão arquitetural MVC), ambos os módulos são desacoplados e se comunicam por APIs internas. O Banco de Dados foi implementado em MySQL.

As informações extraídas da API do openbankingbrasil.org.br são salvas em um banco de dados do próprio projeto cada vez que essas informações são consultadas. E, como requisito obrigatório do projeto, o servidor da aplicação também salva neste mesmo banco de dados um backup de todos os participantes do Open Banking no Brasil, todos os dias e a cada uma hora.

O código fonte da aplicação e todo o processo de desenvolvimento e commits podem ser conferidos neste próprio repositório.

E uma versão implementada do projeto pode ser demonstrada no seguinte link:

[https://desafio-open-banking-2022.herokuapp.com/](https://desafio-open-banking-2022.herokuapp.com/)
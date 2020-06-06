-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Tempo de geração: 06/06/2020 às 20:35
-- Versão do servidor: 5.5.42
-- Versão do PHP: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Banco de dados: `guiaperguntas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `pergunta`
--

CREATE TABLE `pergunta` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descricao` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `pergunta`
--

INSERT INTO `pergunta` (`id`, `titulo`, `descricao`, `createdAt`, `updatedAt`) VALUES
(1, 'Pergunta 1#', 'Pergunta...', '2020-06-06 13:28:12', '2020-06-06 13:28:12'),
(2, 'Pergunta #2', 'Pergunta...', '2020-06-06 13:38:36', '2020-06-06 13:38:36');

-- --------------------------------------------------------

--
-- Estrutura para tabela `respostas`
--

CREATE TABLE `respostas` (
  `id` int(11) NOT NULL,
  `corpo` text NOT NULL,
  `id_pergunta` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `respostas`
--

INSERT INTO `respostas` (`id`, `corpo`, `id_pergunta`, `createdAt`, `updatedAt`) VALUES
(1, 'Resposta...', 2, '2020-06-06 14:02:55', '2020-06-06 14:02:55');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `pergunta`
--
ALTER TABLE `pergunta`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `respostas`
--
ALTER TABLE `respostas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `pergunta`
--
ALTER TABLE `pergunta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de tabela `respostas`
--
ALTER TABLE `respostas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
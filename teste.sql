-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           8.0.26 - MySQL Community Server - GPL
-- OS do Servidor:               Linux
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para estoque
CREATE DATABASE IF NOT EXISTS `estoque` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `estoque`;

-- Copiando estrutura para tabela estoque.produtos
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `code` bigint NOT NULL DEFAULT '0',
  `price` int DEFAULT NULL,
  `name` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `quantidade` int NOT NULL,
  `quantidademinima` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Copiando dados para a tabela estoque.produtos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` (`id`, `code`, `price`, `name`, `quantidade`, `quantidademinima`) VALUES
	('0cc514f2-3012-473a-919b-32750abee5d3', 232132121321, 2, 'Televisao', 30, 12),
	('9e621e89-d3a7-4b69-80fe-4666b128aaa9', 432432432, 3, '234324', 14, 234),
	('acb5f243-6aaf-4f6b-8485-bf066da05eb4', 234324, 23, '32423', 35, 30),
	('918fd4b5-e1ea-43e5-ae0a-b6e3d3c6fe4b', 123213, 121, '12321', 12, 21),
	('5d670e2b-8c94-4c26-bbc9-8d3050df2d34', 121321312, 234, 'sapato', 23, 43),
	('d50511ad-80ff-4a91-b3c0-60f1b38d4b69', 12321, 12, '21321', 12, 32);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;

-- Copiando estrutura para tabela estoque.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` varchar(50) NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Copiando dados para a tabela estoque.user: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
	('1', 'victor', 'victorshermon@yahoo.com', '$2a$09$UHKlWjJ6w0d2nugaPIOqO.n.X7S0CEr.dxnMiKRgdopvXVj17N1Cq'),
	('c5dc4f17-f7d6-45c7-b6d4-4965a82f05a2', 'vitor', 'victor804.gt@gmail.com', '$2b$10$pjsentYAZTk2ZLNeh7Q1WuMLKWSLO0h1zZ/Gl7Y1SAbYPOM7QA7ZO'),
	('0cff67f1-3fcf-4a5f-b2f6-43c8c0c44826', 'vitor shermon', 'victor804.gt@gmail.com', '$2b$10$z/BO2bdMvVZjfOAxluoVle7peFec6hI0CpWHKgQx7WfxdH/sleudq');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

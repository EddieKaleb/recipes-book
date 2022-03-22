# CREATES

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema receitas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema receitas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `receitas` DEFAULT CHARACTER SET utf8 ;
USE `receitas` ;

-- -----------------------------------------------------
-- Table `receitas`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `receitas`.`usuario` (
  `id` INT NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` TEXT NOT NULL,
  `nome` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `receitas`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `receitas`.`categoria` (
  `id` INT NOT NULL,
  `descricao` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `receitas`.`receita`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `receitas`.`receita` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `tempo_preparo` INT NOT NULL,
  `rendimento` INT NOT NULL,
  `ingredientes` VARCHAR(100) NOT NULL,
  `modo_preparo` TEXT(1000) NOT NULL,
  `observacoes` VARCHAR(200) NULL,
  `url_imagem` VARCHAR(500) NULL DEFAULT 'http://iraja.com.br/wp-content/uploads/2017/09/banner-placeholder.jpg',
  `id_usuario` INT NOT NULL,
  `id_categoria` INT NOT NULL,
  `data` DATE NOT NULL,
  `url_video` TEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_receita_usuario_idx` (`id_usuario` ASC),
  INDEX `fk_receita_categoria1_idx` (`id_categoria` ASC),
  CONSTRAINT `fk_receita_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `receitas`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_receita_categoria1`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `receitas`.`categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

# INSERTS

INSERT INTO categoria(id, descricao) 
VALUES 
(1, 'Massas'),
(2, 'Bolos e Tortas'),
(3, 'Sopas'),
(4, 'Lanches'),
(5, 'Bebidas');

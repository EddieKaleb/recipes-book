-- MySQL Script generated by MySQL Workbench
-- Sun Mar 27 21:41:13 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema receitas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema receitas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `receitas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `receitas` ;

-- -----------------------------------------------------
-- Table `receitas`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `receitas`.`usuario` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `senha` TEXT NOT NULL,
  `nome` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `receitas`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `receitas`.`categoria` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(100) NOT NULL,
  `url_imagem` VARCHAR(500) NOT NULL DEFAULT 'http://iraja.com.br/wp-content/uploads/2017/09/banner-placeholder.jpg',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `receitas`.`receita`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `receitas`.`receita` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `tempo_preparo` INT UNSIGNED NOT NULL,
  `rendimento` INT UNSIGNED NOT NULL,
  `ingredientes` TEXT NOT NULL,
  `modo_preparo` TEXT NOT NULL,
  `observacoes` VARCHAR(200) NULL,
  `url_imagem` VARCHAR(500) NULL DEFAULT 'http://iraja.com.br/wp-content/uploads/2017/09/banner-placeholder.jpg',
  `id_usuario` INT UNSIGNED NOT NULL,
  `id_categoria` INT UNSIGNED NOT NULL,
  `data` DATE NOT NULL,
  `url_video` TEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_receita_usuario_idx` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_receita_categoria1_idx` (`id_categoria` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
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

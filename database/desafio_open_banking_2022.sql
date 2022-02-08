DROP DATABASE IF EXISTS desafio_open_banking_2022;
CREATE DATABASE `desafio_open_banking_2022` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE desafio_open_banking_2022;

CREATE TABLE `desafio_open_banking_2022`.`api_backup` (
  `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `api_url` VARCHAR(512) NOT NULL,
  `api_response_backup` JSON NOT NULL,
  `data` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `api_url_UNIQUE` (`api_url` ASC));

CREATE SCHEMA `note` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `note`.`boards` (
  `creator` VARCHAR(45) NOT NULL,
  `createdAt` VARCHAR(45) NULL DEFAULT NULL,,
  'title' VARCHAR(45) NULL,
  `content` VARCHAR(45) NULL,
  PRIMARY KEY (`creator`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
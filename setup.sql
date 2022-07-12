CREATE SCHEMA `note` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `note`.`boards` (
  `creator` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,,
  'title' VARCHAR(45) NULL,
  `content` LONGTEXT NULL,
  PRIMARY KEY (`creator`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

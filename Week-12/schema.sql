CREATE TABLE `cities` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`city` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`state` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB;


CREATE TABLE `warehouses` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`location` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`extra` JSON NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB;


CREATE TABLE `stores` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`city` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
    `warehourse_id` INT(11) NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB;


CREATE TABLE `customer` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`address` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`city` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB;



CREATE TABLE `orders` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`number` INT,
	`date` DATE,
	`item_id` INT(11) NOT NULL,
	`customer_id` INT(11) NOT NULL,    
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB;



CREATE TABLE `items` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`number` INT,
	`description` TEXT NOT NULL COLLATE 'latin1_swedish_ci',
	`weight` DECIMAL(5,2) ,
	`cost` DECIMAL(5,2) ,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB;


-- insert data into tables

INSERT INTO `pesto-warehourse`.`items` (`number`, `description`, `weight`, `cost`) VALUES ('1', 'item1', '10', '10');
INSERT INTO `pesto-warehourse`.`items` (`number`, `description`, `weight`, `cost`) VALUES ('2', 'item2', '20', '20');
INSERT INTO `pesto-warehourse`.`items` (`number`, `description`, `weight`, `cost`) VALUES ('3', 'item3', '30', '30');
INSERT INTO `pesto-warehourse`.`items` (`number`, `description`, `weight`, `cost`) VALUES ('4', 'item4', '40', '40');
INSERT INTO `pesto-warehourse`.`items` (`number`, `description`, `weight`, `cost`) VALUES ('5', 'item5', '50', '50');


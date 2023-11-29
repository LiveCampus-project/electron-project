
CREATE TABLE IF NOT EXISTS `categorie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `event` (
`id` int NOT NULL AUTO_INCREMENT,
`date_deb` datetime DEFAULT NULL,
`date_fin` datetime DEFAULT NULL,
`titre` varchar(255) DEFAULT NULL,
`location` varchar(255) DEFAULT NULL,
`categorie` varchar(100) DEFAULT NULL,
`statut` varchar(10) DEFAULT NULL,
`description` text,
`transparence` varchar(15) DEFAULT NULL,
`nbMaj` int DEFAULT NULL,
PRIMARY KEY (`id`)
);


CREATE TABLE IF NOT EXISTS `categorie_event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categorie_id` int NOT NULL,
  `event_id` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`categorie_id`) REFERENCES `categorie`(`id`),
  FOREIGN KEY (`event_id`) REFERENCES `event`(`id`)
) ;



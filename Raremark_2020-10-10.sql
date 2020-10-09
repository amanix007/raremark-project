# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 8.0.19)
# Database: Raremark
# Generation Time: 2020-10-09 22:06:12 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Property
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Property`;

CREATE TABLE `Property` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `availableDateStart` varchar(255) DEFAULT NULL,
  `availableDateEnd` varchar(255) DEFAULT NULL,
  `propertyType` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Property` WRITE;
/*!40000 ALTER TABLE `Property` DISABLE KEYS */;

INSERT INTO `Property` (`id`, `title`, `description`, `price`, `location`, `availableDateStart`, `availableDateEnd`, `propertyType`, `createdAt`, `updatedAt`)
VALUES
	(1,' Thailand Resort','adsfasdfasdf',0,' Thailand Resort','2020-10-08','2020-10-29','Single','2020-10-09 21:51:16','2020-10-09 21:51:16'),
	(2,' Bhutan Resort','adsfasdfasdf',0,' Bhutan Resort','2020-10-08','2020-10-29','Single','2020-10-09 21:51:26','2020-10-09 21:51:26'),
	(3,' Bhutan Resort','adsfasdfasdf',8,' Bhutan Resort','2020-10-08','2020-10-29','Single','2020-10-09 21:51:33','2020-10-09 21:51:33'),
	(4,' UK Resort','adsfasdfasdf',8,' UK Resort','2020-10-08','2020-10-29','Single','2020-10-09 21:51:43','2020-10-09 21:51:43'),
	(5,' USA Resort','adsfasdfasdf',8,'asdfasdfasdf','2020-10-08','2020-10-29','Single','2020-10-09 21:51:50','2020-10-09 21:51:50'),
	(6,' aaaa Resort',' aaaa Resort',8,'asdfasdfasdf','2020-10-08','2020-10-29','Single','2020-10-09 21:51:54','2020-10-09 21:51:54'),
	(7,' bbb Resort','adsfasdfasdf',8,'asdfasdfasdf','2020-10-08','2020-10-29','Single','2020-10-09 21:51:58','2020-10-09 21:51:58'),
	(8,' cccc Resort','adsfasdfasdf',8,'asdfasdfasdf','2020-10-08','2020-10-29','Single','2020-10-09 21:52:01','2020-10-09 21:52:01'),
	(9,' ddd Resort','adsfasdfasdf',8,'asdfasdfasdf','2020-10-08','2020-10-29','Single','2020-10-09 21:52:05','2020-10-09 21:52:05'),
	(10,' ffff Resort','adsfasdfasdf',8,'asdfasdfasdf','2020-10-08','2020-10-29','Single','2020-10-09 21:52:12','2020-10-09 21:52:12'),
	(11,' ffff Resort','adsfasdfasdf',8,'asdfasdfasdf','2020-10-08','2020-10-29','Double','2020-10-09 21:52:26','2020-10-09 21:52:26'),
	(12,' yy Resort','adsfasdfasdf',8,'asdfasdfasdf','2020-10-08','2020-10-29','Double','2020-10-09 21:52:35','2020-10-09 21:52:35');

/*!40000 ALTER TABLE `Property` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

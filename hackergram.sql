-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2019 at 09:11 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hackergram`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `email` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`email`, `password`) VALUES
('admin@hackergram.com', 'password');

-- --------------------------------------------------------

--
-- Table structure for table `url`
--

CREATE TABLE `url` (
  `firsturl` varchar(2000) NOT NULL,
  `secoundurl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `url`
--

INSERT INTO `url` (`firsturl`, `secoundurl`) VALUES
('We suspect that some terrorists have a plan to use the Ebola virus. We have managed to collect an encypted message and its key. Can you help us decrypt the message?', 'http://localhost:8080/ctf/crypto'),
('Your target is not very good with computers. Try and guess their password to see if they may be hiding anything', 'http://localhost:8080/ctf/sql'),
('Break into Long bottoms vault and steal his secrets. ', 'http://localhost:8080/ctf/xss'),
('Try to find out the secret which is hiding inside of these pictures and learn the truth about Mona Lisa! ', 'http://localhost:8080/ctf/steg'),
('When we access this page we get a Forbidden error. However we believe that something strange lies behind... Can you find a way in and retrieve the flag? ', 'http://localhost:8080/ctf/web'),
('The security team was alerted to suspicous network activity from a production web server.\r\nCan you determine if any data was stolen and what it was? \r\n', 'http://localhost:8080/ctf/net'),
('SQL INJECTION', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(10) NOT NULL,
  `username` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` bigint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `phone`) VALUES
(1, 'rakeshkumarsingh', 'rakesh1019@gmail.com', 'rakesh@786A', 8466953034),
(2, 'loop', 'loop@gmail.com', 'loop', 9182700412),
(3, 'sourab', 'sourab@gmail.com', 'sourab123', 9856745623),
(4, 'lakshit', 'lakshit@gmail.com', 'lak123', 9462628513),
(5, 'chandan', 'gcgandan389@gmail.com', '123456', 80934596063),
(7, 'ravi', 'ravi@gmail.com', 'jhbdsdfjfzgjhfnx', 9876546352),
(8, 'ravi2', 'rav2i@gmail.com', 'CDCFjjy', 9876546352),
(9, 'sojKJFJ', 'SFi@gmail.com', 'ade', 9876546352),
(11, 'warfcaAGD', 'sCCFSSG@gmail.com', 'SFSEG', 9876546352),
(12, 'Registration fo', 'Registration@gmail.com', 'dfrG', 9876546352),
(13, 'raju', 'raju@gmail.com', 'sdagd', 789652241),
(14, 'nidhi', 'nidhi@gmail.com', 'DSfGTH', 789652241),
(15, 'lpu kumar', 'lpu@gmail.com', 'DSFGRSG', 789652241),
(16, 'login kumar', 'login@gmail.com', 'aFRHYREYE', 789652241),
(17, 'rgistration kumar', 'registration@gmail.com', 'EFWT5EY', 453698),
(18, 'rgistration kumar', 'registration@gmail.com', 'dsdfrg', 45369878),
(19, 'jigar', 'jigar@gmail.com', 'girga#4e', 8466953034),
(20, 'ashish', 'as@gmail.com', 'ash', 98754652),
(21, 'venkat', 'ven@gmail.com', 'ven', 9999999),
(22, 'radio', 'radio@gmail.com', 'radio', 3985333),
(23, 'nidhi', 'nidhi@gmail.com', 'qwerty', 749);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

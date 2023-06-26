-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2023 at 09:55 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tb.pweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `university` varchar(30) NOT NULL,
  `faculty` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `destination` varchar(20) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `university`, `faculty`, `address`, `destination`, `description`, `created_at`, `updated_at`) VALUES
(12, 'Universitas Andalas', 'Fakultas Teknologi Informasi', 'Agam', 'Aulia', 'Butuh cepat ya kalau bisa tanggal 28 Juni sudah siap', '2023-06-24 13:14:36', '2023-06-24 13:14:36'),
(13, 'andalas', 'teknologi informasi', 'pasar baru', 'hana', 'kenapaa susah banget', '2023-06-25 06:06:24', '2023-06-25 06:06:24');

-- --------------------------------------------------------

--
-- Table structure for table `signature`
--

CREATE TABLE `signature` (
  `user_id` int(11) NOT NULL,
  `document_id` int(11) NOT NULL,
  `jabatan` varchar(10) NOT NULL,
  `status` varchar(10) NOT NULL,
  `signed_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `token` varchar(200) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`id`, `token`, `createdAt`, `updatedAt`, `UserId`) VALUES
(16, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjg3NjczMTA5LCJleHAiOjE2ODc2NzY3MDl9.sSkgmEKURTFkxHwEAfVMzgtChzYSf-YP9MVtt75rIas', '2023-06-25 06:05:09', '2023-06-25 06:05:09', 0),
(17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjg3Njg2NDI1LCJleHAiOjE2ODc2OTAwMjV9.ueP_Nam0wuibUJedCq8caDrHZ3PXnQ09DH-8neb4pd4', '2023-06-25 09:47:05', '2023-06-25 09:47:05', 0),
(18, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjg3Njg2NTM3LCJleHAiOjE2ODc2OTAxMzd9.4FT7adFzqXiJEs1ZEZ0yqjSq2_n6e0u94REGPN9dxPg', '2023-06-25 09:48:57', '2023-06-25 09:48:57', 0),
(19, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjg3Njk3NDI0LCJleHAiOjE2ODc3MDEwMjR9.XEsrOrT1JRA9Bk6YrtNbpP_qEv52tesCTC5FEZhB-g4', '2023-06-25 12:50:24', '2023-06-25 12:50:24', 0),
(20, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjg3Njk3NjU1LCJleHAiOjE2ODc3MDEyNTV9.-AwKbELy3FG8RUqiQRK-MOi3yrvx8fuGHB9xPriTKFU', '2023-06-25 12:54:15', '2023-06-25 12:54:15', 0),
(21, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjg3NzAwNTcyLCJleHAiOjE2ODc3MDQxNzJ9.4HYnQfHjONgvpxZI3tEubOHJ1NN4zaPoDPoVG8PRpI8', '2023-06-25 13:42:52', '2023-06-25 13:42:52', 0),
(22, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjg3NzAxMjk3LCJleHAiOjE2ODc3MDQ4OTd9.eCL1_TlFoPH4OMO6dWCmDt9i0WTUQWqwHTX3lHjw_ZY', '2023-06-25 13:54:57', '2023-06-25 13:54:57', 0),
(23, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjg3NzEwMTIzLCJleHAiOjE2ODc3MTM3MjN9.UMqlDdF8Y1-pm7fqLOAthKhgzB-1WpaeNPOP1Ass88c', '2023-06-25 16:22:03', '2023-06-25 16:22:03', 0),
(24, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjg3NzEwODYzLCJleHAiOjE2ODc3MTQ0NjN9.yB3dL4iW2Cj28cbljUd83HK7lkbF9iaUUtKANItd5Vw', '2023-06-25 16:34:23', '2023-06-25 16:34:23', 0),
(25, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjg3NzM5NTkxLCJleHAiOjE2ODc3NDMxOTF9.rmQHaQhl8bGF0y8Ol7tWo5mydJ1KloJN_jOm1xR7HZo', '2023-06-26 00:33:11', '2023-06-26 00:33:11', 29),
(26, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJlbWFpbCI6ImhhbGxvQGdtYWlsLmNvbSIsImlhdCI6MTY4NzczOTkwMCwiZXhwIjoxNjg3NzQzNTAwfQ.2f3H9K9f-OzwMS2LjEk-9Ponthxxttyq54OkuF1VRZk', '2023-06-26 00:38:20', '2023-06-26 00:38:20', 28),
(27, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJlbWFpbCI6ImhhbGxvQGdtYWlsLmNvbSIsImlhdCI6MTY4Nzc0MDI0NywiZXhwIjoxNjg3NzQzODQ3fQ.lOBKQ-VPrx7d_GSPqo4b-oAjtSKT2SfDBzz7LnfpfRI', '2023-06-26 00:44:07', '2023-06-26 00:44:07', 28),
(28, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJlbWFpbCI6ImhhbGxvQGdtYWlsLmNvbSIsImlhdCI6MTY4Nzc0MDcwNCwiZXhwIjoxNjg3NzQ0MzA0fQ.HIbAJVDJJpBUW7J5gK7IH_3zZLBw3zrteafT7Mru9Ts', '2023-06-26 00:51:44', '2023-06-26 00:51:44', 28),
(29, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJlbWFpbCI6ImhhbGxvQGdtYWlsLmNvbSIsImlhdCI6MTY4Nzc0MTYyMiwiZXhwIjoxNjg3NzQ1MjIyfQ.fhb0XQf1r0uiy6XPeZ8O6F3SeypFtpwVfnqEcZOuboQ', '2023-06-26 01:07:02', '2023-06-26 01:07:02', 28),
(30, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJlbWFpbCI6ImhhbGxvQGdtYWlsLmNvbSIsImlhdCI6MTY4Nzc0MzE1MSwiZXhwIjoxNjg3NzQ2NzUxfQ.kwT_X6C2nXf-LiJMkPz9PqPz5jMIYns6-LQBs-yRTes', '2023-06-26 01:32:31', '2023-06-26 01:32:31', 28),
(31, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJlbWFpbCI6ImhhbGxvQGdtYWlsLmNvbSIsImlhdCI6MTY4Nzc0NDA2MCwiZXhwIjoxNjg3NzQ3NjYwfQ.-pNuuvEweQxqs81tEsMOJ6-SMotlzUcyD610LT_9OnY', '2023-06-26 01:47:40', '2023-06-26 01:47:40', 28),
(32, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJlbWFpbCI6ImhhbGxvQGdtYWlsLmNvbSIsImlhdCI6MTY4Nzc0NDI0NCwiZXhwIjoxNjg3NzQ3ODQ0fQ.DHo99Wuvgs1A_k3XW0TfJRNnbJE0zro_Kntw3GwuuLY', '2023-06-26 01:50:44', '2023-06-26 01:50:44', 28),
(33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJlbWFpbCI6IndpbmRhQGdtYWlsLmNvbSIsImlhdCI6MTY4Nzc0NzUwOSwiZXhwIjoxNjg3NzUxMTA5fQ.UjllhndGvF5M2jTfc0DkJ90s22cfGtNo4CXsqfrrCkc', '2023-06-26 02:45:09', '2023-06-26 02:45:09', 28),
(34, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJlbWFpbCI6IndpbmRhQGdtYWlsLmNvbSIsImlhdCI6MTY4Nzc2MzIxMSwiZXhwIjoxNjg3NzY2ODExfQ.SclNvsLWWeRPMtyh3kLSV4fPLqC9G4x0yxGvjndz9JY', '2023-06-26 07:06:51', '2023-06-26 07:06:51', 28),
(35, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJlbWFpbCI6IndpbmRhQGdtYWlsLmNvbSIsImlhdCI6MTY4Nzc2NDU5MCwiZXhwIjoxNjg3NzY4MTkwfQ.yAXJJlOnl_VpYt729CqkhCve2_J3GPPaLgf1MLx087M', '2023-06-26 07:29:50', '2023-06-26 07:29:50', 28),
(36, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJlbWFpbCI6IndpbmRhQGdtYWlsLmNvbSIsImlhdCI6MTY4Nzc2NDY1NCwiZXhwIjoxNjg3NzY4MjU0fQ.Y-guG7N1cg6_avnOVXPRp2pIRAT2TrM7wZkDmVTaAeY', '2023-06-26 07:30:54', '2023-06-26 07:30:54', 28);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(10) NOT NULL,
  `sign_img` varchar(999) NOT NULL,
  `active` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `sign_img`, `active`, `created_at`, `updated_at`) VALUES
(26, 'Aulia', 'aul123@gmail.com', 'aul123', 'C:\\fakepath\\1271092.jpg', 0, '2023-06-20 06:05:46', '2023-06-24 09:00:49'),
(27, 'hana', 'hana@gmail.com', '12345', 'C:\\fakepath\\1313819.jpg', 1, '2023-06-20 06:16:35', '2023-06-24 10:33:17'),
(28, 'hallo', 'winda@gmail.com', 'haihai', 'C:\\fakepath\\1313460.jpg', 1, '2023-06-26 01:51:38', '2023-06-26 01:51:38'),
(29, 'test', 'test@gmail.com', '12345', 'C:\\fakepath\\1313819.jpg', 1, '2023-06-22 04:30:12', '2023-06-22 04:32:42'),
(30, 'capek', 'capekbana@gmail.com', 'capek123', '', 1, '2023-06-22 10:59:00', '2023-06-22 10:59:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signature`
--
ALTER TABLE `signature`
  ADD PRIMARY KEY (`user_id`,`document_id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`document_id`),
  ADD KEY `document_id` (`document_id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `signature`
--
ALTER TABLE `signature`
  ADD CONSTRAINT `document_id` FOREIGN KEY (`document_id`) REFERENCES `documents` (`id`),
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

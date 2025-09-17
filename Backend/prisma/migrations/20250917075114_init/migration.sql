-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `lastLogin` DATETIME(3) NULL,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `lastUpdated` DATETIME(3) NULL,
    `googleId` VARCHAR(191) NULL,
    `expoPushToken` VARCHAR(191) NULL,

    UNIQUE INDEX `Client_email_key`(`email`),
    UNIQUE INDEX `Client_phoneNumber_key`(`phoneNumber`),
    UNIQUE INDEX `Client_googleId_key`(`googleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClientDevice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `deviceId` VARCHAR(191) NOT NULL,
    `deviceType` VARCHAR(191) NOT NULL,
    `expoPushToken` VARCHAR(191) NULL,
    `lastLogin` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `clientId` INTEGER NOT NULL,

    UNIQUE INDEX `ClientDevice_deviceId_clientId_key`(`deviceId`, `clientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activity` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `reservationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `id` VARCHAR(191) NOT NULL,
    `ReservationNumber` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `pickup` VARCHAR(191) NOT NULL,
    `dropoff` VARCHAR(191) NOT NULL,
    `distance` DOUBLE NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `paymentSessionId` VARCHAR(191) NULL,
    `paymentIntentId` VARCHAR(191) NULL,
    `paymentStatus` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `numberOfPassengers` INTEGER NOT NULL DEFAULT 1,
    `scheduledDateTime` DATETIME(3) NULL,
    `price` DOUBLE NOT NULL,
    `paymentUrl` TEXT NOT NULL,
    `paymentTransactionNumber` VARCHAR(191) NULL,
    `paymentConfirmedAt` DATETIME(3) NULL,
    `paymentMethod` VARCHAR(191) NULL,
    `riderType` VARCHAR(191) NULL,
    `otherRiderFirstName` VARCHAR(191) NULL,
    `otherRiderLastName` VARCHAR(191) NULL,
    `otherRiderEmail` VARCHAR(191) NULL,
    `otherRiderPhone` VARCHAR(191) NULL,
    `carCategoryId` INTEGER NULL,
    `driverId` INTEGER NULL,
    `driverEarningAmount` DOUBLE NULL,
    `abyrideEarningAmount` DOUBLE NULL,
    `Rating` VARCHAR(191) NOT NULL DEFAULT '0',
    `reservationStatus` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `cancellationReason` VARCHAR(191) NULL,
    `canceledAt` DATETIME(3) NULL,
    `rideCompletedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Reservation_ReservationNumber_key`(`ReservationNumber`),
    UNIQUE INDEX `Reservation_paymentSessionId_key`(`paymentSessionId`),
    UNIQUE INDEX `Reservation_paymentTransactionNumber_key`(`paymentTransactionNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `id` VARCHAR(191) NOT NULL,
    `names` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `isLocked` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Admin_names_key`(`names`),
    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Driver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL DEFAULT 0.0,
    `longitude` DOUBLE NOT NULL DEFAULT 0.0,
    `locationUpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateOfBirth` DATE NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `emergencyContactName` VARCHAR(191) NOT NULL,
    `emergencyContactNumber` VARCHAR(191) NOT NULL,
    `bankAccountNumber` VARCHAR(191) NOT NULL,
    `licenseId` VARCHAR(191) NOT NULL,
    `licenseExpiryDate` DATE NOT NULL,
    `yearsOfExperience` INTEGER NOT NULL,
    `languages` VARCHAR(191) NOT NULL,
    `previousEmployment` VARCHAR(191) NULL,
    `availabilityToStart` DATE NOT NULL,
    `licenseIssuedIn` VARCHAR(191) NULL,
    `nationalIdOrPassport` VARCHAR(191) NULL,
    `policeClearanceCertificate` VARCHAR(191) NULL,
    `proofOfAddress` VARCHAR(191) NULL,
    `drivingCertificate` VARCHAR(191) NULL,
    `workPermitOrVisa` VARCHAR(191) NULL,
    `drugTestReport` VARCHAR(191) NULL,
    `employmentReferenceLetter` VARCHAR(191) NULL,
    `Availability` VARCHAR(191) NULL DEFAULT 'Offline',
    `bankStatementFile` VARCHAR(191) NULL,
    `Status` VARCHAR(191) NOT NULL DEFAULT 'Pending',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expoPushToken` VARCHAR(191) NULL,
    `feeCategoryId` INTEGER NULL,
    `driverType` VARCHAR(191) NULL DEFAULT 'ON WAGE',
    `driverRatingCount` INTEGER NOT NULL DEFAULT 0,
    `googleId` VARCHAR(191) NOT NULL DEFAULT 'dskjdskjdsk',

    UNIQUE INDEX `Driver_phoneNumber_key`(`phoneNumber`),
    UNIQUE INDEX `Driver_email_key`(`email`),
    UNIQUE INDEX `Driver_licenseId_key`(`licenseId`),
    UNIQUE INDEX `Driver_googleId_key`(`googleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehicle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vinNumber` VARCHAR(191) NOT NULL,
    `make` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `plateNumber` VARCHAR(191) NULL,
    `color` VARCHAR(191) NOT NULL,
    `luggage` VARCHAR(191) NULL,
    `handluggage` VARCHAR(191) NULL,
    `category` VARCHAR(191) NULL DEFAULT 'Abyride X',
    `ownerId` INTEGER NOT NULL,
    `registrationState` VARCHAR(191) NULL,
    `registrationDate` DATETIME(3) NULL,
    `expiryDate` DATETIME(3) NULL,
    `insuranceNumber` VARCHAR(191) NULL,
    `insuranceCompany` VARCHAR(191) NULL,
    `insuranceExpiry` DATETIME(3) NULL,
    `numberOfDoors` VARCHAR(191) NULL,
    `seatingCapacity` VARCHAR(191) NULL,
    `exteriorPhoto1` VARCHAR(191) NULL,
    `exteriorPhoto2` VARCHAR(191) NULL,
    `exteriorPhoto3` VARCHAR(191) NULL,
    `exteriorPhoto4` VARCHAR(191) NULL,
    `interiorPhoto1` VARCHAR(191) NULL,
    `interiorPhoto2` VARCHAR(191) NULL,
    `interiorPhoto3` VARCHAR(191) NULL,
    `interiorPhoto4` VARCHAR(191) NULL,
    `serviceHistory` JSON NULL,
    `accidentHistory` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Vehicle_vinNumber_key`(`vinNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fare` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryId` INTEGER NOT NULL,
    `fromDay` VARCHAR(191) NOT NULL,
    `tillDay` VARCHAR(191) NOT NULL,
    `fromTime` VARCHAR(191) NOT NULL,
    `tillTime` VARCHAR(191) NOT NULL,
    `startRate` DOUBLE NOT NULL,
    `startRatePerMile` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FeeCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `bookingFee` DOUBLE NOT NULL,
    `feePerMile` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `FeeCategory_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContactMessage` (
    `id` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LostPropertyReport` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `bookingReference` VARCHAR(191) NULL,
    `itemCategory` VARCHAR(191) NOT NULL,
    `itemDescription` VARCHAR(191) NOT NULL,
    `approximateValue` VARCHAR(191) NULL,
    `lostLocation` VARCHAR(191) NULL,
    `preferredContact` VARCHAR(191) NOT NULL,
    `bestContactTime` VARCHAR(191) NULL,
    `additionalNotes` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Not found ',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `found_properties` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `bookingReference` VARCHAR(191) NULL,
    `approximateValue` VARCHAR(191) NULL,
    `reservationId` VARCHAR(191) NULL,
    `itemCategory` VARCHAR(191) NOT NULL,
    `itemDescription` VARCHAR(191) NOT NULL,
    `foundLocation` VARCHAR(191) NULL,
    `referredContact` VARCHAR(191) NULL,
    `bestContactTime` VARCHAR(191) NULL,
    `additionalNotes` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Found',
    `foundAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ride` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `driverId` INTEGER NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `pickupAddress` TEXT NOT NULL,
    `dropoffAddress` TEXT NOT NULL,
    `pickupLat` DECIMAL(10, 8) NOT NULL,
    `pickupLong` DECIMAL(11, 8) NOT NULL,
    `dropoffLat` DECIMAL(10, 8) NOT NULL,
    `dropoffLong` DECIMAL(11, 8) NOT NULL,
    `status` ENUM('PENDING', 'ACCEPTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `paymentStatus` ENUM('PENDING', 'PAID', 'FAILED', 'REFUNDED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `id` VARCHAR(191) NOT NULL,
    `bookingNumber` VARCHAR(191) NOT NULL,
    `clientId` INTEGER NOT NULL,
    `driverId` INTEGER NULL,
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `pickupAddress` TEXT NULL,
    `pickupNote` VARCHAR(191) NULL,
    `dropoffAddress` TEXT NULL,
    `dropoffNote` VARCHAR(191) NULL,
    `distance` DOUBLE NULL,
    `duration` VARCHAR(191) NULL,
    `date` DATETIME(3) NULL,
    `price` DECIMAL(10, 2) NULL,
    `extraCharge` DECIMAL(10, 2) NULL,
    `driverPackageCharge` DECIMAL(10, 2) NULL,
    `driverWaitingCharge` DECIMAL(10, 2) NULL,
    `driverEarningAmount` DECIMAL(10, 2) NULL,
    `abyrideEarningAmount` DECIMAL(10, 2) NULL,
    `luggageCount` INTEGER NULL DEFAULT 0,
    `waitingMin` VARCHAR(191) NULL,
    `rideCategory` VARCHAR(191) NULL,
    `paymentMethod` ENUM('CASH', 'CREDITCARD') NULL,
    `paymentStatus` ENUM('PENDING', 'PAID', 'FAILED', 'REFUNDED') NOT NULL DEFAULT 'PENDING',
    `paymentSessionId` VARCHAR(191) NULL,
    `paymentIntentId` VARCHAR(191) NULL,
    `paymentConfirmedAt` DATETIME(3) NULL,
    `bookingStatus` ENUM('PENDING', 'ACCEPTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED') NULL DEFAULT 'PENDING',
    `rating` VARCHAR(191) NULL DEFAULT '0',
    `canceledAt` DATETIME(3) NULL,
    `rideCompletedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Booking_bookingNumber_key`(`bookingNumber`),
    UNIQUE INDEX `Booking_paymentSessionId_key`(`paymentSessionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BookingReturn` (
    `id` VARCHAR(191) NOT NULL,
    `bookingId` VARCHAR(191) NOT NULL,
    `returnDate` DATETIME(3) NOT NULL,
    `pickupAddress` TEXT NOT NULL,
    `dropoffAddress` TEXT NOT NULL,
    `pickupNote` VARCHAR(191) NULL,
    `dropoffNote` VARCHAR(191) NULL,
    `distance` DOUBLE NULL,
    `duration` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `id` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(191) NULL,
    `lastname` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Employee_email_key`(`email`),
    UNIQUE INDEX `Employee_phoneNumber_key`(`phoneNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` VARCHAR(191) NOT NULL,
    `taskname` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Complaint` (
    `id` VARCHAR(191) NOT NULL,
    `customerName` VARCHAR(191) NULL,
    `rideId` VARCHAR(191) NULL,
    `complaintType` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'IN_REVIEW', 'RESOLVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `submittedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `resolvedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Location` (
    `location_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `created_by` VARCHAR(191) NULL,
    `is_favorite` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`location_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Member` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `expectedMonthlyRides` VARCHAR(191) NOT NULL,
    `ridePurposes` JSON NULL,
    `identityDocument` VARCHAR(191) NULL,
    `profileImage` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Member_email_key`(`email`),
    UNIQUE INDEX `Member_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoundProperties` (
    `id` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `itemDescription` VARCHAR(191) NOT NULL,
    `locationFound` VARCHAR(191) NOT NULL,
    `driverId` INTEGER NULL,
    `ownerId` VARCHAR(191) NULL,
    `returnerName` VARCHAR(191) NULL,
    `returnerEmail` VARCHAR(191) NULL,
    `returnerPhone` VARCHAR(191) NULL,
    `returnerDescription` VARCHAR(191) NULL,
    `status` ENUM('pending', 'returned', 'unclaimed') NOT NULL DEFAULT 'pending',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `FoundProperties_ownerId_key`(`ownerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Claimant` (
    `id` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `foundPropertyId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LostProperties` (
    `id` VARCHAR(191) NOT NULL,
    `bookingNumber` VARCHAR(191) NULL,
    `itemName` VARCHAR(191) NOT NULL,
    `claimantPhone` VARCHAR(191) NULL,
    `claimantEmail` VARCHAR(191) NULL,
    `itemDescription` VARCHAR(191) NOT NULL,
    `returnerName` VARCHAR(191) NULL,
    `returnerPhone` VARCHAR(191) NULL,
    `returnerEmail` VARCHAR(191) NULL,
    `returnerDescription` VARCHAR(191) NULL,
    `status` ENUM('lost', 'found') NOT NULL DEFAULT 'lost',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` VARCHAR(191) NOT NULL,
    `from` VARCHAR(191) NOT NULL,
    `to` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `direction` ENUM('SENT', 'RECEIVED') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Blog` (
    `id` VARCHAR(191) NOT NULL,
    `adminId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `blogImage` VARCHAR(191) NOT NULL,
    `quote` VARCHAR(191) NOT NULL,
    `content` VARCHAR(10000) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(1000) NOT NULL,
    `productImage` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `brand` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `processor` VARCHAR(191) NOT NULL,
    `ram` VARCHAR(191) NOT NULL,
    `storage` VARCHAR(191) NOT NULL,
    `graphicsCard` VARCHAR(191) NOT NULL,
    `resolution` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EmployeeTasks` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_EmployeeTasks_AB_unique`(`A`, `B`),
    INDEX `_EmployeeTasks_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ClientDevice` ADD CONSTRAINT `ClientDevice_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_reservationId_fkey` FOREIGN KEY (`reservationId`) REFERENCES `Reservation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_carCategoryId_fkey` FOREIGN KEY (`carCategoryId`) REFERENCES `FeeCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_feeCategoryId_fkey` FOREIGN KEY (`feeCategoryId`) REFERENCES `FeeCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fare` ADD CONSTRAINT `Fare_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ride` ADD CONSTRAINT `Ride_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ride` ADD CONSTRAINT `Ride_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookingReturn` ADD CONSTRAINT `BookingReturn_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoundProperties` ADD CONSTRAINT `FoundProperties_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoundProperties` ADD CONSTRAINT `FoundProperties_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Claimant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Claimant` ADD CONSTRAINT `Claimant_foundPropertyId_fkey` FOREIGN KEY (`foundPropertyId`) REFERENCES `FoundProperties`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LostProperties` ADD CONSTRAINT `LostProperties_bookingNumber_fkey` FOREIGN KEY (`bookingNumber`) REFERENCES `Booking`(`bookingNumber`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Blog` ADD CONSTRAINT `Blog_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeeTasks` ADD CONSTRAINT `_EmployeeTasks_A_fkey` FOREIGN KEY (`A`) REFERENCES `Employee`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeeTasks` ADD CONSTRAINT `_EmployeeTasks_B_fkey` FOREIGN KEY (`B`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

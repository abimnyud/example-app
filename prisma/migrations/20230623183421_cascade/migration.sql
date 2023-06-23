-- DropForeignKey
ALTER TABLE `markedevent` DROP FOREIGN KEY `MarkedEvent_eventId_fkey`;

-- AddForeignKey
ALTER TABLE `MarkedEvent` ADD CONSTRAINT `MarkedEvent_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

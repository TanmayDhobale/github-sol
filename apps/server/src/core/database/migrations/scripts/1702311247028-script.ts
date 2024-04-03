import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('0541cb60-b8ea-4e4c-9898-e22793aad3a2', '7Juliana_Graham@gmail.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=9', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8fc84b93-fbdd-477f-9f93-41b711be18b2', '13Vance.Beahan@yahoo.com', 'Bob', 'https://i.imgur.com/YfJQV5z.png?id=15', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('4ed6dca0-57bc-461c-95b4-dbdac100c261', '19Rodger57@hotmail.com', 'Bob', 'https://i.imgur.com/YfJQV5z.png?id=21', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('51bd2c74-edf4-4752-9238-9cb6a989d8df', '25Jacinthe.Hahn@hotmail.com', 'Charlie', 'https://i.imgur.com/YfJQV5z.png?id=27', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('f2ca0587-327b-459b-9d61-d167a9f9109e', '31Gregorio.OConner@gmail.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=33', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('3dba0cca-1070-4b54-9d99-4f21aa4af170', '37Easter.Lynch73@gmail.com', 'Dana', 'https://i.imgur.com/YfJQV5z.png?id=39', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('42224fca-83d7-48cc-a41c-32898815373d', '43Sonia_West@hotmail.com', 'Charlie', 'https://i.imgur.com/YfJQV5z.png?id=45', 'closed', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('83b2d72c-e5e0-4524-baa1-e338486a1893', '49Napoleon_Dooley@yahoo.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=51', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('7c82d3f7-d6d8-4d4e-a82f-bb4c4370a64b', '55Vilma_Trantow@yahoo.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=57', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('88d752d5-aced-4b4a-ada2-d72b92ab85fd', 'Claim Submission Reminder', 'Reminder You have an unsubmitted claim for a bounty. Please submit before the deadline.', 'BountyManager', '64Glenda.Casper@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '4ed6dca0-57bc-461c-95b4-dbdac100c261');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('363e2114-dad5-4943-8288-a28db0380d32', 'Bounty Payment Processed', 'Your bounty status has been updated. Please check your dashboard.', 'IssueTracker', '71Della.Bauch@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('39409844-70fc-40da-bfad-2b77278029d5', 'Bounty Status Update', 'A new bounty worth 500 is available for claiming.', 'BountyManager', '78Sammy_Schumm@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '3dba0cca-1070-4b54-9d99-4f21aa4af170');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e76daff1-d1e8-48ae-8db4-55d892d080c8', 'Bounty Status Update', 'A new bounty worth 500 is available for claiming.', 'BountyManager', '85Arlene19@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '51bd2c74-edf4-4752-9238-9cb6a989d8df');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1e6c0fb1-2f96-4b21-91b8-72f6b7ade36e', 'Claim Submission Reminder', 'Your bounty status has been updated. Please check your dashboard.', 'BountyBot', '92Hyman_Hane@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('beb14506-431a-4acf-8403-61bbd2a4c9fb', 'Bounty Claimed', 'Your payment for the recent bounty has been processed.', 'PaymentProcessor', '99Wyatt.Veum78@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '51bd2c74-edf4-4752-9238-9cb6a989d8df');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('460297b4-d44d-4109-9dfd-7f3df4d521c0', 'Claim Submission Reminder', 'Your bounty has been successfully claimed.', 'IssueTracker', '106Dennis.Hackett-Botsford99@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8f562ebe-166a-4620-8666-1dc93e2a80b8', 'New Bounty Available', 'Your bounty status has been updated. Please check your dashboard.', 'BountyBot', '113Alexa.Sanford54@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '4ed6dca0-57bc-461c-95b4-dbdac100c261');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5aedd58c-870d-4ce4-b623-16f154159fca', 'New Bounty Available', 'Your payment for the recent bounty has been processed.', 'IssueTracker', '120Clair65@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '3dba0cca-1070-4b54-9d99-4f21aa4af170');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7f11c57c-17aa-4370-b69e-f28f37397350', 'Bounty Payment Processed', 'Reminder You have an unsubmitted claim for a bounty. Please submit before the deadline.', 'ReminderService', '127Jovany_Fay@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '4ed6dca0-57bc-461c-95b4-dbdac100c261');

INSERT INTO "issue" ("id", "title", "description", "status", "bountyAmount") VALUES ('04201347-f91e-4f60-a9ab-cb38448a90ff', 'Optimize database queries', 'The login function fails under certain conditions.', 'closed', 123);
INSERT INTO "issue" ("id", "title", "description", "status", "bountyAmount") VALUES ('aabf4f9d-be61-4503-bec3-53101e0d5555', 'Fix login bug', 'The login function fails under certain conditions.', 'merged', 892);
INSERT INTO "issue" ("id", "title", "description", "status", "bountyAmount") VALUES ('ac64c58d-54ff-4cc4-a417-222f03ff096d', 'Implement dark mode', 'A dark mode option should be available for users who prefer it.', 'closed', 770);
INSERT INTO "issue" ("id", "title", "description", "status", "bountyAmount") VALUES ('021c75d7-c08f-42fa-8327-2b432b54013f', 'Implement dark mode', 'The login function fails under certain conditions.', 'in progress', 36);
INSERT INTO "issue" ("id", "title", "description", "status", "bountyAmount") VALUES ('da97b941-e49e-40ee-a9c0-16cade6ca735', 'Fix login bug', 'Users should be able to add a profile picture and a short bio.', 'closed', 898);
INSERT INTO "issue" ("id", "title", "description", "status", "bountyAmount") VALUES ('5078e576-00ca-427f-87e4-4828bf009543', 'Fix login bug', 'The login function fails under certain conditions.', 'in progress', 178);
INSERT INTO "issue" ("id", "title", "description", "status", "bountyAmount") VALUES ('f04db83f-c6d9-4f2a-9948-f1a0d7cfc30b', 'Optimize database queries', 'The login function fails under certain conditions.', 'review', 131);
INSERT INTO "issue" ("id", "title", "description", "status", "bountyAmount") VALUES ('020ac93e-9bb4-4991-96c4-a8b42ee250d7', 'Optimize database queries', 'Users should be able to add a profile picture and a short bio.', 'review', 301);
INSERT INTO "issue" ("id", "title", "description", "status", "bountyAmount") VALUES ('d1dfbf44-4b54-485d-a925-e031de9989c4', 'Add new user profile feature', 'The README lacks information on how to set up the project locally.', 'open', 635);
INSERT INTO "issue" ("id", "title", "description", "status", "bountyAmount") VALUES ('279f70ca-128c-4071-a6bb-0d8d24e483ae', 'Add new user profile feature', 'The README lacks information on how to set up the project locally.', 'in progress', 163);

INSERT INTO "bounty" ("id", "status", "claimDate", "issueId") VALUES ('505ec475-6bf5-4860-b5b9-ad146212be25', 'In Review', '2024-11-27T07:09:48.796Z', '04201347-f91e-4f60-a9ab-cb38448a90ff');
INSERT INTO "bounty" ("id", "status", "claimDate", "issueId") VALUES ('9ac8cb9b-ef50-48fa-baf9-6e5e490b2202', 'Closed', '2024-05-03T22:07:10.777Z', '279f70ca-128c-4071-a6bb-0d8d24e483ae');
INSERT INTO "bounty" ("id", "status", "claimDate", "issueId") VALUES ('0df81bab-a9ee-4919-b6aa-babffc44bf21', 'Closed', '2024-08-22T16:08:07.528Z', '279f70ca-128c-4071-a6bb-0d8d24e483ae');
INSERT INTO "bounty" ("id", "status", "claimDate", "issueId") VALUES ('af55a296-8edb-421b-809b-9ac72b31ba9b', 'Open', '2023-06-27T03:01:52.443Z', 'f04db83f-c6d9-4f2a-9948-f1a0d7cfc30b');
INSERT INTO "bounty" ("id", "status", "claimDate", "issueId") VALUES ('13c248f0-fb8c-4201-b605-27e60063db04', 'In Review', '2024-11-09T05:33:47.529Z', '020ac93e-9bb4-4991-96c4-a8b42ee250d7');
INSERT INTO "bounty" ("id", "status", "claimDate", "issueId") VALUES ('c4e382ce-f952-4237-9bc4-3777c363c4c2', 'Pending', '2024-04-22T13:54:15.501Z', '020ac93e-9bb4-4991-96c4-a8b42ee250d7');
INSERT INTO "bounty" ("id", "status", "claimDate", "issueId") VALUES ('8b6c294a-c861-4055-9ec5-356baaa1d090', 'Open', '2023-06-02T04:14:15.238Z', 'aabf4f9d-be61-4503-bec3-53101e0d5555');
INSERT INTO "bounty" ("id", "status", "claimDate", "issueId") VALUES ('9d586954-bf2a-4778-a0d0-0f25f811176f', 'In Review', '2024-01-07T05:43:59.268Z', '021c75d7-c08f-42fa-8327-2b432b54013f');
INSERT INTO "bounty" ("id", "status", "claimDate", "issueId") VALUES ('5535c4e2-5dd6-45f4-95c5-84f2013e8465', 'Closed', '2023-08-07T01:36:01.815Z', '279f70ca-128c-4071-a6bb-0d8d24e483ae');
INSERT INTO "bounty" ("id", "status", "claimDate", "issueId") VALUES ('3e9aaa6f-ea59-4595-b957-36d11b73bc55', 'Pending', '2024-04-25T09:03:51.513Z', 'ac64c58d-54ff-4cc4-a417-222f03ff096d');

INSERT INTO "wallet" ("id", "solanaAddress", "userId") VALUES ('2008bc3a-e1eb-4d63-9212-5f16f7585ef9', '211 136 E 13th St, New York, NY 10003', '4ed6dca0-57bc-461c-95b4-dbdac100c261');
INSERT INTO "wallet" ("id", "solanaAddress", "userId") VALUES ('4077a3db-a9fe-485e-9150-35e081cd2e0c', '213 18 Spring St, New York, NY 10012', '83b2d72c-e5e0-4524-baa1-e338486a1893');
INSERT INTO "wallet" ("id", "solanaAddress", "userId") VALUES ('55dbbfe4-6025-4b02-b278-7c32c42e72c7', '215 42 E 20th St, New York, NY 10003', '4ed6dca0-57bc-461c-95b4-dbdac100c261');
INSERT INTO "wallet" ("id", "solanaAddress", "userId") VALUES ('e9a275b0-fad6-4c05-9e01-030ff3458ddf', '217 136 E 13th St, New York, NY 10003', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "wallet" ("id", "solanaAddress", "userId") VALUES ('321bd8f9-a84a-41c6-ae13-f64a21581bde', '219 18 Spring St, New York, NY 10012', '8fc84b93-fbdd-477f-9f93-41b711be18b2');
INSERT INTO "wallet" ("id", "solanaAddress", "userId") VALUES ('1bc6b26b-37ae-4667-8ffe-4b86304f0b0e', '221 430 Lafayette St, New York, NY 10003', '42224fca-83d7-48cc-a41c-32898815373d');
INSERT INTO "wallet" ("id", "solanaAddress", "userId") VALUES ('28230a33-70b0-44b6-b4dd-fc1ebc334dad', '223 443 E 6th St, New York, NY 10009', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "wallet" ("id", "solanaAddress", "userId") VALUES ('0a6f344b-7750-4578-84ac-6b06aa076a30', '225 91 Christopher St, New York, NY 10014', '8fc84b93-fbdd-477f-9f93-41b711be18b2');
INSERT INTO "wallet" ("id", "solanaAddress", "userId") VALUES ('51c31d37-6903-492a-96d9-b8e3e240da48', '227 443 E 6th St, New York, NY 10009', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "wallet" ("id", "solanaAddress", "userId") VALUES ('1e413c74-4208-44a0-bd7d-a6fd9467d898', '229 18 W 29th St, New York, NY 10001', '51bd2c74-edf4-4752-9238-9cb6a989d8df');

INSERT INTO "claim" ("id", "status", "userId", "bountyId", "walletId") VALUES ('5bd00d2b-c7b2-450e-98d7-0305e17bad4b', 'rejected', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '9ac8cb9b-ef50-48fa-baf9-6e5e490b2202', '1e413c74-4208-44a0-bd7d-a6fd9467d898');
INSERT INTO "claim" ("id", "status", "userId", "bountyId", "walletId") VALUES ('7f3db022-c4ed-49f6-91ad-37ac726b79cc', 'cancelled', '7c82d3f7-d6d8-4d4e-a82f-bb4c4370a64b', '13c248f0-fb8c-4201-b605-27e60063db04', '1e413c74-4208-44a0-bd7d-a6fd9467d898');
INSERT INTO "claim" ("id", "status", "userId", "bountyId", "walletId") VALUES ('de9e2148-eef4-482a-904a-646b712574c0', 'rejected', '83b2d72c-e5e0-4524-baa1-e338486a1893', '9ac8cb9b-ef50-48fa-baf9-6e5e490b2202', '0a6f344b-7750-4578-84ac-6b06aa076a30');
INSERT INTO "claim" ("id", "status", "userId", "bountyId", "walletId") VALUES ('15e15c3d-09a0-4bb0-825c-5259531a8d4b', 'under review', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '8b6c294a-c861-4055-9ec5-356baaa1d090', '28230a33-70b0-44b6-b4dd-fc1ebc334dad');
INSERT INTO "claim" ("id", "status", "userId", "bountyId", "walletId") VALUES ('73aeda76-5640-4ef3-ae61-bfceea4f3935', 'cancelled', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '9ac8cb9b-ef50-48fa-baf9-6e5e490b2202', '1e413c74-4208-44a0-bd7d-a6fd9467d898');
INSERT INTO "claim" ("id", "status", "userId", "bountyId", "walletId") VALUES ('1fbf26b0-4ecb-4064-b7db-0d6146b2fa6b', 'under review', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '13c248f0-fb8c-4201-b605-27e60063db04', '51c31d37-6903-492a-96d9-b8e3e240da48');
INSERT INTO "claim" ("id", "status", "userId", "bountyId", "walletId") VALUES ('31a50947-5b7b-4811-94a2-9491ef51dbaf', 'cancelled', '42224fca-83d7-48cc-a41c-32898815373d', '13c248f0-fb8c-4201-b605-27e60063db04', '1e413c74-4208-44a0-bd7d-a6fd9467d898');
INSERT INTO "claim" ("id", "status", "userId", "bountyId", "walletId") VALUES ('c5299f84-d45e-4e2b-bb7d-6589e4542f43', 'rejected', '7c82d3f7-d6d8-4d4e-a82f-bb4c4370a64b', '13c248f0-fb8c-4201-b605-27e60063db04', '0a6f344b-7750-4578-84ac-6b06aa076a30');
INSERT INTO "claim" ("id", "status", "userId", "bountyId", "walletId") VALUES ('35f18331-ec3d-47db-a97d-33c32675ec37', 'rejected', '83b2d72c-e5e0-4524-baa1-e338486a1893', '8b6c294a-c861-4055-9ec5-356baaa1d090', '28230a33-70b0-44b6-b4dd-fc1ebc334dad');
INSERT INTO "claim" ("id", "status", "userId", "bountyId", "walletId") VALUES ('b0dac269-aa28-4d70-86a4-250a89e9f26b', 'pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5535c4e2-5dd6-45f4-95c5-84f2013e8465', '0a6f344b-7750-4578-84ac-6b06aa076a30');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

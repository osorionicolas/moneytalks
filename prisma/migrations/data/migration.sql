INSERT INTO "User"
(id, "name", email, "emailVerified", image)
VALUES('clqzqm5tz0003dk2kggy98lwc', '', 'osorionicolas95@gmail.com', CURRENT_DATE, '');

INSERT INTO "Group"
(id, "name", image, whiteboard, cover, "created_at", "group_type")
VALUES('clqzv6xty000308l1b2cwhf4e', 'Group 1', '', '', '', CURRENT_DATE, 'Home');

INSERT INTO "Expense"
(id, description, "comments", category, "created_at", "updated_at", "cost", currency, "group_id", "created_by", "updated_by")
VALUES('clqzv6od8000108l17bci3pp9', 'Test Expense', '', 'Market', CURRENT_DATE, CURRENT_DATE, 0, 'USD', 'clqzv6xty000308l1b2cwhf4e', 'clqzqm5tz0003dk2kggy98lwc', 'clqzqm5tz0003dk2kggy98lwc');

INSERT INTO public."GroupMembers"
("group_id", "member_id")
VALUES('clqzv6xty000308l1b2cwhf4e', 'clqzqm5tz0003dk2kggy98lwc');

INSERT INTO public."Notification"
(id, "content", "created_at", "created_by", image)
VALUES('clqzw0a34000108ldgtzdbvu2', 'Test Notification', CURRENT_DATE, 'clqzqm5tz0003dk2kggy98lwc', '');

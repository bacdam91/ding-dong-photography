USE DINGDONGPHOTOGRAPHY;

INSERT INTO EVENT_STATUS VALUES ("PEND", "PENDING");
INSERT INTO EVENT_STATUS VALUES ("CONF", "CONFIRMED");
INSERT INTO EVENT_STATUS VALUES ("CNCL", "CANCELLED");
INSERT INTO EVENT_STATUS VALUES ("RSCH", "RESCHEDULED");
INSERT INTO EVENT_STATUS VALUES ("COMP", "COMPLETED");

SELECT * FROM EVENT_STATUS;
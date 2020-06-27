
 CREATE TABLE `app_user` (  
`user_id` int (11) AUTO_INCREMENT,  
`user_mail` varchar (200) DEFAULT NULL,  
`user_status` int DEFAULT 0,  
PRIMARY KEY (`user_id`)
);



INSERT INTO app_user(user_mail, user_status)VALUES 
('mortega@apgca.cl', 0),
('angel.Jperez@gmail.com', 0),
('luis.andres.z71@gmail.com', 0);

SELECT * from app_user;


INSERT INTO app_user(user_mail,user_status) VALUES ('lal@lala.cl',0)


UPDATE app_user SET user_mail = 'lilo@lilo.cl', user_status = 5, WHERE user_id = 2

UPDATE app_user SET user_mail='lilo@lilo.cl', user_status=6 WHERE user_id=2


DELETE FROM app_user WHERE user_id=7
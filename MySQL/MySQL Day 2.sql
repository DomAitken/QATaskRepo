CREATE database schooltask;
USE schooltask;

CREATE Table students(
student_id int NOT NULL AUTO_INCREMENT,
first_name varchar(50) NOT NULL,
surname varchar(50) NOT NULL,
age int NOT NULL,
PRIMARY KEY(student_id)
);

CREATE Table classes(
class_id int NOT NULL AUTO_INCREMENT,
class_name varchar(50) NOT NULL,
class_desc varchar(200) NOT NULL,
class_level int NOT NULL,
PRIMARY KEY(class_id)
);

Create Table enrolments(
enrolment_id int NOT NULL AUTO_INCREMENT,
student_id int NOT NULL,
class_id int NOT NULL,
PRIMARY KEY (enrolment_id),
FOREIGN KEY (student_id) REFERENCES students(student_id),
FOREIGN KEY (class_id) REFERENCES classes(class_id)
);

SELECT*FROM students;

INSERT into students(first_name, surname, age) VALUES ('Dom', 'Aitken', '18');
INSERT into students(first_name, surname, age) VALUES ('Matt', 'Aitken', '22');
INSERT into students(first_name, surname, age) VALUES ('Eve', 'Aitken', '15');
INSERT into students(first_name, surname, age) VALUES ('Jimothy', 'Halpert', '32');
INSERT into students(first_name, surname, age) VALUES ('Michael', 'Scott', '48');

SELECT*FROM classes;

INSERT into classes(class_name, class_desc, class_level) VALUES ('History', 'Ancient Egypt', '1');
INSERT into classes(class_name, class_desc, class_level) VALUES ('Spanish', 'Verb Endings', '2');
INSERT into classes(class_name, class_desc, class_level) VALUES ('Computer Science', 'SQL', '3');
INSERT into classes(class_name, class_desc, class_level) VALUES ('Biology', 'Chickens', '1');
INSERT into classes(class_name, class_desc, class_level) VALUES ('Physics', 'The Theory of Relativity', '3');

SHOW Tables;

SELECT*FROM enrolments;

INSERT into enrolments(enrolment_id, class_id, student_id) VALUES ()




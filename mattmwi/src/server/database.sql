DROP Table card;

CREATE TABLE Card(  
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    content VARCHAR(1000),
    img VARCHAR(300),
    create_time DATE,
    update_time DATE
    );

INSERT INTO card (title,content,create_time,update_time, img)
VALUES
    ('10\/4','Integer accumsan molestie nisl, id faucibus urna accumsan quis. Proin vulputate, mauris semper maximus.',NOW(),NOW(),'E:/Matt Software Engineering/MattMWI/MattMWI/mattmwi/src/assets/Rabbit.png'),
    ('Sweet Tators','Morbi eget magna nunc. Aenean tristique justo enim bibendum egestas. Integer accumsan imperdiet purus.',NOW(),NOW(),'E:/Matt Software Engineering/MattMWI/MattMWI/mattmwi/src/assets/Shield.png'),
    ('Dagnabbit','Aliquam erat volutpat. Aenean ultrices in odio id tempor. Phasellus placerat eros ac vestibulum.',NOW(),NOW(),'E:/Matt Software Engineering/MattMWI/MattMWI/mattmwi/src/assets/Talkie.png')

CREATE TABLE Contact(  
    id SERIAL PRIMARY KEY,
    firstname varchar(50),
    lastname varchar(50),
    email varchar(100),
    title VARCHAR(10),
    message VARCHAR(1000),
    create_time timestamp
    );
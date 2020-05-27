CREATE DATABASE IF NOT EXISTS `datos_proyecto`;
USE `datos_proyecto`;
CREATE TABLE  `usuarios` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
	`fecha_de_nacimiento` DATETIME NOT NULL DEFAULT 
    current_timestamp() ON UPDATE
     current_timestamp(),
     PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE  `resenias` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`id_pelicula` INT(10) DEFAULT NULL,
    `id_usuario` INT(10) UNSIGNED DEFAULT NULL,
    `resenia_texto` VARCHAR(255) DEFAULT NULL,
    `fecha_de_creacion` TIMESTAMP NOT NULL DEFAULT
    current_timestamp() ON UPDATE
    current_timestamp(),
    `fecha_de_actualizacion` TIMESTAMP NOT NULL DEFAULT
    current_timestamp() ON UPDATE
    current_timestamp(),
    `rating` DECIMAL(3,1) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `id_usuario` (`id_usuario`),
    FOREIGN KEY (`id_usuario`)
    REFERENCES `usuarios` (`id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `usuarios` (`nombre`, `email`, `password`, `fecha_de_nacimiento`)
VALUES
('Bautista', 'bautista@gmail.com', 'hola123', '2001-05-25' ),
('Tomas', 'tomas@gmail.com', 'tomas1234', '2000-12-11' ),
('Catalina', 'catalina@gmail.com', 'cata456', '1999-03-03' ),
('Cristian', 'cristian@gmail.com', 'cristian123', '2000-02-02' ),
('Hernan', 'hernan@gmail.com', 'hernan123', '2001-09-15' );

INSERT INTO `resenias` (`id_pelicula`, `id_usuario`, `resenia_texto`, `fecha_de_creacion`, `rating`)
VALUES
(338762, 1, 'Muy buena, vale la pena verla!', '2001-05-24', 9 ),

(385103, 1, 'Muy mala, no la recomiendo!', '2008-07-28', 3 ),

(618344, 1, 'Bastante buena, recomiendo que la vean con su pareja.', '2000-02-20', 8 ),

(454626, 1, 'Buenisima, espero que les guste cómo a mi.', '2018-08-15', 9 ),

(330457, 1, 'Tremenda pelicula, les recomiendo que la vean con sus viejos.', '2020-07-14', 10 ),

(570670, 2, 'No me gusto porque es muy fuerte, pero en sí la película está buena.', '1989-01-28', 5.5 ),

(495764, 2, 'Te entretiene pero no es de las mejores que vi.', '2001-05-24', 7 ),

(508439, 2, ' Me gusto bastante ya que es muy real.', '1999-07-29', 6.8 ),

(530915, 2, 'Malisima, muy larga y densa. ', '2010-09-04', 2 ),

(652, 2, ' Dentro de todo está buena, hay mejores pero esta se defiende.', '2011-12-11', 4.5 ),

(508439, 3, 'Está buena, la vi con mi pareja y nos gusto a ambos: tiene un final abierto.', '2003-01-12', 7 ),

(539537, 3, ' No me encanto pero me gusto. arranca rara y después mejora.', '2007-05-24', 6.5),

(514847, 3, 'De las mejores peliculas que vi, la recomiendo profundamente. :)', '2017-09-17', 9.5 ),

(698320, 3, 'Excelente pelicula para ver un dia de lluvia y con tus hermanos. La película te deja una enseñanza de vida familiar. ', '2010-09-15', 10 ),

(424694, 3, 'De las peores peliculas que vi en mi vida. Horrible. ', '2010-05-24' , 2 ),

(181812, 4, 'La película está bien. Las escenas de acción son espectaculares
y visualmente sorprendentes.', '2020-01-10' , 7.5 ),

( 338762, 4, 'Nefasta! La historia es pésima, no te atrapa ni por casualidad.', '2020-03-10', 2 ),

(299536, 4, 'Avengers Infinity war es la mejor película del universo cinematográfico
de Marvel hasta ahora.', '2018-05-04', 9.5 ),

(383498, 4, 'Divertida, violenta, y fascinante, son las palabras que utilizó
para describir esta película.', '2018-06-20', 8.5),

(335983, 4, 'Venom es una película decente. Buena acción, buenas
actuaciones, y una historia simple de seguir. ', '2019-05-24', 6 ),

(315635, 5, 'Spiderman: Homecoming es una gran introducción de Spidey al
Universo Cinematográfico de Marvel.', '2017-09-17', 9 ),

(271110, 5, 'los hermanos russo nos entregan,
nuevamente, una gran película del Capitán América.', '2016-06-06', 9 ),

(299534, 5, 'Aunque la presencia de hoyos argumentales es notable, el foco
que se le hace a los Avengers originales es nostálgico y, sin duda emocionante.', '2019-04-27', 9.2 ),

(299534, 5, 'Después de ver esta película, puedo decir que, Tom Holland es el
mejor Spiderman hasta la fecha.', '2019-11-07',8.9 ),

(320288, 5, 'Lamentablemente los X-Men se van de Fox en una nota muy baja.', ' 2019-10-19', 5 );
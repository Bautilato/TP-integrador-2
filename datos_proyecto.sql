CREATE DATABASE IF NOT EXISTS `datos_proyecto`;
USE `datos_proyecto`;
CREATE TABLE  `usuarios` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) DEFAULT NULL,
    `password` VARCHAR(255) DEFAULT NULL,
	`fecha_de_nacimiento` timestamp NOT NULL DEFAULT 
    current_timestamp() ON UPDATE
     current_timestamp(),
     PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
;

CREATE TABLE  `resenias` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`id_pelicula` INT(10) DEFAULT NULL,
    `id_usuario` INT(10) UNSIGNED DEFAULT NULL,
    `resenia_texto` VARCHAR(255) DEFAULT NULL,
    `fecha_de_creacion` timestamp NOT NULL DEFAULT
    current_timestamp() ON UPDATE
    current_timestamp(),
    `fecha_de_actualizacion` timestamp NOT NULL DEFAULT
    current_timestamp() ON UPDATE
    current_timestamp(),
    `rating` DECIMAL(3,1) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `id_usuario` (`id_usuario`),
    CONSTRAINT 'resenias_ibfk_1'
    FOREIGN KEY (`id_usuario`)
    REFERENCES `usuarios` (`id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT TO `usuarios` (`nombre`, `email`, `password`, `fecha_de_nacimiento `)
VALUES
('Bautista', 'bautista@gmail.com', 'hola123', '21/05/2001' );
('Tomas', 'tomas@gmail.com', 'tomas1234', '11/12/2000' );
('Catalina', 'catalina@gmail.com', 'cata456', '07/10/1999' );
('Cristian', 'cristian@gmail.com', 'cristian123', '02/02/2000' );
('Hernan', 'hernan@gmail.com', 'hernan123', '15/09/2001' );

INSERT INTO `resenias` (`id_pelicula`, `id_usuario`, `resenia_texto`, `fecha_de_creacion`, `fecha_de_actualizacion`,`rating`)
VALUES
(338762, 1, 'Muy buena, vale la pena verla!', '24/05/2001','-', 9 );

(385103, 1, 'Muy mala, no la recomiendo!', '27/07/2008','-', 3 );

(618344, 1, 'Bastante buena, recomiendo que la vean con su pareja.', '20/02/2000','-', 8 );

(454626, 1, 'Buenisima, espero que les guste cómo a mi.', '15/08/2018','24/06/2020', 9 );

(330457, 1, 'Tremenda pelicula, les recomiendo que la vean con sus viejos.', '14/07/2020','-', 10 );

(570670, 2, 'No me gusto porque es muy fuerte, pero en sí la película está buena.', '24/01/1989','-', 5.5 );

(495764, 2, 'Te entretiene pero no es de las mejores que vi.', '24/05/2001','20/06/2010', 7 );

(508439, 2, ' Me gusto bastante ya que es muy real.', '29/07/1999','-', 6.8 );

(530915, 2, 'Malisima, muy larga y densa. ', '04/09/2010','-', 2 );

(652, 2, ' Dentro de todo está buena, hay mejores pero esta se defiende.', '11/12/2011','27/21/2019', 4.5 );

(508439, 3, 'Está buena, la vi con mi pareja y nos gusto a ambos: tiene un final abierto.', '12/01/2003','-', 7 );

(539537, 3, ' No me encanto pero me gusto. arranca rara y después mejora.', '24/05/2007','-', 6.5);

(514847, 3, 'De las mejores peliculas que vi, la recomiendo profundamente. :)', '19/09/2007','-', 9.5 );

(698320, 3, 'Excelente pelicula para ver un dia de lluvia y con tus hermanos. La película te deja una enseñanza de vida familiar. ', '15/09/2010','14/07/2018', 10 );

(424694, 3, 'De las peores peliculas que vi en mi vida. Horrible. ', '24/05/2010','-', 2 );

(181812, 4, 'La película está bien. Las escenas de acción son espectaculares
y visualmente sorprendentes.', '10/01/2020','-', 7.5 );

( 338762, 4, 'Nefasta! La historia es pésima, no te atrapa ni por casualidad.', '10/03/2020','-', 2 );

(299536, 4, 'Avengers Infinity war es la mejor película del universo cinematográfico
de Marvel hasta ahora.', '04/05/2018','-', 9.5 );

(383498, 4, 'Divertida, violenta, y fascinante, son las palabras que utilizó
para describir esta película.', '20/06/2018','-', 8.5);

(335983, 4, 'Venom es una película decente. Buena acción, buenas
actuaciones, y una historia simple de seguir. ', '24/05/2019','-', 6 );

(315635, 5, 'Spiderman: Homecoming es una gran introducción de Spidey al
Universo Cinematográfico de Marvel.', '09/05/2017','-', 9 );

(271110, 5, 'los hermanos russo nos entregan,
nuevamente, una gran película del Capitán América.', '06/06/16','-', 9 );

(299534, 5, 'Aunque la presencia de hoyos argumentales es notable, el foco
que se le hace a los Avengers originales es nostálgico y, sin duda emocionante.', '27/04/19','05/05/19', 9.2 );

(299534, 5, 'Después de ver esta película, puedo decir que, Tom Holland es el
mejor Spiderman hasta la fecha.', '07/11/19','-', 8.9 );

(320288, 5, 'Lamentablemente los X-Men se van de Fox en una nota muy baja.', ' 10/09/19','19/11/19', 5 );
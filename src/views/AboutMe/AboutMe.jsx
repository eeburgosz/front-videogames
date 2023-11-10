import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import style from "./aboutMe.module.css";

export const AbaoutMe = () => {
	const [lang, setLang] = useState(false);
	const handleChangeLang = () => {
		setLang(!lang);
	};

	return (
		<div className={style.container}>
			<div className={`card ${style.subcontainer}`}>
				<Fieldset
					legend={!lang ? "Un poco sobre mi..." : "A little bit about me..."}
					toggleable
				>
					{!lang ? (
						<p className="m-0">
							Soy un ingeniero en electrónica con una trayectoria destacada como
							Project Manager en una empresa de telecomunicaciones en el ámbito
							de las pymes, donde he acumulado cinco años de experiencia.
							<br />
							<br />
							Mi formación incluye una sólida base como desarrollador fullstack,
							adquirida a través del bootcamp SoyHenry y cursos que he realizado
							por cuenta propia. Durante mi formación, he adquirido y aplicado
							conocimientos en tecnologías esenciales como Javascript, React.js,
							Redux, Node.js, Express, Sequelize, Postgresql, CSS, así como el
							dominio de herramientas fundamentales como Postman y GIT y la
							creación de mis propias API's. Además, he trabajado con diversas
							librerías de diseño para el desarrollo frontend.
							<br />
							<br />
							Mi perfil profesional se caracteriza por valores como la ética, la
							responsabilidad, la dedicación, la constancia, la proactividad, la
							resiliencia, la empatía y la capacidad para ser un buen compañero.
							Mis colegas me han elogiado por mis habilidades en la escucha
							activa y mi perseverancia, lo que contribuye al ambiente de
							trabajo y a los resultados del equipo.
							<br />
							<br />
							En cuanto a mis objetivos laborales actuales, estoy enfocado en
							consolidar mi carrera en el desarrollo web, un campo en constante
							evolución que demanda aprendizaje continuo y adaptabilidad.
							Adicionalmente, mi experiencia como ingeniero en electrónica ha
							sido notable. Durante mi rol como Project Manager en una pyme del
							sector de las telecomunicaciones, he dirigido proyectos para
							empresas líderes como YPF, Pluspetrol, Newmont, Ausol, GCO,
							Arcelor-Mittal Acindar, VASA, entre otras.
							<br />
							<br />
							Mi historial refleja la capacidad de entregar resultados
							sobresalientes en plazos ajustados, lo cual se respalda en la
							demanda constante de servicios por parte de estas compañías.
						</p>
					) : (
						<p className="m-0">
							I'm an electronics engineer with an outstanding career as Project
							Manager in a telecommunications company in the field of SMEs,
							where I have accumulated five years of experience.
							<br />
							<br />
							My background includes a solid foundation as a fullstack
							developer, acquired through the SoyHenry bootcamp, courses that I
							have taken on my own and research. During my training, I have
							acquired and applied knowledge in essential technologies such as
							Javascript, React.js, Redux, Node.js, Express, Sequelize,
							Postgresql, CSS, as well as mastery of fundamental tools like
							Postman and GIT and creating my own API's. Furthermore, I have
							worked with various design libraries for development frontend.
							<br />
							<br />
							My professional profile is characterized by values ​​such as
							ethics, responsibility, dedication, perseverance, proactivity,
							resilience, empathy and the ability to be a good colleague. My
							colleagues have praised me for my active listening skills and my
							perseverance, which contributes to the work environment and team
							results.
							<br />
							<br />
							Regarding my current career goals, I'm focused on consolidating my
							career in web development, a constantly evolving field that
							demands continuous learning and adaptability. Additionally, my
							experience as an electronics engineer has been notable. During my
							role as Project Manager in an SME in the telecommunications
							sector, I have directed projects for leading companies such as
							YPF, Pluspetrol, Newmont, Ausol, GCO, Arcelor-Mittal Acindar,
							VASA, among others.
							<br />
							<br />
							My track record reflects the ability to deliver outstanding
							results within tight deadlines, which is supported by the constant
							demand for services from these companies..
						</p>
					)}

					<div className={style.buttonsContainer}>
						<Link to={"/videogames"}>
							<Button
								label="Go back"
								icon="pi pi-arrow-left"
								className="p-button-text"
							/>
						</Link>
						{lang ? (
							<Button onClick={handleChangeLang} label="Spanish?" />
						) : (
							<Button onClick={handleChangeLang} label="¿En inglés?" />
						)}
					</div>
				</Fieldset>
			</div>
		</div>
	);
};

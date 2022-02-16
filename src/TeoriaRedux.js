import React from 'react';

import './TeoriaRedux.css';

import reduxGif from './assets/redux.gif';
import reduxImg from './assets/redux.jpg';

const TeoriaRedux = () => {
	return (
		<div>
			<h2>Teoría y Conceptos</h2>
			<ul>
				<li className="list">
					<b>
						<i>Store</i>
					</b>
					, contiene el <i>state</i>, (uno por aplicación).
				</li>
				<li className="list">
					<b>
						<i>Dispatch</i>
					</b>
					, ejecuta una acción que actualizará el <i>state</i>.
				</li>
				<li className="list">
					<b>
						<i>Action</i>
					</b>
					, objeto <i>JS</i> con 2 propiedades: <i>type</i> y <i>payload</i>{' '}
					(datos).
				</li>
				<li className="list">
					<b>
						<i>Subscribe</i>
					</b>
					, es un manejador de eventos para el <i>state</i>.
				</li>
				<li className="list">
					<b>
						<i>Reducers</i>
					</b>
					, son funciones que gestionan los <i>actions</i>.
				</li>
			</ul>
			<img src={reduxImg} alt="Diagrama Redux" />
			<hr />
			<img src={reduxGif} alt="Diagrama Redux Animado" />
		</div>
	);
};

export default TeoriaRedux;

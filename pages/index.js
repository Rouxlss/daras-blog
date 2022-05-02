import { Nabvar } from '../components/Nabvar'
import { PostComponent } from '../components/PostComponent'

export default function Home() {

	const pageInfo = {
		title: `"LITERATURA Y REALIDAD"`,
		subtitle: `"Literatura salvadoreña"`,
		img: "../img/img4.png",
	}

	return (
		<>
			<Nabvar pageInfo={pageInfo} />
			<div className="description">
				La literatura ha tenido un gran impacto en la sociedad salvadoreña. La poesía y las historias son populares en la cultura, y muchos escritores las han usado para representar los problemas sociales dentro de la nación. Captura la esencia de nuestra fe, nuestros pensamientos y nuestros ideales y nos ayuda a moldearnos de una forma u otra, ya sea para bien o para mal. A veces puede ser solo una pequeña expresión con poco mérito, o puede ser muy importante para el mundo de la literatura. De cualquier manera, todo es necesario e importante para quienes somos ahora y en el futuro.
				Si no fuera por la literatura que se transmite, siempre estaríamos en un punto de partida.
			</div>
			<PostComponent />
		</>
	)
}

const aprobados = [];
const desaprobados = [];
const listadoAlumno = [];
var promedio = 0;
//var i = 0;
var b = 0;
var c = 0;
var nombre;
var dni;
var triUno = 0;
var triDos = 0;
var triTres = 0;
			// Ingreso de datos
function crear() {
			
 nombre = document.getElementById("nombre").value;
 dni = document.getElementById("dni").value;	
		dani = parseInt(dni);
 triUno = document.getElementById("trimestreUno").value;
		triUno = parseInt(triUno);		
 triDos = document.getElementById("trimestreDos").value;
		triDos = parseInt(triDos);		
 triTres = document.getElementById("trimestreTres").value;
		triTres = parseInt(triTres);
		verificaNumero()		
}

		// Verificacion de notas si son del 0 al 10
	function verificaNumero () {	
		while (triUno > 10 || triDos > 10 || triTres > 10) { 
		
			if (triUno > 10){
			triuno.innerHTML = `<span style ="padding: 10px; border-radius: 40px 0 40px 0; width: auto; background-color: #D73739; color: white;">Ingrese del ( 0 al 10 )</span>`;
			return ;
			}else if (triDos > 10 ) { 
			tridos.innerHTML = `<span style ="padding: 10px; border-radius: 40px 0 40px 0; width: auto; background-color: #D73739; color: white;">Ingrese del ( 0 al 10 )</span>`;
			return ;
			}else {
				tritres.innerHTML = `<span style ="padding: 10px; border-radius: 40px 0 40px 0; width: auto; background-color: #D73739; color: white;">Ingrese del ( 0 al 10 )</span>`;
			return ;
			}
		} 
			triuno.innerHTML = " ";
			tridos.innerHTML = " ";
			tritres.innerHTML = " ";
		return	promedioNotas();		
	}
	// Sacar promedio del nuevo alumno.
	function promedioNotas() {
		promedio = (triUno + triDos + triTres) / 3;
		
			// Convierte el promedio a entero.
		promedio = parseInt(promedio);
		
			// Validar notas
		if ( promedio >= 7 ) { 
			if ( triUno >=4 && triDos >=4 && triTres >=4 ) { 
				creaAlumnoAprobado();
			}else {
				creaAlumnoDesaprobado();
				}
		}else {
			creaAlumnoDesaprobado();
		}
	}
	
		// agrega a los alumnos aprobados al array
	function creaAlumnoAprobado(){
		aprobados.push([nombre,dni,triUno,triDos,triTres,promedio]);
		aprobados.sort();
		listaAlumno();		
	}
	
		// agrega a los alumnos desaprobados al array
	function creaAlumnoDesaprobado(){
		desaprobados.push([nombre,dni,triUno,triDos,triTres,promedio]);
		desaprobados.sort();
		listaAlumno();				
	}
		// Crea un listado de todos los alumnos
	function listaAlumno() {		
	listadoAlumno.push([nombre,dni,triUno,triDos,triTres,promedio]);
	listadoAlumno.sort();
	tituloLista.innerHTML = "Lista de alumnos";	
	listado.innerHTML = "";
	for (var a = 0; a <= listadoAlumno.length-1; a++){
			listado.innerHTML += `<div style="display: flex; margin-left: 3px;"><div style="display: flex; justify-content: center; border: 1px solid white;width:105px; ">${listadoAlumno[a][0]}</div>
								<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${listadoAlumno[a][1]}</div>
								<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${listadoAlumno[a][2]}</div>
								<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${listadoAlumno[a][3]}</div>
								<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${listadoAlumno[a][4]}</div>
								<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${listadoAlumno[a][5]}</div></div>`;
		} 
	//listado.innerHTML = listadoAlumno.join('<hr />');
	}
		// Muestra la lista de los alumnos aprobados.
	function listaAlumnosAprobados() {
		tituloLista.innerHTML = "Lista de alumnos aprobados";
		listado.innerHTML = "";
		aprobados.sort();		
		
		for (var i = 0; i <= aprobados.length-1; i++){
			listado.innerHTML += `<div style="display: flex; margin-left: 3px;"><div style="display: flex; justify-content: center; border: 1px solid white;width:105px; ">${aprobados[i][0]}</div>
								<div style="display: flex; justify-content: center;border: 1px solid white;width:105px;">${aprobados[i][1]}</div>
								<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${aprobados[i][2]}</div>
								<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${aprobados[i][3]}</div>
								<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${aprobados[i][4]}</div>
								<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${aprobados[i][5]}</div></div>`;
		} 
		

	}
		//Muestra la lista de los alumnos desaprobados.
	function listadodeAlumnosDesaprobados() {
		tituloLista.innerHTML = "Lista de alumnos desaprobados";
		listado.innerHTML = "";
		desaprobados.sort();
		for (b = 0; b <= desaprobados.length-1; b++){				
		listado.innerHTML += `<div style="display: flex; margin-left: 3px;"><div style="display: flex; justify-content: center; border: 1px solid white;width:105px; ">${desaprobados[b][0]}</div>
							<div style="display: flex; justify-content: center;border: 1px solid white;width:105px;">${desaprobados[b][1]}</div>
							<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${desaprobados[b][2]}</div>
							<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${desaprobados[b][3]}</div>
							<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${desaprobados[b][4]}</div>
							<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${desaprobados[b][5]}</div></div>`;
		}
	
	}
	//Muestra la lista de todos los alumnos.
	function listadodeAlumnos() {
		tituloLista.innerHTML = "Lista de alumnos";
		listado.innerHTML = "";
		listadoAlumno.sort();
		for (c = 0; c <= listadoAlumno.length-1; c++){				
		listado.innerHTML += `<div style="display: flex; margin-left: 3px;"><div style="display: flex; justify-content: center; border: 1px solid white;width:105px; ">${listadoAlumno[c][0]}</div>
							<div style="display: flex; justify-content: center;border: 1px solid white;width:105px;">${listadoAlumno[c][1]}</div>
							<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${listadoAlumno[c][2]}</div>
							<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${listadoAlumno[c][3]}</div>
							<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${listadoAlumno[c][4]}</div>
							<div style="display: flex; justify-content: center; border: 1px solid white;width:105px;">${listadoAlumno[c][5]}</div></div>`;
		}
				
	}
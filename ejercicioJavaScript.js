let categorias = [
  {
    id: 1,
    puesto: "Repositor",
    sueldoBasico: 15890,
  },
  {
    id: 2,
    puesto: "Cajero",
    sueldoBasico: 25630.89,
  },
  {
    id: 3,
    puesto: "Supervisor",
    sueldoBasico: 35560.2,
  },
];

let mostrarTipoEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    let buscarCategoria = categorias.find((categoria) => categoria.id === id);
    if (!buscarCategoria) {
      reject("Error al procesar los datos");
    } else {
      switch (buscarCategoria.id) {
        case 1:
          resolve({
            id: buscarCategoria.id,
            puesto: buscarCategoria.puesto,
            sueldo:
              buscarCategoria.sueldoBasico +
              (buscarCategoria.sueldoBasico * 10) / 100,
          });
          break;
        case 2:
          resolve({
            id: buscarCategoria.id,
            puesto: buscarCategoria.puesto,
            sueldo: buscarCategoria.sueldoBasico,
          });
          break;
        case 3:
          resolve({
            id: buscarCategoria.id,
            puesto: buscarCategoria.puesto,
            sueldo:
              buscarCategoria.sueldoBasico -
              (buscarCategoria.sueldoBasico * 11) / 100,
          });
          break;
        default:
          reject(
            "No ha seleccionado ninguna categoria de trabajo, por favor ingrese una categoria correcta"
          );
          break;
      }
    }
  });
};

let tipoEmpleado = prompt(
  "Ingrese el tipo de empleado 1-Repositor, 2-Cajero, 3-Supervisor",
  "0"
);
let tipoEmp = parseInt(tipoEmpleado);

tipoEmp = parseInt(tipoEmp);
console.info(tipoEmp);
mostrarTipoEmpleado(tipoEmp)
  .then((pagoSueldo) => {
    document.write(JSON.stringify(pagoSueldo));
  })
  .catch((err) => console.warn(err));

import { createInterface } from "node:readline";
import { estacionar } from "./lib/estacionamiento.js";

const entrada = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const LLENO = "El Estacionamiento está lleno";

function pedirPlaca(): void {
  entrada.question("Placa del vehículo: ", (placa) => {
    const dato = placa.trim().toUpperCase();

    if (dato === "SALIR") {
      console.log("Programa terminado.");
      entrada.close();
      return;
    }

    const resultado = estacionar(dato);
    console.log(resultado);

    if (resultado === LLENO) {
      console.log("No caben más vehículos. Programa terminado.");
      entrada.close();
      return;
    }

    pedirPlaca();
  });
}

pedirPlaca();

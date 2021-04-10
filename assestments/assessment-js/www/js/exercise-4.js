/**
 * #############################
 * ##  E J E R C I C I O   4  ##
 * #############################
 *
 * Obtener un array con los nombres de todos los municipios de la provincia de Lugo (Galicia)
 * ordenados por orden alfabético inverso (de la Z a la A). Deberás hacer uso de fetch y
 * async / await.
 *
 * Para facilitarte esta tarea dispones de la siguiente API: https://www.el-tiempo.net/api
 *
 * Debes entrar en la web y leer la documentación para encontrar la URL que necesitas. En
 * este caso es bastante simple e intuitivo. ¡A por todas! ;)
 *
 */

'use strict';

const provinciasUrl = 'https://www.el-tiempo.net/api/json/v2/provincias';
const municipiosUrl = 'https://www.el-tiempo.net/api/json/v2/provincias/[CODPROV]/municipios';

async function buscarMunicipios(provinciaABuscar = 'Lugo') {
  // json de todas las provincias
  const provincias = await (await fetch(provinciasUrl)).json();

  // encontrar provincia
  const provinciaBuscada = provincias.provincias.find((provincia) => provincia.NOMBRE_PROVINCIA === provinciaABuscar);

  // json de la provincia
  const municipioProvincia = await (await fetch(municipiosUrl.replace('[CODPROV]', provinciaBuscada.CODPROV))).json();

  // sólo los municipios
  const municipiosArray = municipioProvincia.municipios.reduce((acc, municipio) => {
    acc.push(municipio.NOMBRE);
    return acc;
  }, []);

  console.log(municipiosArray.sort().reverse());
}

buscarMunicipios();

buscarMunicipios('A Coruña');

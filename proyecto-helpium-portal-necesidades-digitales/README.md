# HELPIUM ENDPOINTS

##### <code>Legend: ✅ Public, ❗ Private, 🚫 Admin</code>

## Users

|Method|Auth|Route|Controller|Description|
|---|:---:|---|---|---|
| **`GET`** | ✅ | `/api/v1/users` | `userGetAll` | `Listado de todos usuarios` |
| **`POST`** | ✅ | `/api/v1/users/register` | `userRegister` | `Crea un usuario pendiente de activar` |
| **`GET`** | ✅ | `/api/v1/users/activation` | `userActivate ` | `Link para validar y activar un usuario` |
| **`POST`** | ✅ | `/api/v1/users/login` | `userLogin ` | `Login de usuario` |
| **`POST`** | ✅ | `/api/v1/users/forgotten` | `userForgottenPassword ` | `Recuperar contraseña de usuario` |
| **`GET`** | ✅ | `/api/v1/users/profile/:idUser` | `userGetProfileFromId ` | `Obtener el perfil del usuario logueado` |
| **`GET`** | ❗ | `/api/v1/users/profile` | `userGetProfile ` | `Obtener el perfil del usuario logueado` |
| **`PATCH`** | ❗ | `/api/v1/users/update` | `userUpdate ` | `Editar uno o más datos de usuario` |
| **`POST`** | ❗ | `/api/v1/users/upload` | `userUploadImageProfile ` | `Subir la imagen del perfil` |
| **`DELETE`** | ❗ | `/api/v1/users/upload` | `userDeleteImageProfile ` | `Borrar la imagen del perfil` |
| **`DELETE`** | 🚫 | `/api/v1/users/:idUser` | `userToggleVisibilityById` | `Oculta o muestra un usuario` |

## Services

|Method|Auth|Route|Controller|Description|
|---|:---:|---|---|---|
| **`GET`** | ✅ | `/api/v1/services` | `serviceGetAll ` | `Obtener la lista servicios` |
| **`GET`** | ✅ | `/api/v1/services/:id` | `serviceGetById ` | `Obtener un servicio concreto` |
| **`GET`** | ✅ | `/api/v1/services/:category` | `serviceGetAllByCategory ` | `Obtener los servicios de una categoría` |
| **`GET`** | ❗ | `/api/v1/services/user` | `serviceGetAllOfUser ` | `Obtener los servicios del usuario logueado` |
| **`POST`** | ❗ | `/api/v1/services` | `serviceCreate ` | `Insertar un nuevo servicio` |
| **`PATCH`** | ❗ | `/api/v1/services/:id` | `ServiceUpdateById ` | `Actualizar un servicio` |
| **`DELETE`** | 🚫 | `/api/v1/services/:id` | `serviceToggleVisibilityBiId` | `Oculta o muestra un servicio` |

## Responses

|Method|Auth|Route|Controller|Description|
|---|:---:|---|---|---|
| **`GET`** | ✅ | `/api/v1/solutions/:id` | `solutionGetAllFromId ` | `Obtener la lista respuestas de un usuario` |
| **`POST`** | ❗ | `/api/v1/solutions` | `solutionCreate ` | `Insertar una nueva solucion` |
| **`GET`** | ❗ | `/api/v1/solutions` | `solutionGetAllOfUser ` | `Obtener la lista respuestas de un service` |
| **`PUT`** | ❗ | `/api/v1/solution/:id` | `solutionSetChosenSolution ` | `Asignar una solution como "elegida"` |
| **`DELETE`** | 🚫 | `/api/v1/solution/:id` | `solutionToggleVisibilityById` | `Oculta o muestra una solución` |

## Admin

|Method|Auth|Route|Controller|Description|
|---|:---:|---|---|---|
| **`GET`** | 🚫 | `/api/v1/admin/random/:number` | `userRandomCreate ` | `Crear :number users aleatorios de API` |

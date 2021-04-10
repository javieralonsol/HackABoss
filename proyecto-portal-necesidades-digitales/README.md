# HELPIUM ENDPOINTS

#### Legend: <code>✅ Public,❗Private, 🚫 Admin</code>

## Users

- [x] <code>**GET**    ✅ [/api/v1/users]                - userGetAll               - Listado de todos usuarios.</code>
- [x] <code>**POST**   ✅ [/api/v1/users/register]       - userRegister             - Crea un usuario pendiente de activar.</code>
- [x] <code>**GET**    ✅ [/api/v1/users/activation]     - userActivate             - Link para validar y activar un usuario.</code>
- [x] <code>**POST**   ✅ [/api/v1/users/login]          - userLogin                - Login de usuario.</code>
- [x] <code>**POST**   ✅ [/api/v1/users/forgotten]      - userForgottenPassword    - Recuperar contraseña de usuario.</code>
- [x] <code>**GET**    ✅ [/api/v1/users/profile/:idUser]- userGetProfileFromId     - Obtener el perfil del usuario logueado.</code>
- [x] <code>**GET**    ❗ [/api/v1/users/profile]        - userGetProfile           - Obtener el perfil del usuario logueado.</code>
- [x] <code>**PATCH**  ❗ [/api/v1/users/update]         - userUpdate               - Editar uno o más datos de usuario.</code>
- [x] <code>**POST**   ❗ [/api/v1/users/upload]         - userUploadImageProfile   - Subir la imagen del perfil.</code>
- [x] <code>**DELETE** ❗ [/api/v1/users/upload]         - userDeleteImageProfile   - Borrar la imagen del perfil.</code>
- [x] <code>**DELETE** 🚫 [/api/v1/users/:idUser]        - userToggleVisibilityById - Oculta o muestra un usuario.</code>

## Services

- [x] <code>**GET**    ✅ [/api/v1/services]           - serviceGetAll               - Obtener la lista servicios.</code>
- [x] <code>**GET**    ✅ [/api/v1/services/:id]       - serviceGetById              - Obtener un servicio concreto.</code>
- [x] <code>**GET**    ✅ [/api/v1/services/:category] - serviceGetAllByCategory     - Obtener los servicios de una categoría.</code>
- [x] <code>**GET**    ❗ [/api/v1/services/user]      - serviceGetAllOfUser         - Obtener los servicios del usuario logueado.</code>
- [x] <code>**POST**   ❗ [/api/v1/services]           - serviceCreate               - Insertar un nuevo servicio.</code>
- [x] <code>**PATCH**  🚫 [/api/v1/services/:id]       - ServiceUpdateById           - Actualizar un servicio.</code>
- [x] <code>**DELETE** 🚫 [/api/v1/services/:id]       - serviceToggleVisibilityBiId - Oculta o muestra un servicio.</code>

## Responses

- [x] <code>**GET**    ✅ [/api/v1/solutions/:id] - solutionGetAllFromId         - Obtener la lista respuestas de un usuario.</code>
- [x] <code>**POST**   ❗ [/api/v1/solutions]     - solutionCreate               - Insertar una nueva solucion.</code>
- [x] <code>**GET**    ❗ [/api/v1/solutions]     - solutionGetAllOfUser        - Obtener la lista respuestas de un service.</code>
- [x] <code>**PUT**    ❗ [/api/v1/solution/:id]  - solutionSetChosenSolution   - Asignar una solution como "elegida".</code>
- [x] <code>**DELETE** 🚫 [/api/v1/solution/:id]  - solutionToggleVisibilityById - Oculta o muestra una solución.</code>

## Admin

- [x] <code>**GET**    🚫 [/api/v1/admin/random/:number] - userRandomCreate         - Crear :number users aleatorios de API.</code>

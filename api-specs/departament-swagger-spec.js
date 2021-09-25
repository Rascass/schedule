
/**
 * @swagger
 * definitions:
 *    Departament:
 *      properties:
 *        name:
*          type: string
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    Departamentresponse:
 *      properties:
 *        id:
 *          type: integer
 *        name:
*          type: string
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 */

 /**
 * @swagger
 * /departament:
 *    get:
 *      description: get Departament
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get Departament
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/Departamentresponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save Departament
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Departament
 *          schema:
 *            type: object
 *            properties:
 *              Departament:
 *                $ref: '#/definitions/Departament'
 *      responses:
 *        200:
 *          description: save Departament
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Departamentresponse'
 *
 * /departament/{id}:
 *    get:
 *      description: get Departament with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Departament ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get Departament
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Departamentresponse'
 *        404:
 *          description: Departament not found
 *          content: {}
 *
 *    delete:
 *      description: remove Departament with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Departament ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete Departament
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Departamentresponse'
 *        404:
 *          description: Departament not found
 *          content: {}
 *
 *    put:
 *      description: update Departament with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Departament ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: Departament
 *          schema:
 *            type: object
 *            properties:
 *              Departament:
 *                $ref: '#/definitions/Departament'
 *      responses:
 *        200:
 *          description: update Departament
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Departamentresponse'
 *        404:
 *          description: Departament not found
 *          content: {}
 */

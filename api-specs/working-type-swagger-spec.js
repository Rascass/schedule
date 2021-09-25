
/**
 * @swagger
 * definitions:
 *    WorkingType:
 *      properties:
 *        name:
*          type: string
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    WorkingTyperesponse:
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
 * /working-type:
 *    get:
 *      description: get WorkingType
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get WorkingType
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/WorkingTyperesponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save WorkingType
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: WorkingType
 *          schema:
 *            type: object
 *            properties:
 *              WorkingType:
 *                $ref: '#/definitions/WorkingType'
 *      responses:
 *        200:
 *          description: save WorkingType
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/WorkingTyperesponse'
 *
 * /working-type/{id}:
 *    get:
 *      description: get WorkingType with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: WorkingType ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get WorkingType
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/WorkingTyperesponse'
 *        404:
 *          description: WorkingType not found
 *          content: {}
 *
 *    delete:
 *      description: remove WorkingType with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: WorkingType ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete WorkingType
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/WorkingTyperesponse'
 *        404:
 *          description: WorkingType not found
 *          content: {}
 *
 *    put:
 *      description: update WorkingType with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: WorkingType ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: WorkingType
 *          schema:
 *            type: object
 *            properties:
 *              WorkingType:
 *                $ref: '#/definitions/WorkingType'
 *      responses:
 *        200:
 *          description: update WorkingType
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/WorkingTyperesponse'
 *        404:
 *          description: WorkingType not found
 *          content: {}
 */


/**
 * @swagger
 * definitions:
 *    Shift:
 *      properties:
 *        name:
*          type: string
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    Shiftresponse:
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
 * /shift:
 *    get:
 *      description: get Shift
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get Shift
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/Shiftresponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save Shift
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Shift
 *          schema:
 *            type: object
 *            properties:
 *              Shift:
 *                $ref: '#/definitions/Shift'
 *      responses:
 *        200:
 *          description: save Shift
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Shiftresponse'
 *
 * /shift/{id}:
 *    get:
 *      description: get Shift with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Shift ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get Shift
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Shiftresponse'
 *        404:
 *          description: Shift not found
 *          content: {}
 *
 *    delete:
 *      description: remove Shift with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Shift ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete Shift
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Shiftresponse'
 *        404:
 *          description: Shift not found
 *          content: {}
 *
 *    put:
 *      description: update Shift with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Shift ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: Shift
 *          schema:
 *            type: object
 *            properties:
 *              Shift:
 *                $ref: '#/definitions/Shift'
 *      responses:
 *        200:
 *          description: update Shift
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Shiftresponse'
 *        404:
 *          description: Shift not found
 *          content: {}
 */

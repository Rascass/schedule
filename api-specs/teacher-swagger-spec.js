
/**
 * @swagger
 * definitions:
 *    Teacher:
 *      properties:
 *        workingTypeId:
*          type: integer
 *        personInfoId:
*          type: integer
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    Teacherresponse:
 *      properties:
 *        id:
 *          type: integer
 *        workingTypeId:
*          type: integer
 *        personInfoId:
*          type: integer
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 */

 /**
 * @swagger
 * /teacher:
 *    get:
 *      description: get Teacher
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get Teacher
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/Teacherresponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save Teacher
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Teacher
 *          schema:
 *            type: object
 *            properties:
 *              Teacher:
 *                $ref: '#/definitions/Teacher'
 *      responses:
 *        200:
 *          description: save Teacher
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Teacherresponse'
 *
 * /teacher/{id}:
 *    get:
 *      description: get Teacher with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Teacher ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get Teacher
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Teacherresponse'
 *        404:
 *          description: Teacher not found
 *          content: {}
 *
 *    delete:
 *      description: remove Teacher with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Teacher ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete Teacher
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Teacherresponse'
 *        404:
 *          description: Teacher not found
 *          content: {}
 *
 *    put:
 *      description: update Teacher with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Teacher ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: Teacher
 *          schema:
 *            type: object
 *            properties:
 *              Teacher:
 *                $ref: '#/definitions/Teacher'
 *      responses:
 *        200:
 *          description: update Teacher
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Teacherresponse'
 *        404:
 *          description: Teacher not found
 *          content: {}
 */

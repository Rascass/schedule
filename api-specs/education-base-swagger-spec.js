
/**
 * @swagger
 * definitions:
 *    EducationBase:
 *      properties:
 *        name:
*          type: string
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    EducationBaseresponse:
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
 * /education-base:
 *    get:
 *      description: get EducationBase
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get EducationBase
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/EducationBaseresponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save EducationBase
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: EducationBase
 *          schema:
 *            type: object
 *            properties:
 *              EducationBase:
 *                $ref: '#/definitions/EducationBase'
 *      responses:
 *        200:
 *          description: save EducationBase
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/EducationBaseresponse'
 *
 * /education-base/{id}:
 *    get:
 *      description: get EducationBase with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: EducationBase ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get EducationBase
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/EducationBaseresponse'
 *        404:
 *          description: EducationBase not found
 *          content: {}
 *
 *    delete:
 *      description: remove EducationBase with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: EducationBase ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete EducationBase
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/EducationBaseresponse'
 *        404:
 *          description: EducationBase not found
 *          content: {}
 *
 *    put:
 *      description: update EducationBase with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: EducationBase ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: EducationBase
 *          schema:
 *            type: object
 *            properties:
 *              EducationBase:
 *                $ref: '#/definitions/EducationBase'
 *      responses:
 *        200:
 *          description: update EducationBase
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/EducationBaseresponse'
 *        404:
 *          description: EducationBase not found
 *          content: {}
 */


/**
 * @swagger
 * definitions:
 *    Subject:
 *      properties:
 *        name:
*          type: string
 *        totalHours:
*          type: integer
 *        courseId:
*          type: integer
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    Subjectresponse:
 *      properties:
 *        id:
 *          type: integer
 *        name:
*          type: string
 *        totalHours:
*          type: integer
 *        courseId:
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
 * /subject:
 *    get:
 *      description: get Subject
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get Subject
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/Subjectresponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save Subject
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Subject
 *          schema:
 *            type: object
 *            properties:
 *              Subject:
 *                $ref: '#/definitions/Subject'
 *      responses:
 *        200:
 *          description: save Subject
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Subjectresponse'
 *
 * /subject/{id}:
 *    get:
 *      description: get Subject with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Subject ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get Subject
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Subjectresponse'
 *        404:
 *          description: Subject not found
 *          content: {}
 *
 *    delete:
 *      description: remove Subject with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Subject ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete Subject
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Subjectresponse'
 *        404:
 *          description: Subject not found
 *          content: {}
 *
 *    put:
 *      description: update Subject with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Subject ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: Subject
 *          schema:
 *            type: object
 *            properties:
 *              Subject:
 *                $ref: '#/definitions/Subject'
 *      responses:
 *        200:
 *          description: update Subject
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Subjectresponse'
 *        404:
 *          description: Subject not found
 *          content: {}
 */

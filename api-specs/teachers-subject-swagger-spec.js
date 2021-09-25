
/**
 * @swagger
 * definitions:
 *    TeachersSubject:
 *      properties:
 *        subjectId:
*          type: integer
 *        teacherId:
*          type: integer
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    TeachersSubjectresponse:
 *      properties:
 *        id:
 *          type: integer
 *        subjectId:
*          type: integer
 *        teacherId:
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
 * /teachers-subject:
 *    get:
 *      description: get TeachersSubject
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get TeachersSubject
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/TeachersSubjectresponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save TeachersSubject
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: TeachersSubject
 *          schema:
 *            type: object
 *            properties:
 *              TeachersSubject:
 *                $ref: '#/definitions/TeachersSubject'
 *      responses:
 *        200:
 *          description: save TeachersSubject
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/TeachersSubjectresponse'
 *
 * /teachers-subject/{id}:
 *    get:
 *      description: get TeachersSubject with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: TeachersSubject ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get TeachersSubject
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/TeachersSubjectresponse'
 *        404:
 *          description: TeachersSubject not found
 *          content: {}
 *
 *    delete:
 *      description: remove TeachersSubject with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: TeachersSubject ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete TeachersSubject
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/TeachersSubjectresponse'
 *        404:
 *          description: TeachersSubject not found
 *          content: {}
 *
 *    put:
 *      description: update TeachersSubject with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: TeachersSubject ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: TeachersSubject
 *          schema:
 *            type: object
 *            properties:
 *              TeachersSubject:
 *                $ref: '#/definitions/TeachersSubject'
 *      responses:
 *        200:
 *          description: update TeachersSubject
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/TeachersSubjectresponse'
 *        404:
 *          description: TeachersSubject not found
 *          content: {}
 */

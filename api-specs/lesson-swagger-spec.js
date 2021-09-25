
/**
 * @swagger
 * definitions:
 *    Lesson:
 *      properties:
 *        number:
*          type: integer
 *        weekDay:
*          type: integer
 *        week:
*          type: integer
 *        subjectId:
*          type: integer
 *        teacherId:
*          type: integer
 *        audienceId:
*          type: integer
 *        groupId:
*          type: integer
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    Lessonresponse:
 *      properties:
 *        id:
 *          type: integer
 *        number:
*          type: integer
 *        weekDay:
*          type: integer
 *        week:
*          type: integer
 *        subjectId:
*          type: integer
 *        teacherId:
*          type: integer
 *        audienceId:
*          type: integer
 *        groupId:
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
 * /lesson:
 *    get:
 *      description: get Lesson
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get Lesson
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/Lessonresponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save Lesson
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Lesson
 *          schema:
 *            type: object
 *            properties:
 *              Lesson:
 *                $ref: '#/definitions/Lesson'
 *      responses:
 *        200:
 *          description: save Lesson
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Lessonresponse'
 *
 * /lesson/{id}:
 *    get:
 *      description: get Lesson with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Lesson ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get Lesson
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Lessonresponse'
 *        404:
 *          description: Lesson not found
 *          content: {}
 *
 *    delete:
 *      description: remove Lesson with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Lesson ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete Lesson
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Lessonresponse'
 *        404:
 *          description: Lesson not found
 *          content: {}
 *
 *    put:
 *      description: update Lesson with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Lesson ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: Lesson
 *          schema:
 *            type: object
 *            properties:
 *              Lesson:
 *                $ref: '#/definitions/Lesson'
 *      responses:
 *        200:
 *          description: update Lesson
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Lessonresponse'
 *        404:
 *          description: Lesson not found
 *          content: {}
 */


/**
 * @swagger
 * definitions:
 *    CourseName:
 *      properties:
 *        name:
*          type: string
 *        letter:
*          type: string
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    CourseNameresponse:
 *      properties:
 *        id:
 *          type: integer
 *        name:
*          type: string
 *        letter:
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
 * /course-name:
 *    get:
 *      description: get CourseName
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get CourseName
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/CourseNameresponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save CourseName
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: CourseName
 *          schema:
 *            type: object
 *            properties:
 *              CourseName:
 *                $ref: '#/definitions/CourseName'
 *      responses:
 *        200:
 *          description: save CourseName
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/CourseNameresponse'
 *
 * /course-name/{id}:
 *    get:
 *      description: get CourseName with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: CourseName ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get CourseName
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/CourseNameresponse'
 *        404:
 *          description: CourseName not found
 *          content: {}
 *
 *    delete:
 *      description: remove CourseName with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: CourseName ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete CourseName
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/CourseNameresponse'
 *        404:
 *          description: CourseName not found
 *          content: {}
 *
 *    put:
 *      description: update CourseName with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: CourseName ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: CourseName
 *          schema:
 *            type: object
 *            properties:
 *              CourseName:
 *                $ref: '#/definitions/CourseName'
 *      responses:
 *        200:
 *          description: update CourseName
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/CourseNameresponse'
 *        404:
 *          description: CourseName not found
 *          content: {}
 */

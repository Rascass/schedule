
/**
 * @swagger
 * definitions:
 *    Course:
 *      properties:
 *        yearDuration:
*          type: integer
 *        courseNameId:
*          type: integer
 *        educationBaseId:
*          type: integer
 *        shiftId:
*          type: integer
 *        departamentId:
*          type: integer
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    Courseresponse:
 *      properties:
 *        id:
 *          type: integer
 *        yearDuration:
*          type: integer
 *        courseNameId:
*          type: integer
 *        educationBaseId:
*          type: integer
 *        shiftId:
*          type: integer
 *        departamentId:
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
 * /course:
 *    get:
 *      description: get Course
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get Course
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/Courseresponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save Course
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Course
 *          schema:
 *            type: object
 *            properties:
 *              Course:
 *                $ref: '#/definitions/Course'
 *      responses:
 *        200:
 *          description: save Course
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Courseresponse'
 *
 * /course/{id}:
 *    get:
 *      description: get Course with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Course ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get Course
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Courseresponse'
 *        404:
 *          description: Course not found
 *          content: {}
 *
 *    delete:
 *      description: remove Course with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Course ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete Course
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Courseresponse'
 *        404:
 *          description: Course not found
 *          content: {}
 *
 *    put:
 *      description: update Course with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Course ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: Course
 *          schema:
 *            type: object
 *            properties:
 *              Course:
 *                $ref: '#/definitions/Course'
 *      responses:
 *        200:
 *          description: update Course
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Courseresponse'
 *        404:
 *          description: Course not found
 *          content: {}
 */

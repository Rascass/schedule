
/**
 * @swagger
 * definitions:
 *    Group:
 *      properties:
 *        name:
*          type: string
 *        courseId:
*          type: integer
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    Groupresponse:
 *      properties:
 *        id:
 *          type: integer
 *        name:
*          type: string
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
 * /group:
 *    get:
 *      description: get Group
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get Group
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/Groupresponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save Group
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Group
 *          schema:
 *            type: object
 *            properties:
 *              Group:
 *                $ref: '#/definitions/Group'
 *      responses:
 *        200:
 *          description: save Group
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Groupresponse'
 *
 * /group/{id}:
 *    get:
 *      description: get Group with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Group ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get Group
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Groupresponse'
 *        404:
 *          description: Group not found
 *          content: {}
 *
 *    delete:
 *      description: remove Group with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Group ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete Group
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Groupresponse'
 *        404:
 *          description: Group not found
 *          content: {}
 *
 *    put:
 *      description: update Group with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Group ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: Group
 *          schema:
 *            type: object
 *            properties:
 *              Group:
 *                $ref: '#/definitions/Group'
 *      responses:
 *        200:
 *          description: update Group
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Groupresponse'
 *        404:
 *          description: Group not found
 *          content: {}
 */

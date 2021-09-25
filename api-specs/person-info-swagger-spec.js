
/**
 * @swagger
 * definitions:
 *    PersonInfo:
 *      properties:
 *        firstName:
*          type: string
 *        lastName:
*          type: string
 *        middleName:
*          type: string
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    PersonInforesponse:
 *      properties:
 *        id:
 *          type: integer
 *        firstName:
*          type: string
 *        lastName:
*          type: string
 *        middleName:
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
 * /person-info:
 *    get:
 *      description: get PersonInfo
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get PersonInfo
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/PersonInforesponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save PersonInfo
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: PersonInfo
 *          schema:
 *            type: object
 *            properties:
 *              PersonInfo:
 *                $ref: '#/definitions/PersonInfo'
 *      responses:
 *        200:
 *          description: save PersonInfo
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/PersonInforesponse'
 *
 * /person-info/{id}:
 *    get:
 *      description: get PersonInfo with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: PersonInfo ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get PersonInfo
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/PersonInforesponse'
 *        404:
 *          description: PersonInfo not found
 *          content: {}
 *
 *    delete:
 *      description: remove PersonInfo with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: PersonInfo ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete PersonInfo
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/PersonInforesponse'
 *        404:
 *          description: PersonInfo not found
 *          content: {}
 *
 *    put:
 *      description: update PersonInfo with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: PersonInfo ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: PersonInfo
 *          schema:
 *            type: object
 *            properties:
 *              PersonInfo:
 *                $ref: '#/definitions/PersonInfo'
 *      responses:
 *        200:
 *          description: update PersonInfo
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/PersonInforesponse'
 *        404:
 *          description: PersonInfo not found
 *          content: {}
 */

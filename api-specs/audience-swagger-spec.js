
/**
 * @swagger
 * definitions:
 *    Audience:
 *      properties:
 *        number:
*          type: string
 *        createdAt:
*          format: date-time
*          type: string
 *        updatedAt:
*          format: date-time
*          type: string
 *    Audienceresponse:
 *      properties:
 *        id:
 *          type: integer
 *        number:
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
 * /audience:
 *    get:
 *      description: get Audience
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get Audience
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/Audienceresponse'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save Audience
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Audience
 *          schema:
 *            type: object
 *            properties:
 *              Audience:
 *                $ref: '#/definitions/Audience'
 *      responses:
 *        200:
 *          description: save Audience
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Audienceresponse'
 *
 * /audience/{id}:
 *    get:
 *      description: get Audience with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Audience ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get Audience
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Audienceresponse'
 *        404:
 *          description: Audience not found
 *          content: {}
 *
 *    delete:
 *      description: remove Audience with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Audience ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete Audience
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Audienceresponse'
 *        404:
 *          description: Audience not found
 *          content: {}
 *
 *    put:
 *      description: update Audience with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Audience ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: Audience
 *          schema:
 *            type: object
 *            properties:
 *              Audience:
 *                $ref: '#/definitions/Audience'
 *      responses:
 *        200:
 *          description: update Audience
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                $ref: '#/definitions/Audienceresponse'
 *        404:
 *          description: Audience not found
 *          content: {}
 */

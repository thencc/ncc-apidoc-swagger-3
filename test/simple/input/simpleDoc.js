/**
 * @apiDefine MyError
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 */

/**
 * @api {post} /user/id Request User information
 * @apiName GetUser
 * @apiGroup User
 * 
 * @apiQuery {Number} id Users unique ID.
 *
 * @apiBody {String} name Name of user
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {Object} result Result object
 * @apiSuccess {String} result.message Message of result
 */
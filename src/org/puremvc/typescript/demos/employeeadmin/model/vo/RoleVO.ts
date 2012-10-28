/**
 * @classDescription
 * The value object in charge of transporting the data to describe each user
 * roles.
 * 
 * @constructor
 */
var RoleVO = Objs("org.puremvc.js.demos.objs.employeeadmin.model.vo.RoleVO",
{
	/**
	 * Unique name of the user to whom is associated the role.
	 * 
	 * @type {String}
	 */
	uname: "",
	
	/**
	 * The list of roles associated to the user.
	 * 
	 * @type {Array}
	 */	
	roles: []
});
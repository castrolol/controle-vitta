import Controller from '../core/controller';
import { get, post, route, noAuth } from '../core/http-extensions';
import usuarioService from '../data-services/usuario-service';
import Boom from 'boom';
import jwt from 'jsonwebtoken';
import {PRIVATEKEY} from '../auth';

@route
export default class AuthController extends Controller {

	constructor() {
		super();
	}

	@post.config({auth: null})
	async login(req, reply) {
		try {

			let user = await usuarioService.credentials(req.payload.username, req.payload.password);

			if (user == null) {
				return reply(Boom.unauthorized("Usuario ou senha inexistentes"));
			}

			var token = jwt.sign(user, PRIVATEKEY);

			return reply({
				token: token
			});

		}
		catch (e) {
			console.log(e);
			return reply(Boom.wrap(e));
		}
	}
}
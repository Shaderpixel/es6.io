import slug from 'slug';
import base64 from 'base-64'
import { url } from './config';

export default function User(user, email, website) {
  return { user, email, website };
}

export function createURL(name) {
	return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
	const hash = base64.encode(email);
	const photoURL = `https://www.gravatar.com/avatar/${hash}`;

	return photoURL;
}
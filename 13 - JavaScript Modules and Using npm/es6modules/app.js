import insane from 'insane';
import { uniq, shuffle } from 'lodash';
import jsonp from 'jsonp';
import { apiKey } from './src/config';
import User, { createURL, gravatar} from "./src/user";


console.log(apiKey);

const ages = [1, 2, 2, 4, 6, 1, 32, 46, 32];

console.log(uniq(ages));

const richard = new User('Richard Lock', 'lock.j.h@gmail.com', 'iamrichardlock.com');
const profile = createURL(richard.user);
const image = gravatar(richard.email);
console.log(image);
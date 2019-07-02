import { getJwt } from '../utils/getToken';

const jwt = getJwt();
//     if (!jwt) {
//     this.props.history.push('/');
// }

export const headers = {
    'Content-Type': 'application/json',
    'access_token': `JWT ${jwt}` 
}
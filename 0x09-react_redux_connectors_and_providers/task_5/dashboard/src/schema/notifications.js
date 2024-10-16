import notifications from '../../notifications.json';
import { schema, normalize } from 'normalizr';


const user = new schema.Entity("users")
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
// const notification = new schema.Entity('notifications', {
//   author: user,
//   context: message
// });
const notification = new schema.Entity('notifications');

export const normalizedNotifs = normalize(notifications, notification);

export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
}

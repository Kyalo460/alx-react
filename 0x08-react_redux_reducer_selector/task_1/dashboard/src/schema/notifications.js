import notifications from '../../notifications.json';
import { schema, normalize } from 'normalizr';


const user = new schema.Entity("users")
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedNotifs = normalize(notifications, notification);
// export function getAllNotificationsByUser(userId) {
//   const notificationsArr = [];
//   for(const notification of notifications) {
//     if (notification.id === userId)
//       notificationsArr.push(notification.context);
//   }

//   return notificationsArr;
// }



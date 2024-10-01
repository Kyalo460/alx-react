import notifications from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
  const notificationsArr = [];
  for(const notification of notifications) {
    if (notification.id === userId)
      notificationsArr.push(notification.context);
  }

  return notificationsArr;
}

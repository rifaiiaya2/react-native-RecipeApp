import notifee from '@notifee/react-native';
export async function onDisplayNotification() {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: 'Favorite Added',
    body: 'This recipe has been added to your favorites!',
    android: {
      channelId,
    },
  });
}

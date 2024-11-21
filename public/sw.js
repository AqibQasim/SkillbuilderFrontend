// public/sw.js

self.addEventListener("push", (event) => {
  console.log("Push event received:", event);
  const data = event.data.json();
  const title = data.title;
  const body = data.body;
  //const icon = data.icon;
  //const url = data.data.url;

  const notificationOptions = {
    body,
    // //tag: "unique-tag", // Use a unique tag to prevent duplicate notifications
    // icon: icon,
    // data: {
    //   url: url, // Replace with the desired URL for redirecting user to the desired page
    // },
  };

  console.log("showing notification......")
  self.registration.showNotification(title, notificationOptions);
});

// self.addEventListener("notificationclick", (event) => {
//   const { url } = event.notification.data;
//   event.notification.close();

//   event.waitUntil(
//     clients.matchAll({ type: "window" }).then((clientList) => {
//       for (const client of clientList) {
//         if (client.url === url && "focus" in client) {
//           return client.focus();
//         }
//       }
//       if (clients.openWindow) {
//         return clients.openWindow(url);
//       }
//     })
//   );
// });

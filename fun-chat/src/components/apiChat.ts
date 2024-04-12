const socket = new WebSocket('ws://127.0.0.1:4000/');

function apiAuthorization(uid: string, name: string, pass: string) {
  const data = {
    id: uid,
    type: 'USER_LOGIN',
    payload: {
      user: {
        login: name,
        password: pass,
      },
    },
  };
  socket.send(JSON.stringify(data));
}

socket.addEventListener('message', (event) => {
  console.log('WebSocket: ', event.data);
});

export { socket, apiAuthorization };

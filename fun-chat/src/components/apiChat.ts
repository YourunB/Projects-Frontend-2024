const socket = new WebSocket('ws://127.0.0.1:4000/');

function apiAuthorization(uid: string, name: string, pass: string) {
  return new Promise((resolve, reject) => {
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

    socket.addEventListener('message', (event) => {
      resolve(event.data);
    });

    socket.addEventListener('error', (error) => {
      reject(error);
    });
  });
}

function apiLogOut(uid: string, name: string, pass: string) {
  return new Promise((resolve, reject) => {
    const data = {
      id: uid,
      type: 'USER_LOGOUT',
      payload: {
        user: {
          login: name,
          password: pass,
        },
      },
    };
    socket.send(JSON.stringify(data));

    socket.addEventListener('message', (event) => {
      resolve(event.data);
    });

    socket.addEventListener('error', (error) => {
      reject(error);
    });
  });
}

export { socket, apiAuthorization, apiLogOut };

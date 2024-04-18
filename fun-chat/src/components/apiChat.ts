const socket = new WebSocket('ws://127.0.0.1:4000/');

function apiLogIn(uid: string, name: string, pass: string) {
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

function apiLogOut(uid: string, name: string, pass: string) {
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
}

function apiGetActiveUsers(uid: string) {
  const data = {
    id: uid,
    type: 'USER_ACTIVE',
    payload: null,
  };
  socket.send(JSON.stringify(data));
}

function apiGetInactiveUsers(uid: string) {
  const data = {
    id: uid,
    type: 'USER_INACTIVE',
    payload: null,
  };
  socket.send(JSON.stringify(data));
}

function apiSendMsg(uid: string, login: string, msg: string) {
  const data = {
    id: uid,
    type: 'MSG_SEND',
    payload: {
      message: {
        to: login,
        text: msg,
      },
    },
  };
  socket.send(JSON.stringify(data));
}

function apiGetMsgsHistory(uid: string, userLogin: string) {
  const data = {
    id: uid,
    type: 'MSG_FROM_USER',
    payload: {
      user: {
        login: userLogin,
      },
    },
  };
  socket.send(JSON.stringify(data));
}

export { socket, apiLogIn, apiLogOut, apiGetActiveUsers, apiGetInactiveUsers, apiSendMsg, apiGetMsgsHistory };

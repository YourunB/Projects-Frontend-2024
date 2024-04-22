import { socket } from '..';

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

function apiSetDeliverMsg(idMsg: string) {
  const data = {
    id: null,
    type: 'MSG_DELIVER',
    payload: {
      message: {
        id: idMsg,
        status: {
          isDelivered: true,
        },
      },
    },
  };
  socket.send(JSON.stringify(data));
}

function apiSetReadMsg(idMsg: string) {
  const data = {
    id: null,
    type: 'MSG_READ',
    payload: {
      message: {
        id: idMsg,
      },
    },
  };
  socket.send(JSON.stringify(data));
}

function apiEditMsg(uid: string, idMsg: string, msg: string) {
  const data = {
    id: uid,
    type: 'MSG_EDIT',
    payload: {
      message: {
        id: idMsg,
        text: msg,
      },
    },
  };
  socket.send(JSON.stringify(data));
}

function apiDeleteMsg(uid: string, idMsg: string) {
  const data = {
    id: uid,
    type: 'MSG_DELETE',
    payload: {
      message: {
        id: idMsg,
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

export {
  socket,
  apiLogIn,
  apiLogOut,
  apiGetActiveUsers,
  apiGetInactiveUsers,
  apiSendMsg,
  apiGetMsgsHistory,
  apiSetDeliverMsg,
  apiSetReadMsg,
  apiEditMsg,
  apiDeleteMsg,
};

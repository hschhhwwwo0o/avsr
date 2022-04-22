import feathers, { Application, Service } from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";
import auth from "@feathersjs/authentication-client";

interface IFeathersClient {
  posters: Service<any>;
  users: Service<any>;
}

const socket: SocketIOClient.Socket = io("https://avsr-api.herokuapp.com/");
const apiClient: Application<IFeathersClient> = feathers();
apiClient.configure(
  socketio(socket, {
    timeout: 12000,
  })
);
apiClient.configure(auth());

export { apiClient };

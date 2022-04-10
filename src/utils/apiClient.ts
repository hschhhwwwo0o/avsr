import feathers, { Application, Service } from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";
import auth from "@feathersjs/authentication-client";

interface IFeathersClient {
  posters: Service<any>;
  users: Service<any>;
}

const socket = io("https://abiisr-api.herokuapp.com/");
const apiClient: Application<IFeathersClient> = feathers();

apiClient.configure(socketio(socket));
apiClient.configure(auth());

export default apiClient;

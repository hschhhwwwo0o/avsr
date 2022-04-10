import feathers, { Application } from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";
import auth from "@feathersjs/authentication-client";

const socket = io("https://abiisr-api.herokuapp.com/");
const apiClient: Application<any> = feathers();

apiClient.configure(socketio(socket));

apiClient.configure(auth());

export default apiClient;

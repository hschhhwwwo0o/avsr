import io from "socket.io-client";
import feathers from "@feathersjs/client";
import createApplication from "@feathersjs/feathers";

const socket: SocketIOClient.Socket = io("https://abiisr-api.herokuapp.com/");
const apiClient: createApplication.Application<any> = feathers();

apiClient.configure(feathers.socketio(socket));
apiClient.configure(feathers.authentication());

export default apiClient;

// @flow
import App from "fusion-react";
import Router from "fusion-plugin-react-router";
import Styletron from "fusion-plugin-styletron-react";
import { handlers } from "./api/plugins/send-api";
import Redux, { ReduxToken, ReducerToken } from "fusion-plugin-react-redux";
import RPC, { RPCToken, RPCHandlersToken } from "fusion-plugin-rpc";
import UniversalEvents, {
  UniversalEventsToken,
} from "fusion-plugin-universal-events";
import { createRPCReducer } from "fusion-plugin-rpc-redux-react";
import { FetchToken } from "fusion-tokens";
import root from "./root.jsx";

const reducer = createRPCReducer("sendEmail", {
  start: (state, action) => ({ ...state, loading: true }),
  success: (state, action) => ({ ...state, loading: false }),
  failure: (state, action) => ({ ...state, loading: false }),
});

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(Router);
  // app.register(SendApiPlugin);

  app.register(UniversalEventsToken, UniversalEvents);
  app.register(RPCToken, RPC);
  __NODE__
    ? app.register(RPCHandlersToken, handlers)
    : app.register(FetchToken, fetch);
  app.register(ReduxToken, Redux);
  app.register(ReducerToken, reducer);

  return app;
};

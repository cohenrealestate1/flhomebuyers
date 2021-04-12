// @flow
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
import Redux, { ReducerToken, ReduxToken } from "fusion-plugin-react-redux";
import Router from "fusion-plugin-react-router";
import RPC, { RPCHandlersToken, RPCToken } from "fusion-plugin-rpc";
import { createRPCReducer } from "fusion-plugin-rpc-redux-react";
import Styletron from "fusion-plugin-styletron-react";
import UniversalEvents, {
  UniversalEventsToken
} from "fusion-plugin-universal-events";
import App from "fusion-react";
import { FetchToken } from "fusion-tokens";
import { handlers } from "./api/plugins/send-api";
import root from "./root.jsx";

const reducer = createRPCReducer("sendEmailLead", {
  start: (state, action) => ({ ...state, loading: true }),
  success: (state, action) => ({ ...state, loading: false }),
  failure: (state, action) => ({ ...state, loading: false }),
});

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(Router);

  app.register(UniversalEventsToken, UniversalEvents);
  app.register(RPCToken, RPC);
  __NODE__
    ? app.register(RPCHandlersToken, handlers)
    : app.register(FetchToken, fetch);
  app.register(ReduxToken, Redux);
  app.register(ReducerToken, reducer);
  app.register(HelmetPlugin);

  return app;
};

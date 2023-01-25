import { createStore, createLogger } from "vuex";
import crypto from "./modules/crypto";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    crypto,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

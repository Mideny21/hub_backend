import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
} from "./common";

import { handleLogging } from "./logging";

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleLogging,
];

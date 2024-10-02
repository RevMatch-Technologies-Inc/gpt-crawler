import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.tacomaworld.com/threads/martin-offroad-rack.607328",
  match: "https://www.tacomaworld.com/threads/martin-offroad-rack.607328/**",
  // selector: `.messageList`,
  selector: '.messageContent',
  maxPagesToCrawl: 1,
  outputFileName: "output.json"
};

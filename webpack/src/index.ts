import { getConfig } from "./util";

export class FastPlugin {
  options: Record<string, any>
  constructor(options) {
    this.options = options
  }

  async init() {
    const config = await getConfig()
    console.log(config);
  }
}



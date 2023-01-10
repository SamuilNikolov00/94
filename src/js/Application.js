import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    this.addBananas();
    document.getElementById("emojis").textContent = this.emojis;
  }

  addBananas() {
    this.emojis= this.emojis.map(x=>x+this.banana);
  }
}

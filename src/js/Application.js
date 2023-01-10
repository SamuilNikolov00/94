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
    const p = document.createElement("p");
    p.textContent = this.emojis;
    document.getElementById("emojis").replaceChildren(p);
  }

  addBananas() {
    this.emojis = this.emojis.map(x=>x+this.banana);
  }
}

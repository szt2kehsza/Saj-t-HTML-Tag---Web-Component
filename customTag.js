class CustomClock extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: "open" });
  
      const template = document.createElement("template");
      template.innerHTML = `
        <style>
          :host {
            display: inline-block;
            font-family: Arial, sans-serif;
          }
  
          #clock {
            font-size: 24px;
            color: black;
          }
        </style>
        <div id="clock"></div>
      `;
  
      shadow.appendChild(template.content.cloneNode(true));
  
      this.clockDisplay = shadow.getElementById("clock");
    }
  
    connectedCallback() {
      this.updateClock();
      this.timer = setInterval(() => this.updateClock(), 1000);
    }
  
    disconnectedCallback() {
      clearInterval(this.timer);
    }
  
    updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      this.clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }
  }
  
  customElements.define("custom-clock", CustomClock);
  
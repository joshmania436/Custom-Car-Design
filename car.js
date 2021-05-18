AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "./assets/car/scene.gltf" },
    clickCounter: { type: "number", default: 0 },
  },
  init: function () {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  },
  update: function () {
    window.addEventListener("click", (e) => {
      this.data.clickCounter = this.data.clickCounter + 1;
      if (this.data.clickCounter == 1) {
        const rotation = { x: 0, y: 20, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 2) {
        const rotation = { x: 0, y: 50, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 3) {
        const rotation = { x: 0, y: 80, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 4) {
        const rotation = { x: 0, y: 110, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 5) {
        const rotation = { x: 0, y: 140, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 6) {
        const rotation = { x: 0, y: 170, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 7) {
        const rotation = { x: 0, y: 200, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 8) {
        const rotation = { x: 0, y: 230, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 9) {
        const rotation = { x: 0, y: 260, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 10) {
        const rotation = { x: 0, y: 290, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 11) {
        const rotation = { x: 0, y: 310, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 12) {
        const rotation = { x: 0, y: 340, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter == 13) {
        const rotation = { x: 0, y: 370, z: 0 };
        this.el.setAttribute("rotation", rotation);
        this.data.clickCounter = 0;
      }
    });
  },
});

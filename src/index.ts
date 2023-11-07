export class Log {
  static success(msg: string, color: string = "green") {
    console.log(`%c ${msg}`, "color: green");
  }

  static danger(msg: string, color: string = "red") {
    console.log(`%c ${msg}`, "color: red");
  }

  static info(msg: string, color: string = "black") {
    console.log(`%c ${msg}`, "color: black; background: yellow");
  }
}

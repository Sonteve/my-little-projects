import { scale, mediaPath } from "./utils/data";
import Piano from "./Piano";

export default class Controller {
  /* buttons: HTMLButtonElement[];
  audios: HTMLAudioElement[]; */
  constructor() {
    const buttonElements: HTMLButtonElement[] = scale.map((note, i) => {
      const button: HTMLButtonElement = document.createElement("button");
      button.setAttribute("data-index", String(i));
      console.log(note.split(""));
      button.innerHTML = note;
      return button;
    });
    const audioElements: HTMLAudioElement[] = scale.map((v, i) => {
      const audio: HTMLAudioElement = document.createElement("audio");
      audio.setAttribute("data-index", String(i));
      audio.setAttribute("src", `${mediaPath}/${scale[i]}.mp3`);
      return audio;
    });
    buttonElements.map((button) => document.body.appendChild(button));
    audioElements.map((audio) => document.body.appendChild(audio));
  }
  public init() {
    const piano = new Piano();
  }
}

export default class Piano {
  buttons: HTMLCollectionOf<HTMLButtonElement>;
  melodys: HTMLCollectionOf<HTMLAudioElement>;

  constructor() {
    this.buttons = document.getElementsByTagName("button");
    this.melodys = document.getElementsByTagName("audio");
    this.init();
  }

  private playSound(key: string) {
    const currentMelody = this.melodys[Number(key)];
    if (!currentMelody.paused) {
      currentMelody.pause();
    }
    currentMelody.play();
  }

  init() {
    Array.prototype.map.call(this.buttons, (btn: HTMLButtonElement) => {
      btn.addEventListener("click", (e: MouseEvent) => {
        const target = e.target as HTMLButtonElement;
        if (target.dataset && target.dataset.index) {
          this.playSound(target.dataset.index);
        }
      });
    });
  }
}

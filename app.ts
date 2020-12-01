/* const buttons = document.getElementsByTagName("button");
const melodys = document.getElementsByTagName("audio"); */
class Piano {
  buttons: HTMLCollectionOf<HTMLButtonElement>;
  melodys: HTMLCollectionOf<HTMLAudioElement>;

  constructor() {
    this.buttons = document.getElementsByTagName("button");
    this.melodys = document.getElementsByTagName("audio");
    this.initialize();
  }

  private playSound(key: string) {
    const currentMelody = this.melodys[Number(key)];
    if (!currentMelody.paused) {
      currentMelody.pause();
    }
    currentMelody.play();
  }

  private initialize() {
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

window.addEventListener("DOMContentLoaded", () => {
  const piano = new Piano();
});

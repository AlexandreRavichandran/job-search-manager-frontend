export abstract class AbstractNotificationMessageDisplayerComponent {
  public type: string = "";
  public content: string = "";
  public closed: boolean = true;
  constructor() { }

  protected generateError(type: string, content: string): void {
    this.closed = false;
    this.type = type;
    this.content = content;
  }

  public onClose(): void {
    this.closed = true;
  }
}

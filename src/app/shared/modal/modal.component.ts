import { ComponentType } from '@angular/cdk/portal';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export abstract class ModalComponent<T> {
  protected modalRef!: MatDialogRef<T, any>;
  protected datas: any;
  protected modalTitle: string = "";
  protected component!: ComponentType<T>;
  protected className!: T;
  constructor(protected modal: MatDialog) {
  }

  abstract getContentClass(): ComponentType<T>;

  open(): void {
    this.modalRef = this.modal.open(this.getContentClass(), {
      width: "800px",
      data: {
        title: this.modalTitle,
        ref: this.modalRef,
        datas: this.datas,
      },
    });
  }

  close(): void {
    this.modalRef.close();
  }

}

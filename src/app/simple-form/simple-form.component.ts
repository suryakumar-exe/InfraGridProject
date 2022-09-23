import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IgxGridComponent, RowType, Transaction } from 'igniteui-angular';
// interface DataItem {
//   id: string;
//   name: string;
//   header: boolean;
//   disabled: boolean;
// }
@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
})
export class SimpleFormComponent implements OnInit {
  @ViewChild('grid', { read: IgxGridComponent, static: true }) public grid: any;

  public data = [] as any;
  public discardedTransactionsPerRecord: Map<number, Transaction[]> = new Map<
    number,
    Transaction[]
  >();
  form: any;
  public items = [] as any;
  public dataBase = [] as any;
  public itemHeight = 48;
  public itemsMaxHeight = 240;
  title = 'List Of Members';
  constructor(private formBuilder: FormBuilder) {
    this.items = ['Customer', 'Vendor'];
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // email: [null, [Validators.required, Validators.email]],
      role: [null, Validators.required],
      fullName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
    });
  }
  onSubmit(event: any) {
    console.log(event.value);
    this.dataBase.push(event.value);
    console.log(this.dataBase);
  }
  public isDirty(rowContext: RowType) {
    const isRowEdited = this.grid.transactions
      .getAggregatedChanges(true)
      .find((x: any) => x.id === rowContext?.key);
    return rowContext && (rowContext.deleted || isRowEdited);
  }

  public isDeleted(rowContext: RowType) {
    return rowContext && rowContext.deleted;
  }

  public inEditMode(rowContext: RowType) {
    return rowContext && rowContext.inEditMode;
  }

  public startEdit(rowContext: any): void {
    const firstEditable = rowContext.cells.filter(
      (cell: any) => cell.editable
    )[0];
    const grid = rowContext.grid;

    if (grid.rowList.filter((r: any) => r === rowContext).length !== 0) {
      grid.gridAPI.crudService.enterEditMode(firstEditable);
      firstEditable.activate(null);
    }
  }

  public commit(rowContext: RowType) {
    this.grid.transactions.commit(this.grid.data, rowContext.key);
    this.discardedTransactionsPerRecord.set(rowContext.key, []);
  }

  public redo(rowContext: any) {
    // const rowID = rowContext.key;
    // const lastDiscarded = this.discardedTransactionsPerRecord.get(rowID);
    // lastDiscarded.forEach((transaction) => {
    //   const recRef = this.grid.gridAPI.get_rec_by_id(transaction.id);
    //   this.grid.transactions.add(transaction, recRef);
    // });
    // this.discardedTransactionsPerRecord.set(rowID, []);
  }

  public hasDiscardedTransactions(rowContext: RowType) {
    if (!rowContext) {
      return false;
    }
    const lastDiscarded = this.discardedTransactionsPerRecord.get(
      rowContext.key
    );
    return lastDiscarded && lastDiscarded.length > 0;
  }

  public undo(rowContext: RowType) {
    const transactionsToDiscard = this.grid.transactions
      .getAggregatedChanges(true)
      .filter((x: any) => x.id === rowContext.key);
    this.discardedTransactionsPerRecord.set(
      rowContext.key,
      transactionsToDiscard
    );
    this.grid.transactions.clear(rowContext.key);
  }
}

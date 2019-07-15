import { Component, Inject } from '@angular/core';
import { DataService, Product, ImageType } from './core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  images: ImageType;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  dialogData: Product = null;
 
  $products: Observable<any>;
  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) {
    
    this.$products = this.dataService.findProducts();
    this.$products.subscribe(products => {
      this.dialogData = products;
      console.log(products);
    });
  }


  openDialog(index: number): void {
    const currData = {name: this.dialogData[index].name,
      images: this.dialogData[index].images

    }
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '336px',
      height: '500px',
      data: currData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  

  title = 'ws-app';
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Product) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
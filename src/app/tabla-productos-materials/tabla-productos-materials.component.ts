import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
import { Product} from '../products'


@Component({
  selector: 'app-tabla-productos-materials',
  templateUrl: './tabla-productos-materials.component.html',
  styleUrls: ['./tabla-productos-materials.component.css']
})
export class TablaProductosMaterialsComponent implements OnInit {

  @Input() products;
  @Output() productoSeleccionado: EventEmitter<any>= new EventEmitter<any>();
  tableColumns  :  string[] = ['descripcion', 'precio'];

  constructor() { }

  ngOnInit(): void {
  }


  deleteProduct(unProducto:Product)
  {
    this.productoSeleccionado.emit(unProducto);
  }


}

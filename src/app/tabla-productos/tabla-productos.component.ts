import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product} from '../products'

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {
  @Input() products;
  @Output() productoSeleccionado: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


  deleteProduct(unProducto:Product)
  {
    this.productoSeleccionado.emit(unProducto);
  }


}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { BusquedaProductoComponent } from './busqueda-producto/busqueda-producto.component';

import { PRODUCTS } from './listaProductos';


const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'busqueda', component: BusquedaProductoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

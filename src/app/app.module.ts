import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import {MatTableModule} from '@angular/material/table';
import { TablaProductosMaterialsComponent } from './tabla-productos-materials/tabla-productos-materials.component';
import { BusquedaProductoComponent } from './busqueda-producto/busqueda-producto.component';

  
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TablaProductosComponent,
    TablaProductosMaterialsComponent,
    BusquedaProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

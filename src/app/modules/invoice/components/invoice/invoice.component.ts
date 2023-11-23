import { Component } from '@angular/core';

import { DtoInvoiceList } from '../../_dtos/dto-invoice-list';
import { Invoice } from '../../_models/invoice';
import { InvoiceService } from '../../_services/invoice.service';

import Swal from'sweetalert2'; // sweetalert
import { Router } from '@angular/router';

declare var $: any; // jquery

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  invoices: DtoInvoiceList[] = []; // lista de facturas

  constructor (
    private invoiceService: InvoiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getInvoices();
  }

  getInvoices(){
    this.invoiceService.getInvoices().subscribe(
      res => {
        this.invoices = res; // asigna la respuesta de la API a la lista de facturas
      },
      err => {
        // muestra mensaje de error
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          toast: true,
          showConfirmButton: false,
          text: err.error.message,
          background: '#F8E8F8',
          timer: 2000
        });
      }
    );
  }
}
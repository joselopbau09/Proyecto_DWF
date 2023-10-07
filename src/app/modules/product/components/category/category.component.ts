import { Component, OnInit } from '@angular/core';
import { Category } from '../../_models/category';
import { FormBuilder, Validators } from "@angular/forms";

declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  
  
  constructor (
    private formBuilder: FormBuilder,
  ){}

  public categories: Category[] = []; 

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories():void {
      this.categories.push(new Category(1, 'C001', 'Category 1', 'Activo'));
      this.categories.push(new Category(2, 'CX12', 'Category 2', 'Inactivo'));
      this.categories.push(new Category(3, 'AX24', 'Category 3', 'Inactivo'));
  }

  showModalForm():void {
    $("#modalForm").modal("show");
  }
}

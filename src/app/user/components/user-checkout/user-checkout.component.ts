import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.scss']
})
export class UserCheckoutComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {


  this.checkoutForm = this.builder.group({
    payment: [null, [Validators.required]], 
    number: this.builder.control("", [Validators.required, Validators.minLength(16)]),
    expiry: this.builder.control("", [Validators.required]),
    cvv: this.builder.control("", [Validators.required]),
    name: this.builder.control("", [Validators.required]),   
  });
}
}

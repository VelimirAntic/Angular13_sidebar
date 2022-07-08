import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { VendorComponent } from './vendor/vendor.component';
import { LandlordComponent } from './landlord/landlord.component';
import { TenantComponent } from './tenant/tenant.component';

const routes: Routes = [
  { path: 'buyer', component: BuyerComponent},
  { path: 'vendor', component: VendorComponent },
  { path: 'landlord', component: LandlordComponent },
  { path: 'tenant', component: TenantComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

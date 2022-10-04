import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Garden } from 'src/app/shared/model/creategarden.model';
import { GardenService } from 'src/app/shared/service/garden.service';

@Component({
  selector: 'app-gardens',
  templateUrl: './creategarden.component.html',
  styleUrls: ['./creategarden.component.css'],
  providers: [GardenService]
})


export class CreateGardenComponent implements OnInit {

  public gardenForm: FormGroup;
  private userLoggedIn = localStorage.getItem("userEmail") as any;

  constructor(private fb: FormBuilder, private service: GardenService) { }



  ngOnInit(): void {
    this.gardenForm = this.fb.group({
      userEmail: [this.userLoggedIn],
      linkTitle: ['', [Validators.required]],
      linkUrl: ['', [Validators.required]],
    })
  }


  createGarden() {
    this.service.createGarden(this.gardenForm.value).subscribe(e => console.log(e));
  }

}

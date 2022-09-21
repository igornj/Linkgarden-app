import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Garden } from 'src/app/shared/model/garden.model';
import { GardenService } from 'src/app/shared/service/garden.service';

@Component({
  selector: 'app-gardens',
  templateUrl: './gardens.component.html',
  styleUrls: ['./gardens.component.css'],
  providers: [GardenService]
})


export class GardensComponent implements OnInit {

  public gardenForm: FormGroup;
  public gardenList: Array<Garden>;

  constructor(private fb: FormBuilder, private service: GardenService) { }


  ngOnInit(): void {
    this.gardenForm = this.fb.group({
      linkTitle: ['', [Validators.required]],
      linkUrl: ['', [Validators.required]],
    })

    //this.findGardens();
  }


  createGarden() {
    const userId = localStorage.getItem("userId");
    if (userId) {
      this.service.createGarden(this.gardenForm.value, userId).subscribe(e => console.log(e));
    }
    //handle else case
  }

  findGardens() {
    const userId = localStorage.getItem("userId");
    if (userId) {
      this.service.findGardens(userId).subscribe(e => this.gardenList.push(e));
    }

    //handle else case

    console.log(this.gardenList);
  }

}

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../services/flowbite.service';


@Component({
  selector: 'app-mainlayout',
  imports: [RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss'
})
export class MainlayoutComponent implements AfterViewInit {

    private readonly plat_id=inject(PLATFORM_ID) 
  private readonly flowbiteService=inject(FlowbiteService);



    ngAfterViewInit(): void {
        
    if (isPlatformBrowser(this.plat_id)) {
      this.flowbiteService.loadFlowbite((flowbite)=>{})
           
    }
    }


}

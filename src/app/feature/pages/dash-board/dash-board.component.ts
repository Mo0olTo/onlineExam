import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent implements AfterViewInit { 

    private readonly plat_id=inject(PLATFORM_ID) 
  private readonly flowbiteService=inject(FlowbiteService);



    ngAfterViewInit(): void {
        
    if (isPlatformBrowser(this.plat_id)) {
      this.flowbiteService.loadFlowbite((flowbite)=>{})
           initFlowbite(); 
    }
    }

}

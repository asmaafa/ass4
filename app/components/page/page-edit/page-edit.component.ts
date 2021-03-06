import { Component, OnInit,ViewChild } from '@angular/core';
import { PageService } from '../../../services/page.service.client'
import { Page} from '../../../models/page.model.client'
import { ActivatedRoute, Router} from '@angular/router';
import { NgForm} from '@angular/forms'
@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
@ViewChild('f') pageForm: NgForm;
  
  pages: Page[];
  uid:string;
  wid:string;
  pid:string;
  name:string;
  description: string;
  page:Page;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute,private router:Router) { }


  

  ngOnInit() {
  
  this.activatedRoute.params.subscribe(params=>{

   	this.uid = params['uid'];
   	this.wid = params['wid'];
   	this.pid = params['pid'];
    this.page = this.pageService.findPageById(this.pid);
    this.name = this.page.name;
    this.description= this.page.description;
 
  });

}

update(){
this.name = this.pageForm.value.name;
    this.description = this.pageForm.value.description;
    const updatedpage: Page = {
    	_id:this.pid,
    	name:this.name,
    	websiteId: this.wid,
    	description: this.description,
    }

      
     this.pageService.updatePage(this.pid,updatedpage );
     this.router.navigate(['user',this.uid,'website']);
}

remove(){

   this.pageService.deletePage(this.pid);
   this.router.navigate(['user',this.uid,'website']);
  }
}

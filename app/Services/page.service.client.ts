import { Injectable } from '@angular/core';
import{ Page } from '../models/page.model.client'
// injecting service into module
@Injectable()

export class PageService {

  constructor() { }

pages:Page[] = [
	{ _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
]

  createPage(websiteId: string,page:Page) {
    page._id = Math.floor(Math.random()*Math.floor(10000)).toString();
    page.websiteId = websiteId;
    this.pages.push(page);

    return page;
  }

  findPageByWebsiteId(websiteId: string) {
    var result=[];
    for (let z = 0; z < this.pages.length; z++) {
      if (this.pages[z].websiteId === websiteId) {  
       
        result.push(this.pages[z]); }
    }
       return result;
  }


  findPageById(pageId: string) { 
    for (let z=0; z< this.pages.length; z++){
      if (this.pages[z]._id=== pageId) {
       return this.pages[z];
      }
    } 
  

    }
  
  updatePage(pageId: string, page: Page) {
      var oldpage = this.findPageById(pageId);
      var index = this.pages.indexOf(oldpage);

      this.pages[index].name = page.name;
      this.pages[index].description = page.description;
     

   }
  deletePage(pageId: string) { 
     var oldpage = this.findPageById(pageId);
       var index = this.pages.indexOf(oldpage);
        this.pages.splice(index,1)


    }
}

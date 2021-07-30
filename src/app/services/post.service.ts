import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = "https://jsonplaceholder.typicode.com/posts";
  private posts: any[];

  constructor(private http: HttpClient) {
    this.posts = [];
   }
   
get(){
   return this.http.get(this.url);
}


create(post:any) {
  return this.http.post(this.url ,JSON.stringify(post));

}

update( post: any) {

return this.http.patch(this.url + '/' + post.id ,JSON.stringify(post),)
}
delete(post:any){
  return this.http.delete(this.url + '/' + post.id);
}







}

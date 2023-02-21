import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tibby';
  displayName:string = ""
  displayEmail:string = ""
  isDisplayed:boolean = false
  src1 = "https://tibbyco.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5d0a5a49-778f-4345-b595-07d8a52e246f%2Fstar.jpg?id=9c71ad25-ce2e-49eb-a0f1-ff6b8583dcca&table=block&spaceId=7564e478-5428-42c3-9994-1884fd3250a5&width=2000&userId=&cache=v2"
  src2 = "https://tibbyco.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31d56967-5bff-4d6c-bb99-45f95a5aedbd%2Ftibby-call.svg?id=28ce29a1-2a1e-4af4-ba75-1d2d4a29c87f&table=block&spaceId=7564e478-5428-42c3-9994-1884fd3250a5&userId=&cache=v2"
  src3 = "https://tibbyco.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31d56967-5bff-4d6c-bb99-45f95a5aedbd%2Ftibby-call.svg?id=28ce29a1-2a1e-4af4-ba75-1d2d4a29c87f&table=block&spaceId=7564e478-5428-42c3-9994-1884fd3250a5&userId=&cache=v2"
  src4 = "https://tibbyco.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba0497ab-5e96-471e-a496-a617a49a83da%2Fcash.jpg?id=84c9f6e7-0aec-4869-a7ba-049e6571e272&table=block&spaceId=7564e478-5428-42c3-9994-1884fd3250a5&width=2000&userId=&cache=v2"

  getName(val:string){
    this.displayName = val
  }
  getEmail(val:string){
    this.displayEmail = val
  }
  sendInfos(){
    console.warn(this.displayName, this.displayEmail)
  }
  displayForm(){
    this.isDisplayed = !this.isDisplayed
  }
}

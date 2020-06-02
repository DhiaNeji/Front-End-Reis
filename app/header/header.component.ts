import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { WebSocketServiceService } from '../web-socket-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cookieData=['aa','cc']
  notifications:Array<any>
  notif
  notifications_nbr=5
  constructor(public service:ServiceService,private webSocketService:WebSocketServiceService) {
    let stompClient = this.webSocketService.connect();

    stompClient.connect({}, frame => {

        stompClient.subscribe('/topic/notification', notifications => {
            console.log(notifications.body)
            this.notifications.pop()
            this.notifications.unshift(JSON.parse(notifications.body))
            this.notifications_nbr++
          })

    });
   }

  ngOnInit(): void {
    this.service.get_notifications().subscribe(res=>
      {
        this.notifications=res
        console.log(res.length)
        this.notifications_nbr=5
      })
  }
  onClickMe()
  {
this.notifications_nbr=0;
}
}

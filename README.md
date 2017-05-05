# ISCAP Final Project

This is our final project for **CIDM 4385**

1. Homepage
2. Lost and Found
3. Messages
4. Schedule
5. Favorites

[Ionic Creator Tutorials//Theming & SCSS](https://www.youtube.com/watch?list=PLOMESIqyrpf-rpNjFGzuCoTwNdv_-PUD1&v=IYJyA90KqWc)

```html
<ion-view title="Schedule" id="page3" style="background-color:#000000;">
  <ion-content padding="true" class="has-header">
    <div id="schedule-markdown10" style="text-align:center;" class="show-list-numbers-and-dots">
      <p style="color:#FF0000;font-size:20px;">April 24th, 2018</p>
    </div>
    <ion-list id="schedule-list3">
      <ion-item id="schedule-list-item15" ui-sref="menu.eventInformation({&quot;eventId&quot;:&quot;&quot;+event.eventId+&quot;&quot;})" ng-repeat="event in events  | filter: {date: &quot;04/24/18&quot;}" class="babb">{{event.eventTitle}}</ion-item>
    </ion-list>
    <div id="schedule-markdown11" class="show-list-numbers-and-dots">
      <p style="color:#000000;"> </p>
    </div>
    <div id="schedule-markdown9" style="text-align:center;" class="show-list-numbers-and-dots">
      <p style="color:#FF0000;font-size:20px;">April 25th, 2018</p>
    </div>
    <ion-list id="schedule-list6">
      <ion-item id="schedule-list-item14" ui-sref="menu.eventInformation({&quot;eventId&quot;:&quot;&quot;+event.eventId+&quot;&quot;})" ng-repeat="event in events  | filter: {date: &quot;04/25/18&quot;}" class="babb">{{event.eventTitle}}</ion-item>
    </ion-list>
  </ion-content>
</ion-view>
```
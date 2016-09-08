import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SQLite } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/handler/handler.html',
})
export class HandlerPage {

  public database: SQLite;
  public handler: Array<Object>;

  constructor(private navCtrl: NavController, private platform: Platform) {
    this.database = new SQLite();
    this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
      this.refresh();
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

  public add() {
      this.database.executeSql("INSERT INTO handler (firstname, lastname) VALUES ('Nic', 'Raboy')", []).then((data) => {
          console.log("INSERTED: " + JSON.stringify(data));
      }, (error) => {
          console.log("ERROR: " + JSON.stringify(error.err));
      });
  }

  public refresh() {
      this.database.executeSql("SELECT * FROM handler", []).then((data) => {
          this.handler = [];
          if(data.rows.length > 0) {
              for(var i = 0; i < data.rows.length; i++) {
                  this.handler.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
              }
          }
      }, (error) => {
          console.log("ERROR: " + JSON.stringify(error));
      });
  }  

}

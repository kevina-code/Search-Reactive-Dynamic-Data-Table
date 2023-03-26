/**
 * Author     : Kevin Antonioli (braveitnow@pm.me)
 * Description: search box that dynamically and reactively drives a lightning datatable
 * Created    : 03.26.2023
 */
import { LightningElement, api } from "lwc";

export default class DynamicDataTableWithSearch extends LightningElement {
  @api recordId;

  // target configs:
  @api title;
  @api iconName;
  @api objApiName;
  @api fieldApiNames;
  @api whereClause;
  @api actionsStr;

  recordResults = [];
  recordResultsLength;
  recordData = [];

  handleSearchedRecords(event) {
    this.recordResults = [...event.detail.searchResultRecords];
    let tempRecList = [];
    this.recordResults.forEach((record) => {
      let tempRec = Object.assign({}, record);
      tempRec.RecName = "/" + tempRec.Id;
      tempRecList.push(tempRec);
    });
    this.recordData = tempRecList;
    this.recordResultsLength = this.recordResults.length;
  }
}
/**
 * Author     : Kevin Antonioli (braveitnow@pm.me)
 * Description: search box that dynamically and reactively drives a lightning datatable
 * Created    : 03.26.2023
 */
import { LightningElement, api } from "lwc";

export default class DynamicDataTableWithSearch extends LightningElement {
  @api recordId;
  @api hasLoaded;

  // target configs:
  @api title;
  @api iconName;
  @api objApiName;
  @api fieldPaths;
  @api fieldPathsForSearch;
  @api whereClause;
  @api hideCheckboxColumn;
  @api actionsStr;

  searchResultRecordsLength;
  recordData = [];
  linkifiedColumns = [];
  selectedRows = [];

  handleSearchedRecords(event) {
    this.hasLoaded = false;
    this.recordData = [...event.detail.searchResultRecords];
    this.linkifiedColumns = [...event.detail.linkifiedColumns];
    this.searchResultRecordsLength = this.recordData.length;
    this.hasLoaded = true;
  }

  handleRowsToggled(event) {
    this.selectedRows = event.detail.selectedRows;
  }
}
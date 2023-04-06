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
  @api suppressBottomBar;

  recordData = [];
  linkifiedColumns = [];
  selectedRows = [];
  selectedRowIds = [];
  saveDraftValues = [];
  colHeaderToFieldApiName = {};
  colHeaderToFieldType = {};

  handleSearchedRecords(event) {
    this.recordData = [...event.detail.searchResultRecords];
    this.linkifiedColumns = [...event.detail.linkifiedColumns];
    this.colHeaderToFieldApiName = { ...event.detail.colHeaderToFieldApiName };
    this.colHeaderToFieldType = { ...event.detail.colHeaderToFieldType };

    const selectedRowIdsFromThisSearch = this.selectedRows.map((row) => row.Id);
    const rowIds = this.selectedRowIds.concat(selectedRowIdsFromThisSearch);
    this.selectedRowIds = [...new Set(rowIds)];
  }

  handleRowsToggled(event) {
    this.selectedRows = [...event.detail.selectedRows];
  }

  handleCellChanged(event) {
    this.saveDraftValues = [...event.detail.saveDraftValues];
  }
}
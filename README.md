# Search-Reactive-Dynamic-Data-Table
Search-reactive dynamic data table - object agnostic and easily configurable
* Leverages [lightning-datatable](https://developer.salesforce.com/docs/component-library/bundle/lightning-datatable/example)
* Object-agnostic - can be used with any standard or custom object
* Easily configurable - just configure the parameters with desired object name, fields, where clause, etc
* Reusable - configure multiple instances across objects without updating the code
* Ability to use dynamic id fields in optional where clause
* Ability to configure multiple search fields (not just Name) to bind to lookup search query
* Ability to display other fields (like Email and Phone for example) in the search results
* Reusable - no need to edit the code, just adjust config parameters
* Also supports inline editing of picklist fields and lookup fields

Deploy to salesforce: https://live.playg.app/play/reactive-dynamic-data-table

Syntax:
```html
<c-dynamic-data-table-with-search
    title="Contact lookup/selection"
    icon-name="standard:contact"
    obj-api-name="Contact"
    field-paths="Id, Name, Phone, Email"
    field-paths-for-search="Name, Email"
    where-clause="AccountId = :recordId ORDER BY Name"
    actions-str="view, edit"
    hide-checkbox-column="false"
    record-id={recordId}
    placeholder="Lookup record..."
    onrowstoggled={rowToggleHandler}
   >
</c-dynamic-data-table-with-search>
```

--------------------------------

https://user-images.githubusercontent.com/124932501/231553242-1c81fa8a-0aa0-420d-823e-29b865a2b726.mp4

--------------------------------

![Dynamic DataTable with search config](https://user-images.githubusercontent.com/124932501/231553105-fd7e104b-0f0d-4efe-9b73-be5e9d174695.png)

--------------------------------

![Dynamic DataTable with search ex](https://user-images.githubusercontent.com/124932501/231553136-c85e3aef-e11e-4311-a24c-1d973890e66e.png)

--------------------------------

![Dynamic DataTable with search ex 2](https://user-images.githubusercontent.com/124932501/231553149-783be5ef-0444-427d-ae8a-133e3764e617.png)

--------------------------------

![Data Table with search flow config](https://user-images.githubusercontent.com/124932501/231553448-f767478f-c984-433f-b73a-d534103cb8fd.png)


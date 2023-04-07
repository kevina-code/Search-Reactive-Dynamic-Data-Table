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

https://user-images.githubusercontent.com/124932501/230435278-13fc8fe4-9339-49b7-91e0-f42725d43112.mp4

--------------------------------

![image](https://user-images.githubusercontent.com/124932501/229316105-ae37e46f-f76a-4e92-b491-b78bfcac6127.png)

--------------------------------

![image](https://user-images.githubusercontent.com/124932501/229316126-d00f6f68-e621-4845-af72-7ff8e5543f89.png)

--------------------------------

![image](https://user-images.githubusercontent.com/124932501/229316134-97d17df6-678c-4c85-a8c9-7ec2324febff.png)

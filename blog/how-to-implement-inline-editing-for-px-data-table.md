---
published: true
cover: /post-images/team-picture-from-hackathon3.jpg
date: '2017-06-28'
title: How-to Implement Inline Editing for px data table
category: Tech
tags:
  - polymer
  - predix
  - javascript
---
From June 12th to June 23rd, our team was part of another hackathon to accelerate product development. It was a blast!! During the two weeks, I was on a team of three to implement an app for our manufacturing shops.

The energy of the environment was full of determination, learning, support, and fun. We helped each other to get through challenges quickly by leveraging others' expertise, which resulted in less roadblocks and more results!

During the two weeks, I wanted to use inline editing for the [px-data-table](https://www.predix-ui.com/#/components/px-data-table/) and thought I'd share the solution developed in the short time with anyone who wanted to utilize it.

The code example below was taken from the original code, then edited to generic naming conventions. I didn't test it with the new naming, so please excuse if I missed any small errors. I encourage you not to copy and paste code in your development practices anyway :).

## Background Info:

### Table Component:

Starting with the overall table component, as you can see from the documentation it has the following use case:

> "The Data Table component is useful for displaying tabular data, and provides more functionality than a simple table. Users can sort ascending or descending on each column, filter within columns using simple search, select one or more rows, and edit data in-line with input validation. Rows are automatically paginated, but the user can select the number of rows to display in a single page. Cell borders can be configured by the developer to show up horizontally, vertically, or both."

I chose it to do just that, show a simple table for users to easily configure relevant settings for the dashboard view. I two-way-bound a computed array based on a full array of data to format it according to the columns configured.

### Column Component:

At the top left of the Predix UI component's page, select the px-data-table-column from the drop down. There you will see the configuration option for editable, letting user's edit the column of data.

```html
<px-data-table id="dataTable"
   table-data="{{_data}}"
   striped="true"
   table-rows="true"
   filterable="true"
   sortable="true">
      <px-data-table-column
       name="id"
       hide>
      </px-data-table-column>
      <px-data-table-column
         name="character"
         label="Character Name"
         editable
         filterable
         sortable>
      </px-data-table-column>
      <px-data-table-column
         name="powerLevel"
         label="Character Power Level"
         editable
         filterable sortable>
      </<px-data-table-column>
</px-datatable>
```

### Listening For Events

Now that we have the data table in our html, we need to look for events that are thrown to capture data changes on the table.

The documentation lists 3, but only one is relevant for the edits:

"px-cell-click" : "Fired when a cell is clicked in the table.

If the cell is not editable or of type 'dropdown', px-row-click will also be fired. Cell information is stored in evt.detail.

###### Challenge

When a user clicks in the cell of a table, then we are able to see which one they clicked on and its information stored there.

The challenge I saw here, is what if the user clicks, waits 10 seconds, then types their edits?

The changes would be lost because the event would fire on the click, not on the change.

###### Solution:

This led me to listen for a second event for the table: the "change" event. I used a debounce here as it was catching typing change.


_SN - I had a weak mapping issue pop up when trying to listen directly on the table, thankfully I was using px-inbox as well and was able to set the listener there instead. If you try this solution - let me know what you find!_

Due to the time box of the hackathon, I wasn't able to look into it further.

```javascript
listeners: { 'px-cell-click': '_updateData' }, /** * Attach listeners */

attached: function() {
this.listen(this.$.dataTable, 'change', '_updateData');
},

/** * Detach listeners */
detached: function() {
this.unlisten(this.$.dataTable, 'change', '_updateData');
}
```

### Update Data:

The logic I used for the actual update was based on the type of event. When px-cell-click was fired, this gave me an opportunity to store which cell the user was in.

The change event doesn't give this info, but gives the value of the change. Since a user must click in the cell, then make a change, I first set the selected column and row on the click event, then set the update value on the change event.

There were two properties I defined for the function below: _selectedRow and _selectedCol.

```javascript
/**
   * Update data on px table changes
   * @param {Object} e - the event raised from the px table
*/
_updateDtata: function(e) {
//handle scoping var _this = this;

   // on cell click, set selected row and column
   if (e && e.type === 'px-cell-click') {
      _this._selectedRow = e.detail.row.row;
      _this._selectedCol = e.detail.column;
   } else if (e && e.type === 'change') {
      // set new value on this row for the column selected using lodash function
      // validation is used by px data table - you can implement logic if needed
      _.set(
         _this._selectedRow,
         [_this._selectedCol.name],
         { 'value': e.target.value, '_validation': {'passedValidation': true} }
      );
   else {
      // e wasn't defined or unknown event type return;
   }

   // update data in DB
   _this.dataService.updatePowerLevel({
      id: parseInt(_this._selectedRow.id.value, 10),
      character: _this._selectedRow.character.value,
      powerLevel: parseInt(_this._selectedRow.powerLevel.value, 10),
   }).then(function(response) {
      // one of our utility components for user messages
      _this.$.userUtility.alert('Success', 'Successfully updated power level.');
   }, function(error) {
      if (error.message) {
         try {
            var parsedMessage = JSON.parse(error.message);
            _this.$.userUtility.alert('Error', parsedMessage.message);
          } catch (e) {
            _this.$.userUtility.alert('Error', 'There was an error updating data.');
          }
       } else {
          _this.$.userUtility.alert('Error', 'There was an error updating data.');
       }
    });

    // update data in view
    var idx = _.findIndex(_this.data, function(item) {
       return item.id === _this._selectedRow.id.value;
    }

    if (idx > -1) {
       this._data[idx].character= _this._selectedRow.character.value;
       this._data[idx].powerLevel= parseInt(_this._selectedRow.powerLevel.value, 10);

       // get table to redraw with override of dirty checking
       var tmpData = _this._data; _this.set('_data', []);
       _this.set('_data', tmpData);
    }
  }
}
```

### Conclusion

I'll be looking to go back through the code when revisiting this project for its release soon. In the mean time - please let me know if you have any suggestions on improvements or if you find it helpful!

Thanks for reading and Happy Coding!!

Kaleb McKelvey

jQuery.extend(jQuery.jgrid.defaults, { persistentSelection: []});
jQuery.jgrid.extend({
    persistSelection: function () {
        var onSelectRowProxy = jQuery(this).jqGrid('getGridParam', 'onSelectRow');
        var onSelectAllProxy = jQuery(this).jqGrid('getGridParam', 'onSelectAll');
        var gridCompleteProxy = jQuery(this).jqGrid('getGridParam', 'gridComplete');
        jQuery(this).jqGrid('setGridParam', {
            'onSelectRow': function (rowId, status) {
                if (!!onSelectRowProxy)
                    onSelectRowProxy.apply(this, arguments);
                var persistentSelection = jQuery(this).jqGrid('getGridParam', 'persistentSelection');
                if (status) {
                    persistentSelection.push(rowId);
                } else {
                    var inArray = jQuery.inArray(rowId, persistentSelection);
                    if (inArray > -1) {
                        persistentSelection.splice(inArray, 1);
                    }
                }
                jQuery(this).jqGrid('setGridParam', { 'persistentSelection': persistentSelection });
            },
            'onSelectAll': function (aRowIds, status) {
                if (!!onSelectAllProxy)
                    onSelectAllProxy.apply(this, arguments);
                var persistentSelection = jQuery(this).jqGrid('getGridParam', 'persistentSelection');
                if (status) {
                    jQuery.each(aRowIds, function (i, v) {
                        var inArray = jQuery.inArray(v, persistentSelection);
                        if (inArray == -1) {
                            persistentSelection.push(v);
                        }
                    });
                } else {
                    jQuery.each(aRowIds, function (i,v) {
                        var inArray = jQuery.inArray(v, persistentSelection);
                        if (inArray > -1) {
                            persistentSelection.splice(inArray, 1);
                        }
                    });
                }
                jQuery(this).jqGrid('setGridParam', { 'persistentSelection': persistentSelection });
            },
            'gridComplete': function () {
                if (!!gridCompleteProxy) {
                    gridCompleteProxy.call(this, arguments);
                }
                var persistentSelection = jQuery(this).jqGrid('getGridParam', 'persistentSelection');
                var currentIds = jQuery(this).jqGrid('getDataIDs');
                var grid = jQuery(this);
                grid.jqGrid('resetSelection');
                jQuery.each(currentIds, function (i, v) {
                    if ($.inArray(v, persistentSelection) > -1) {
                        grid.jqGrid('setSelection', v, false);
                    }
                });
            }
        });
    }
});
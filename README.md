# jqGrid.persistentSelection

Persist selections through page navigations on jqGrid and selections can be accessed through the grid option `persistentSelection`.

checkout the demo [here][Demo].

# Usage

	$("#jgGridTable").jqGrid({
		usualOptions: ...	
	});
	$("#jgGridTable").jqGrid('persistSelection'); // initialize persistence behaviour

	var selectionsThroughPages = $("#jgGridTable").jqGrid('persistentSelection')	

# Things to watchout for

`persistSelection` forwards the `onSelectRow`, `onSelectAll`, `gridComplete` events to handlers if there were any.

Set up these event handlers *before* calling `persistSelection`, as persistentSelection hooks on to these events to track the selections, or manually ensure the handler setup by `persistSelection` is chained.


[Demo]: http://padwan-ragavan.github.io/jqGrid.persistentSelection/  "jqGrid persistentSelection demo"
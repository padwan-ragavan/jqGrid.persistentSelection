# jqGrid.persistentSelection

Persist selections through page navigations on jqGrid and selections can be accessed through the grid option `persistentSelection`.

# Usage

	$("#jgGridTable").jqGrid({
		usualOptions: ...	
	});
	$("#jgGridTable").jqGrid('persistSelection'); // initialize persistence behaviour

	var selectionsThroughPages = $("#jgGridTable").jqGrid('persistentSelection')	

# Things to watchout for

Set up the `onSelectRow`, `onSelectAll`, `gridComplete` *before* calling `persistSelection`, as persistentSelection hooks on to these events to track the selections. However, it does forward the events to these delegates if there were any.
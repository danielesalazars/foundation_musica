$(document).foundation()

$("[data-toggle-dia]").click(function(event) {
	const panel = $(this).data("toggleDia");
	$("#lineup-tabs").foundation('selectTab',panel);
})

var calendar = {
	header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>",
	displayCalendar: fuction() {
		var ele = document.getElementById("calendar");
		var calendarText = "<table class = 'table table-condensed'>";
		calendarText += this.header;
		for (var i = 1; i <= 31; i++){
			//
			<table class="table">
				<tr>
					<td>i<td>
				</tr>
			</table>
		}
		calendarText += "</table>"
		ele.innerHTML = calendarText;
	}
};
calendar.displayCalendar();
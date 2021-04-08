function is_connected_html()
{
	var html = 	"<div class='heading_font'>is_Connected</div>" +
				"<div class='code_font bigger indent_1'>" +
					"Boolean is_Connected()" +
				"</div>" +

				"<div class='heading_font'>Description</div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"Pings the Database Server Connection and returns True upon a valid connection and False upon failure." +
				"</div>" +

				"<div class='heading_font'>Return Value</div>" +
				"<div class='text_font indent_1 bottom_space_1'>Value: <span class='inline_code_font'>Boolean</span></div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"Returns <span class='inline_code_font'>True</span> upon a valid Server Connection and <span class='inline_code_font'>False</span> upon failure." +
				"</div>" +

				"<div class='heading_font'>Example</div>" +
				"<div class='text_font indent_1 bottom_space_1'><i>Code:</i></div>" +
				"<div class='code_font indent_2 bottom_space_1'>" +
					"&lt;?php\n" +
						"\trequire_once(\"./your_folder/database.php\");\n\n" +
						"\t$my_database\t= new Database(); <i>//Configured using 'database.cfg'.</i>\n" +
						"\t$is_connected\t= $my_database->is_connected();\n\n" +
						"\tif($is_connected)\n" +
							"\t\techo \"The Database Connection is Valid.\";\n" +
						"\telse\n" +
							"\t\techo \"The Database Connection is Invalid.\";\n" +
				"</div>";

	return html;
}
function set_database_html()
{
	var html = 	"<div class='heading_font'>Set_Database</div>" +
				"<div class='code_font bigger indent_1'>" +
					"void Set_Database(String $database_name)" +
				"</div>" +

				"<div class='heading_font'>Description</div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"Verifies the new database using the current Server, Server_Port, Username and Password. " +
					"Upon successful verification, the new database is set to the target database and 'True' is returned. " +
					"Upon failure of verification, an error message is displayed and 'False' is returned. " +
				"</div>" +

				"<div class='heading_font'>Parameters</div>" +
				"<div class='code_font indent_1 bottom_space_1'>" +
					"database_name" +
				"</div>" +
				"<div class='text_font indent_2 bottom_space_2'>" +
					"The name of the new database of type String." +
				"</div>" +

				"<div class='heading_font'>Return Value</div>" +
				"<div class='text_font indent_1 bottom_space_1'>Value: <span class='inline_code_font'>Boolean</span></div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"Upon success, the new database is set to the target database and <span class='inline_code_font'>True</span> is returned. " +
					"Upon failure of verification, an error message is displayed and <span class='inline_code_font'>True</span> is returned." +
				"</div>" +

				"<div class='heading_font'>Example</div>" +
				"<div class='text_font indent_1 bottom_space_1'><i>Code:</i></div>" +
				"<div class='code_font indent_2 bottom_space_2'>" +
					"&lt;?php\n" +
						"\trequire_once(\"./your_folder/database.php\");\n\n" +
						"\t$my_database = new Database(); <i>//Configured using 'database.cfg'.</i>\n\n" +
						"\t$database_name \t= \"My_New_Database\";\n" +
						"\t$successful \t= $my_database->Set_Database($database_name);\n" +
				"</div>";

	return html;
}
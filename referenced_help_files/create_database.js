function create_database_html()
{
	var html = 	"<div class='heading_font'>Create_Database</div>" +
				"<div class='code_font bigger indent_1'>" +
					"void Create_Database(String $database_name)" +
				"</div>" +

				"<div class='heading_font'>Description</div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"<div class='heading_font_smaller indent_2 bottom_space_1'><i>MySql:</i></div>" +
					"<div class='text_font indent_3 bottom_space_1'>" +
						"Creates a new database given a valid Server, Server Port, Username and Password. " +
					"</div>" +
					"<div class='heading_font_smaller indent_2 bottom_space_1'><i>PostgreSQL:</i></div>" +
					"<div class='text_font indent_3 bottom_space_2'>" +
						"Creates a new database given a valid Server, Server Port, Username, Password and Existing Database. " +
					"</div>" +
					"<div class='text_font indent_2'>" +
						"Upon success, the new database is set as the target database for the Database Wrapper instance and " +
						"'True' is returned. " +
						"If creation of the new database fails, error messages are displayed and 'False' is returned." +
					"</div>" +
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
						"Upon success, the new database is set as the target database for the Database Wrapper instance and " +
						"<span class='inline_code_font'>True</span> is returned. " +
						"If creation of the new database fails, error messages are displayed and <span class='inline_code_font'>False</span>" +
						" is returned." +
				"</div>" +
				"<div class='heading_font'>Example</div>" +
				"<div class='text_font indent_1 bottom_space_1'><i>Code:</i></div>" +
				"<div class='code_font indent_2 bottom_space_2'>" +
					"&lt;?php\n" +
						"\trequire_once(\"./your_folder/database.php\");\n\n" +
						"\t$my_database = new Database(); <i>//Configured using 'database.cfg'.</i>\n\n" +
						"\t$database_name \t= \"My_New_Database\";\n" +
						"\t$successful \t= $my_database->Create_Database($database_name);\n" +
				"</div>";

	return html;
}
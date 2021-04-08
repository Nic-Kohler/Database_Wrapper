function setup_html()
{
	var html = 	"<div class='text_font bottom_space_1'>" +
					"<span class='bullet'>1.</span>Copy files \"database.php\" and \"database.cfg\" to a folder of your choice.<br>" +
					"<span class='bullet'>2.</span>Include the PHP Database Wrapper Script to your desired php file:" +
				"</div>" +
				"<div class='code_font bottom_space_1'>" +
					"\t&lt;?php\n" +
					"\t\trequire_once('./your_folder/database.php')\n" +
					"\t\t...\n" +
				"</div>" +

				"<div class='text_font bottom_space_2'>" +
					"<span class='bullet'>3.</span>Configure the Database Wrapper Script:" +
				"</div>" +
				"<div class='heading_font bottom_space_1 indent_1'>" +
					"Configuration variables:" +
				"</div>" +

				"<div class='code_font indent_2 bottom_space_1'>" +
					"Server_Type" +
				"</div>" +
				"<div class='text_font indent_3 bottom_space_1'>Variable Type: <span class='inline_code_font'>String</span></div>" +
				"<div class='text_font indent_3 bottom_space_1'>" +
					"Your database server type (\"MySql\" or \"PostgreSQL\")." +
				"</div>" +
				"<div class='code_font indent_2 bottom_space_1'>" +
					"Server" +
				"</div>" +
				"<div class='text_font indent_3 bottom_space_1'>Variable Type: <span class='inline_code_font'>String</span></div>" +
				"<div class='text_font indent_3 bottom_space_1'>" +
					"The domain, url or server address where your database is hosted." +
				"</div>" +
				"<div class='code_font indent_2 bottom_space_1'>" +
					"Server_Port" +
				"</div>" +
				"<div class='text_font indent_3 bottom_space_1'>Variable Type: <span class='inline_code_font'>Integer</span></div>" +
				"<div class='text_font indent_3 bottom_space_1'>" +
					"The port number of the server that your database is configured to." +
				"</div>" +
				"<div class='code_font indent_2 bottom_space_1'>" +
					"Username" +
				"</div>" +
				"<div class='text_font indent_3 bottom_space_1'>Variable Type: <span class='inline_code_font'>String</span></div>" +
				"<div class='text_font indent_3 bottom_space_1'>" +
					"The database account Username." +
				"</div>" +
				"<div class='code_font indent_2 bottom_space_1'>" +
					"Password" +
				"</div>" +
				"<div class='text_font indent_3 bottom_space_1'>Variable Type: <span class='inline_code_font'>String</span></div>" +
				"<div class='text_font indent_3 bottom_space_1'>" +
					"The database account password." +
				"</div>" +
				"<div class='code_font indent_2 bottom_space_1'>" +
					"Database_Name" +
				"</div>" +
				"<div class='text_font indent_3 bottom_space_1'>Variable Type: <span class='inline_code_font'>String</span></div>" +
				"<div class='text_font indent_3 bottom_space_2'>" +
					"The name of the database you wish to connect to." +
				"</div>" +

				"<div class='heading_font bottom_space_1 indent_1'>" +
					"Option 1 – Using the Configuration File:" +
				"</div>" +
				"<div class='text_font bottom_space_1 indent_2'>" +
					"In a text editor, Edit “database.cfg” and update the file using your server and database settings." +
				"</div>" +
				"<div class='text_font bottom_space_1 indent_2'>" +
					"Configuration file format:" +
				"</div>" +

				"<div class='code_font bottom_space_2 indent_3'>" +
					"{\n" +
						"\t\"Server_Type\":\t\t\"MySql\",\n" +
						"\t\"Server\":\t\t\t\"www.mydomain.com\",\n" +
						"\t\"Server_Port\":\t\t3306,\n" +
						"\t\"Username\":\t\t\t\"database_user\",\n" +
						"\t\"Password\":\t\t\t\"user_pa55w0rd\",\n" +
						"\t\"Database_Name\":\t\"my_database_name\"\n" +
					"}" +
				"</div>" +

				"<div class='text_font bottom_space_1 indent_2'>" +
					"Instantiation of the Database Wrapper Class using this method of configuration:" +
				"</div>" +

				"<div class='code_font bottom_space_2 indent_3'>" +
					"&lt;?php\n" +
					"\trequire_once(\"./your_folder/database.php\");\n\n" +
					"\t$my_database = new Database();\n" +
					"\t...\n" +
				"</div>" +

				"<div class='heading_font bottom_space_1 indent_1'>" +
					"Option 2 – Using Instantiation:" +
				"</div>" +
				"<div class='text_font bottom_space_1 indent_2'>" +
					"Configure the Database Wrapper Script in your php code when creating an instance of the Database Wrapper Class:" +
				"</div>" +

				"<div class='code_font bottom_space_2 indent_3'>" +
					"Database(\"Server_Type\", \"Server\", Server_Port, \"User\", \"Password\", \"Database_Name\");" +
				"</div>" +

				"<div class='text_font bottom_space_1 indent_2'>Example</div>" +

				"<div class='code_font bottom_space_2 indent_3'>" +
					"&lt;?php\n" +
					"\trequire_once(\"./your_folder/database.php\");\n\n" +
					"\t$my_database = new Database(\"MySql\", \"www.mydomain.com\", 3306, \"username\", \"pa55w0rd\",\"mydatabase\");\n" +
					"\t...\n" +
				"</div>" +

				"<div class='text_font bottom_space_1 indent_2'>" +
					"This method of configuration ignores the \"database.cfg\" file." +
				"</div>";

	return html;
}



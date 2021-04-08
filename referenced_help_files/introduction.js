function brand_on_click()
{
	var win = window.open("http://www.unscarredtechnology.co.za", "_blank");
	win.focus();
}

function introduction_html()
{
	var html = 	"<div class='text_font bottom_space_2'>" +
					"A PHP Script that makes database interactions simpler." +
				"</div>" +
				"<div class='text_font bottom_space_1'>" +
					"This script currently supports the following Database Server Types:" +
				"</div>" +
				"<div class='text_font bottom_space_2 indent_1'Example</div>" +
					"&#8226; <i>MySql</i>" +
					"<br>" + 
					"&#8226; <i>PostgreSQL</i>" +
				"</div>" +
				"<div class='text_font bottom_space_2'>" +
					"Basic descriptions of the available functions:" +
				"</div>" +

				"<div class='code_font introduction_link' onclick=\"load_page('count')\">" +
					"Count($sql)" +
				"</div>" +
				"<div class='text_font bottom_space_2 indent_2'>" +
					"Retrieves an integer count from the database based on a Sql 'Count' statement." +
				"</div>" +

				"<div class='code_font introduction_link'  onclick=\"load_page('create_database')\">" +
					"Create_Database($db_name)" +
				"</div>" +
				"<div class='text_font bottom_space_1 indent_2'>" +
					"<i>MySql:</i>" +
				"</div>" +
				"<div class='text_font bottom_space_1 indent_3'>" +
					"Creates a new database given a valid Server, Server Port, Username and Password." +
				"</div>" +
				"<div class='text_font bottom_space_1 indent_2'>" +
					"<i>PostgreSQL:</i>" +
				"</div>" +
				"<div class='text_font bottom_space_1 indent_3'>" +
					"Creates a new database given a valid Server, Server Port, Username, Password and Existing Database. " +
					"Upon successful creation, the new database is set as the target database for the Database Wrapper instance. " +
					"If creation of the new database fails, error messages are displayed and no further action is taken." +
				"</div>" +

				"<div class='code_font introduction_link' onclick=\"load_page('get_insert_id')\">" +
					"Get_Insert_ID()" +
				"</div>" +
				"<div class='text_font bottom_space_2 indent_2'>" +
					"Upon creation of a new record, this function retrieves the value of an Auto Increment (MySql) / Serial (PostgreSQL) field of the new record." +
					" Used in conjunction with an 'INSERT INTO' Sql statement." +
				"</div>" +

				"<div class='code_font introduction_link' onclick=\"load_page('get_record')\">" +
					"Get_Record($sql)" +
				"</div>" +
				"<div class='text_font bottom_space_2 indent_2'>" +
					"Retrieves a single dimensional, key-value pair array from the database." +
				"</div>" +

				"<div class='code_font introduction_link' onclick=\"load_page('get_recordset')\">" +
					"Get_Recordset($sql)" +
				"</div>" +
				"<div class='text_font bottom_space_2 indent_2'>" +
					"Retrieves a multi-dimensional, key-value pair array from the database." +
				"</div>" +

				"<div class='code_font introduction_link' onclick=\"load_page('is_connected')\">" +
					"is_Connected()" +
				"</div>" +
				"<div class='text_font bottom_space_2 indent_2'>" +
					"Pings the Database Server Connection and returns True upon a valid connection and False upon failure." +
				"</div>" +

				"<div class='code_font introduction_link' onclick=\"load_page('run_query')\">" +
					"Run_Query($sql)" +
				"</div>" +
				"<div class='text_font bottom_space_2 indent_2'>" +
					"Runs a Sql Query and returns True upon success and False if the query fails." +
				"</div>" +

				"<div class='code_font introduction_link' onclick=\"load_page('set_database')\">" +
					"Set_Database($database_name)" +
				"</div>" +
				"<div class='text_font bottom_space_2 indent_2'>" +
					"Verifies the new database using the current Server, Server_Port, Username and Password. Upon successful verification," +
					" the new database is set to the target database." +
					" Upon failure of verification, an error message is displayed and no further action is taken." +
				"</div>" +

				"<div id='brand' class='text_font bottom_space_1 brand' onclick='brand_on_click()'>" +
					"<i>Developed by Unscarred Technology</i>" +
				"</div>";
	return html;
}